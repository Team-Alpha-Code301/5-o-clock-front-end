import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import ListGroup from "react-bootstrap/ListGroup";
import axios from 'axios';

class BarCart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      barCartItems: []
    }
  }

  // findUser = async () => {
  //   // get user by ID to see if they exist
  //   let email = this.props.auth0.user.email;
  //   let foundUser = await axios.get(`${process.env.REACT_APP_SERVER}/users/${email}`);
  //   // if user exists, put their barCartItems into state
  //   // if not, create new user with empty array of barCartItems
  //   if (foundUser.email === email) {
  //     this.setState({
  //       barCartItems: [this.state.barCartItems]
  //     });
  //   }
  // }

  addToCart = async (ingredient) => {
    try {
      if (this.props.auth0.isAuthenticated) {
        const res = await this.props.auth0.getIdTokenClaims();
        const jwt = res.__raw;
        console.log(jwt);
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



  componentDidMount = () => {
    this.findUser();
  };

  render() {
    
    return (
      <>
        <ListGroup variant="flush">
          <ListGroup.Item>
            {/* bar cart items */}
          </ListGroup.Item>
        </ListGroup>
      </>
    );
  }
}

export default withAuth0(BarCart);
