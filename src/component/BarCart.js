import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import ListGroup from "react-bootstrap/ListGroup";
import { Button } from 'react-bootstrap';
import './Welcome.css';

class BarCart extends React.Component {
  render() {
    return (
      <div className="barCartList">
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
        <section className="deleteButton">
          <Button className="deleteBarcart" onClick={() => this.props.deleteBarCart()}>
            Delete Bar Cart
          </Button>
        </section>
      </div>
    );
  }
}

export default withAuth0(BarCart);
