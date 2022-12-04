import React from 'react';
import { Button, Modal} from 'react-bootstrap';
import '../App.css';

class CocktailsModal extends React.Component {

  CloseModal=() => {
    this.props.hideModal();
  };

  render() {
    // console.log(this.props.displayCocktail)

    return (

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
          {/* <p>{this.props.displayCocktail.ingredients}</p>
          <p>{this.props.displayCocktail.instructions}</p> */}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={this.CloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>

    );
  }
}

export default CocktailsModal;
