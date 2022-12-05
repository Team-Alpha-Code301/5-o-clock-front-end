import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import ListGroup from "react-bootstrap/ListGroup";
import { Button } from 'react-bootstrap';

class BarCart extends React.Component {
  render() {
    return (
      <>
        <ListGroup className="p-5" variant="flush">
          {
            this.props.barCartItems.map((item, i) => (
              i !== 0 ?
                <ListGroup.Item key={i}>
                  {item}
                  <Button className="float-end" variant="danger" onClick={() => this.props.deleteOneIngredient(i)}>
                    Remove
                  </Button>
                </ListGroup.Item> : <div key={i}></div>
            ))
          }
        </ListGroup>
        <Button className="deleteBarcart" onClick={() => this.props.deleteBarCart()}>
          Delete Bar Cart
        </Button>
      </>
    );
  }
}

export default withAuth0(BarCart);
