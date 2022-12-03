import React from 'react';
import axios from 'axios';
import Header from '../Header';
import Footer from '../Footer';
import { withAuth0 } from '@auth0/auth0-react';
import CocktailForm from './CocktailForm';
import CocktailsModal from './CocktailsModal';

class Cocktails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cocktails: [],
      userCocktails: [],
      isModalShown: false,
      modalImage: '',
      modalName: ''
    };
  }

  showModal = (image,name) => {
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
          params: {i:`${ingredient}`},
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

  handleGetCocktails = (e) => {
    e.preventDefault();
    let selectedIngredient = e.target.ingredient.value;
    console.log(selectedIngredient);
    this.getCocktails(selectedIngredient);
  };

  componentDidMount = () => {
    this.getCocktails();
  };

  render() {
    console.log(this.state.cocktails);
    return (
      <>
        <Header />

        <CocktailForm
          handleGetCocktails={this.handleGetCocktails}
          cocktailsData={this.state.cocktails}
          showModal={this.showModal}
        />

        <CocktailsModal
          showModal={this.showModal}
          hideModal={this.hideModal}
          cocktailsData={this.state.cocktails}
          isModalShown={this.state.isModalShown}
          modalImage={this.state.modalImage}
          modalName={this.state.modalName}
        />

        <Footer />
      </>
    );
  }
}

export default withAuth0(Cocktails);
