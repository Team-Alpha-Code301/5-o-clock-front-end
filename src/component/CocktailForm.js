import React from 'react';
import { Button, Form, Container, Row } from 'react-bootstrap';
import CocktailsList from './CocktailList';
import '../App.css';

class CocktailForm extends React.Component {

  render() {
    let cocktailArr = this.props.cocktailsData.length ? this.props.cocktailsData.map((cocktail) =>
      <CocktailsList
        showModal={this.props.showModal}
        key={cocktail.id}
        name={cocktail.name}
        src={cocktail.src}
      />
    ) : [];

    return (
      <>
        <Form className="formSubmit" onSubmit={this.props.handleGetCocktails}>
          <Form.Group className="cocktailForm" controlId="ingredient">
            <Form.Label>Type Your Ingredient</Form.Label>
            <Form.Control type="text" placeholder="Enter Ingredient Name" />
          </Form.Group>
          <Button type='submit'>Submit</Button>
        </Form>
        <Container>
          <Row>
            {cocktailArr}
          </Row>
        </Container>
      </>
    );
  }
}

export default CocktailForm;
