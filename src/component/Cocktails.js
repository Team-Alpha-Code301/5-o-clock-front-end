import React from 'react';
import axios from 'axios';
import Header from '../Header';
import Footer from '../Footer';
import { withAuth0 } from '@auth0/auth0-react';
import CocktailForm from './CocktailForm';
import CocktailsModal from './CocktailsModal';
import './Welcome.css';

class Cocktails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cocktails: [],
      user: {},
      // displayCocktail: [],
      isModalShown: false,
      modalImage: '',
      modalName: ''
    };
  }

  findUser = async () => {
    // get user by ID to see if they exist
    let email = this.props.auth0.user.email;
    let foundUser = await axios.get(`${process.env.REACT_APP_SERVER}/users/${email}`);
    // if user exists, put their barCartItems into state
    // if not, create new user with empty array of barCartItems
    try {
      if (this.props.auth0.isAuthenticated) {
        const res = await this.props.auth0.getIdTokenClaims();
        const jwt = res.__raw;
        console.log(jwt);
        //create user if no user found in db
        if(!foundUser){
          let config = {
            method: 'post',
            data: {
              email: this.props.auth0.user.email,
              barCartItems: [this.state.barCartItems]
            },
            baseURL: process.env.REACT_APP_SERVER,
            url: `/users/${this.props.auth0.user.email}`,
            headers: {
              'Authorization': `Bearer ${jwt}`
            }
          };
          await axios(config);
        }
        //after user found/created, update state for UI
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

  getCocktails = async (ingredient) => {

    try {
      if (this.props.auth0.isAuthenticated) {

        // get the token from Auth0
        const res = await this.props.auth0.getIdTokenClaims();

        // extract the token from the response
        // MUST use double underscore
        const jwt = res.__raw;
        // console.log(jwt);

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

  // getModalCocktail = async (cocktail) => {
  //   try {
  //     if (this.props.auth0.isAuthenticated) {

  //       // get the token from Auth0
  //       const res = await this.props.auth0.getIdTokenClaims();

  //       // extract the token from the response
  //       // MUST use double underscore
  //       const jwt = res.__raw;
  //       // console.log(jwt);

  //       let config = {
  //         method: 'get',
  //         baseURL: process.env.REACT_APP_SERVER,
  //         url: '/displaycocktail',
  //         params: { name: `${cocktail}` },
  //         headers: {
  //           'Authorization': `Bearer ${jwt}`
  //         }
  //       };
        
  //       let showCocktail = await axios(config);
  //       console.log(showCocktail);
  //       this.setState({
  //         displayCocktail: showCocktail.data,
  //       })
  //     }
  //   } catch (error) {
  //     console.log('we have an error: ', error.response.data);
  //   }
  // }
  
  handleGetCocktails = (e) => {
    e.preventDefault();
    let selectedIngredient = e.target.ingredient.value;
    console.log(selectedIngredient);
    this.getCocktails(selectedIngredient);
  };
  
  componentDidMount = () => {
    this.getCocktails();
    // this.getModalCocktail();
  };
  
  render() {
    // console.log(this.state.displayCocktail);

    return (
      <>
        <Header />
        
        <CocktailForm
          handleGetCocktails={this.handleGetCocktails}
          cocktailsData={this.state.cocktails}
          // modalCocktail={this.state.displayCocktail}
          showModal={this.showModal}
          // getModalCocktail={this.getModalCocktail}
        />

        <CocktailsModal
          isModalShown={this.state.isModalShown}
          // displayCocktail={this.state.displayCocktail}
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
