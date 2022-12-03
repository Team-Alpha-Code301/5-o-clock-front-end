import React from 'react';
import { Card, Col } from 'react-bootstrap';

class CocktailsList extends React.Component {

  render() {

    return (
      <>
        <Col>
          <Card style={{ width: '18rem' }} >
            <Card.Img
              onClick={(this.props.showModal)}
              src={this.props.src}
              alt={this.props.name}
              title={this.props.name}
            />
            <Card.Body>
              <Card.Title>{this.props.name}</Card.Title>
              {/* <Button onClick={this.handleFav} className='button'>Pick Me!</Button> */}
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  }
}

export default CocktailsList;
