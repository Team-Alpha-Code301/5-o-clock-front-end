import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import ListGroup from "react-bootstrap/ListGroup";
import axios from 'axios';
import { Button } from 'react-bootstrap';

class BarCart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      barCartItems: []
    }
  }

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

  addToCart = async (ingredient) => {
    try {
      if (this.props.auth0.isAuthenticated) {
        const res = await this.props.auth0.getIdTokenClaims();
        const jwt = res.__raw;
        let config = {
          method: 'put',
          data: {
            email: this.props.auth0.user.email,
            barCartItems: this.state.barCartItems
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

  deleteBarCart = async () => {
    let email = this.props.auth0.user.email;
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
        await axios(config);
        this.setState({
          barCartItems: []
        })
      }
    } catch (e) {
      console.log('DELETE Error: ', e.response.data);
    }
  }

  componentDidMount = () => {
    this.getBarCart();
  };

  render() {
    
    return (
      <>
        <ListGroup variant="flush">
          <ListGroup.Item>
            {this.props.selectedIngredient}
          </ListGroup.Item>
        </ListGroup>
        <Button 
        type='submit'>
          Delete Bar Cart
        </Button>
      </>
    );
  }
}

export default withAuth0(BarCart);
