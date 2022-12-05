import React from 'react';
import { Card, Col } from 'react-bootstrap';

class CocktailsList extends React.Component {

  handleModal = (e) => {
    e.preventDefault();
    this.props.showModal(this.props.src, this.props.name);
    this.props.getModalCocktail(this.props.name);
    console.log(this.props.name);
  }

  render() {
    return (
      <>
        <Col>
          <Card style={{ width: '18rem' }} >
            <Card.Img
              onClick={this.handleModal}
              src={this.props.src}
              alt={this.props.name}
              title={this.props.name}
            />
            <Card.Body>
              <Card.Title>{this.props.name}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  }
}

export default CocktailsList;
