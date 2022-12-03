import React from 'react';
import { Button, Modal} from 'react-bootstrap';
import '../App.css';

class CocktailsModal extends React.Component {

  CloseModal=() => {
    this.props.hideModal();
  };

  render() {

    return (

      <Modal className="modalDisplay" show={this.props.isModalShown}>
        <Modal.Header closeButton onClick={this.CloseModal}>
          <Modal.Title>{this.props.modalName}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img
            src={this.props.modalImage}
            alt={this.props.modalName}
            // width='466px'
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={this.CloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>

    );
  }
}

export default CocktailsModal;
