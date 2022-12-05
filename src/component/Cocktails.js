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
      barCartItems: []
    };
  }

  ////////// CRUD //////////
  //GET- Get User
  findUser = async () => {
    try {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      if (this.props.auth0.isAuthenticated) {
        // if user exists, put their barCartItems into state
        // if not, create new user with empty array of barCartItems
        // get user by ID to see if they exist
        let email = this.props.auth0.user.email;
        let foundUser = await axios.get(`${process.env.REACT_APP_SERVER}/users/${email}`, { headers: { 'Authorization': `Bearer ${jwt}` } });
        console.log(foundUser.data);
        //create user if no user found in db
        if (!foundUser.data.email) {
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
          },
        });
      }
    } catch (e) {
      console.log('POST User Error: ', e.response.data);
    }
  };

  //PUT - Add new ingredient to database
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

  //GET - Get API drink data
  getCocktails = async (ingredient) => {
    try {
      if (this.props.auth0.isAuthenticated) {

        const res = await this.props.auth0.getIdTokenClaims();
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

  //GET - Get API drink detail data
  getModalCocktail = async (cocktail) => {
    try {
      if (this.props.auth0.isAuthenticated) {
        const res = await this.props.auth0.getIdTokenClaims();
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

  //GET - Get barCartItems from MongoDB after hit 'submit' button.
  getBarCart = async () => {
    try {
      if (this.props.auth0.isAuthenticated) {
        const res = await this.props.auth0.getIdTokenClaims();
        const jwt = res.__raw;
        let config = {
          method: 'get',
          baseURL: process.env.REACT_APP_SERVER,
          url: `/users/${this.props.auth0.user.email}`,
          headers: {
            'Authorization': `Bearer ${jwt}`
          }
        };
        await axios(config)
          .then(res => {
            console.log('inside barcart:', res.data);

            this.setState({
              barCartItems: res.data.barCartItems
            });
          })
      }
    } catch (e) {
      console.log('GET Error: ', e.response.data);
    }
  }

  //DELETE 
  deleteBarCart = async () => {
    let email = this.props.auth0.user.email;
    console.log("hello");
    console.log(email);
    try {
      if (this.props.auth0.isAuthenticated) {

        const res = await this.props.auth0.getIdTokenClaims();
        const jwt = res.__raw;
        
        let config = {
          method: 'delete',
          baseURL: process.env.REACT_APP_SERVER,
          url: `/users/${email}`,
          headers: {
            'Authorization': `Bearer ${jwt}`
          }
        };
        await axios(config)
        // console.log('inside barcart:', res.data);
        .then(res => {
          console.log('inside barcart:', res.data);
          this.setState({
            barCartItems: []
          });
        })
        this.findUser();
      }
    } catch (e) {
      console.log('DELETE Error: ', e.response.data);
    }
  }

  // PUT - Delete an ingredient and update to mongoDB
  deleteOneIngredient = async (index) => {
    try {
      let newBarCartItems = this.state.barCartItems.filter((element, i) => i !== index)
      if (this.props.auth0.isAuthenticated) {
        const res = await this.props.auth0.getIdTokenClaims();
        const jwt = res.__raw;
        console.log("Update barCartItems to database");
        let config = {
          method: 'put',
          data: {
            email: this.props.auth0.user.email,
            barCartItems: newBarCartItems
          },
          baseURL: process.env.REACT_APP_SERVER,
          url: `/users/${this.props.auth0.user.email}`,
          headers: {
            'Authorization': `Bearer ${jwt}`
          }
        };
        await axios(config);
        this.setState({
          barCartItems: newBarCartItems
        })
      }
    } catch (e) {
      console.log('Cannot patch. ', e.response.data);
    }
  }

  ////////// CRUD - end  //////////


  handleGetCocktails = async (e) => {
    e.preventDefault();
    let selectedIngredient = e.target.ingredient.value;
    this.getCocktails(selectedIngredient);
    this.addToCart(selectedIngredient);
    this.getBarCart();

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

  componentDidMount = () => {
    this.getCocktails();
    this.findUser();
    this.getModalCocktail();
    this.getBarCart();
  };

  render() {

    console.log(this.state.barCartItems);

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

        {this.state.barCartItems ?
        <BarCart
          barCartItems={this.state.barCartItems}
          deleteOneIngredient={this.deleteOneIngredient}
          deleteBarCart={this.deleteBarCart}
        /> : null
        }

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
