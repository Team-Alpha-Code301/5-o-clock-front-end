import { withAuth0 } from '@auth0/auth0-react';
import React from 'react';
import axios from 'axios';

import Header from '../Header';
import Footer from '../Footer';
import CocktailForm from './CocktailForm';
import CocktailsModal from './CocktailsModal';
import BarCart from './BarCart';
import './Welcome.css';

class Cocktails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cocktails: [],
      user: {},
      displayCocktail: [],
      isModalShown: false,
      modalImage: '',
      modalName: '',
      selectedIngredient: ''
    };
  }

  findUser = async () => {
    // get user by ID to see if they exist
    let email = this.props.auth0.user.email;
    let foundUser = await axios.get(`${process.env.REACT_APP_SERVER}/users/${email}`);
    // console.log('here is foundUser', foundUser);
    // if user exists, put their barCartItems into state
    // if not, create new user with empty array of barCartItems
    try {
      if (this.props.auth0.isAuthenticated) {
        const res = await this.props.auth0.getIdTokenClaims();
        const jwt = res.__raw;
        //create user if no user found in db
        if(!foundUser.data.email){
          console.log('no user found');
          let config = {
            method: 'post',
            data: {
              email: this.props.auth0.user.email,
              barCartItems: [this.state.barCartItems]
            },
            baseURL: process.env.REACT_APP_SERVER,
            url: `/users`,
            headers: {
              'Authorization': `Bearer ${jwt}`
            }
          };
          await axios(config);
        }
        //after user found/created, update state for UI
        console.log('user found/created');
        this.setState({
          user: {
            email: this.props.auth0.user.email,
            barCartItems: [this.state.barCartItems]
          }
        });
      }
    } catch (e) {
      console.log('POST User Error: ', e.response.data);
    }
  };

  showModal = (image, name) => {
    this.setState({
      isModalShown: true,
      modalImage: image,
      modalName: name
    });
  };

  hideModal = () => {
    this.setState({
      isModalShown: false
    });
  };

  addToCart = async (ingredient) => {
    try {
      if (this.props.auth0.isAuthenticated) {
        const res = await this.props.auth0.getIdTokenClaims();
        const jwt = res.__raw;
        console.log('putting item in: ', ingredient);
        let config = {
          method: 'put',
          data: {
            email: this.props.auth0.user.email,
            barCartItems: ingredient
          },
          baseURL: process.env.REACT_APP_SERVER,
          url: `/users/${this.props.auth0.user.email}`,
          headers: {
            'Authorization': `Bearer ${jwt}`
          }
        };
        await axios(config);
        this.setState({
          barCartItems: [...this.state.barCartItems, ingredient]
        })
      }
    } catch (e) {
      console.log('PUT Error: ', e.response.data);
    }
  }

  getCocktails = async (ingredient) => {

    try {
      if (this.props.auth0.isAuthenticated) {

        // get the token from Auth0
        const res = await this.props.auth0.getIdTokenClaims();

        // extract the token from the response
        // MUST use double underscore
        const jwt = res.__raw;

        let config = {
          method: 'get',
          baseURL: process.env.REACT_APP_SERVER,
          url: '/getcocktails',
          params: { i: `${ingredient}` },
          headers: {
            'Authorization': `Bearer ${jwt}`
          }
        };
        
        let cocktailResults = await axios(config);
        this.setState({
          cocktails: cocktailResults.data
        });
      }
    } catch (error) {
      console.log('we have an error: ', error.response.data);
    }
  };

  getModalCocktail = async (cocktail) => {
    try {
      if (this.props.auth0.isAuthenticated) {

        // get the token from Auth0
        const res = await this.props.auth0.getIdTokenClaims();

        // extract the token from the response
        // MUST use double underscore
        const jwt = res.__raw;
        let config = {
          method: 'get',
          baseURL: process.env.REACT_APP_SERVER,
          url: '/displaycocktail',
          params: { name: `${cocktail}` },
          headers: {
            'Authorization': `Bearer ${jwt}`
          }
        };
        let showCocktail = await axios(config);
        this.setState({
          displayCocktail: showCocktail.data,
        })
      }
    } catch (error) {
      console.log('we have an error: ', error.response.data);
    }
  }
  
  handleGetCocktails = (e) => {
    e.preventDefault();
    let selectedIngredient = e.target.ingredient.value;
    this.getCocktails(selectedIngredient);
    this.addToCart(selectedIngredient);
    this.setState({
      selectedIngredient: selectedIngredient
    });
  };
  
  componentDidMount = () => {
    this.getCocktails();
    this.findUser();
    this.getModalCocktail();
  };
  
  render() {
    return (
      <>
        <Header />
        
        <CocktailForm
          handleGetCocktails={this.handleGetCocktails}
          cocktailsData={this.state.cocktails}
          modalCocktail={this.state.displayCocktail}
          showModal={this.showModal}
          getModalCocktail={this.getModalCocktail}
        />

        {this.state.selectedIngredient && <BarCart 
          selectedIngredient={this.state.selectedIngredient}
        />}

        <CocktailsModal
          isModalShown={this.state.isModalShown}
          displayCocktail={this.state.displayCocktail}
          hideModal={this.hideModal}
          img={this.state.modalImage}
          name={this.state.modalName}
        />

        <Footer />
      </>
    );
  }
}

export default withAuth0(Cocktails);
