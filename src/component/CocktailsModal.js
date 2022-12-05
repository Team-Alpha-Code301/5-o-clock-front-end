import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import '../App.css';

class CocktailsModal extends React.Component {

  CloseModal = () => {
    this.props.hideModal();
  };

  render() {

    // let ingredient = this.props.displayCocktail.ingredients.map((item, idx) => {
    //   return <ul key={idx}>{item[idx]}</ul>
    // })

    return (
      <>
        <Modal className="modalDisplay" show={this.props.isModalShown}>
          <Modal.Header closeButton onClick={this.CloseModal}>
            <Modal.Title>{this.props.name}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <img
              src={this.props.img}
              alt={this.props.name}
              width='466px'
            />
            <div>{this.props.displayCocktail.ingredients}</div>
            <div>{this.props.displayCocktail.instruction}</div>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.CloseModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default CocktailsModal;
