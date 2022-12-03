import React from 'react';
import { Button, Form, Container, Row } from 'react-bootstrap';
import CocktailsList from './CocktailList';

class CocktailForm extends React.Component {
  handleGetCocktails = (e) => {
    e.preventDefault();
    let selectedIngredient = e.target.ingredient.value;
    console.log(selectedIngredient);
    this.props.getCocktails(selectedIngredient);
  };
  render() {
    let cocktailArr = this.props.cocktailsData.length ? this.props.cocktailsData.map((cocktail) =>
      <CocktailsList
        key={cocktail.id}
        name={cocktail.name}
        src={cocktail.src}
      />
    ) : [];
    return (
      <>
        <Form onSubmit={this.handleGetCocktails}>
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
