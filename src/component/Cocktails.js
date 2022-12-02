import React from 'react';
// import axios from 'axios';
import Header from '../Header';
import Footer from '../Footer';
import { withAuth0 } from '@auth0/auth0-react';
import FrontPage from './FrontPage';
// import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Cocktails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cocktails: [],
      isModalShown: false,

    };
  }


  // handleAddCocktail = async(cocktail) => {

  // }

  render() {
    return (
      <>
        <Header />
        <FrontPage />
        <Footer />
      </>
    );
  }
}

export default withAuth0(Cocktails);
