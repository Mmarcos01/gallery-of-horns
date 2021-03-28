import React from 'react';
import { Modal, Button } from 'react-bootstrap';

class SelectedBeast extends React.Component {

  render() {
    return (
      <div>

        <Modal
          show={this.props.display}
          onHide={this.props.showModal}
          // size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {this.props.selectedBeast.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <span><img src={this.props.selectedBeast.image_url} /></span>
            <p>{this.props.selectedBeast.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.showModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default SelectedBeast;
