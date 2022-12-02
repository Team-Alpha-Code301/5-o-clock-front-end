import React from 'react';
import { Button, Form } from 'react-bootstrap';

class CocktailForm extends React.Component {
  handleGetCocktails = (e) => {
    e.preventDefault();
    let selectedIngredient = e.target.ingredient.value;
    console.log(selectedIngredient);
    this.props.getCocktails(selectedIngredient);
    console.log(this.props.getCocktails);
  };
  render() {
    return (
      <Form onSubmit={this.handleGetCocktails}>
        <Form.Group className="cocktailForm" controlId="ingredient">
          <Form.Label>Type Your Ingredient</Form.Label>
          <Form.Control type="text" placeholder="Enter Ingredient Name" />
        </Form.Group>
        <Button type='submit'>Submit</Button>
      </Form>
    );
  }
}

export default CocktailForm;
