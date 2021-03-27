import React from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {

  render() {
    return (
      <div>

        <Modal
          showModal={this.props.showModal}
          hideModal={this.props.hideModal}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Modal heading
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Centered Modal</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.hideModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default SelectedBeast;
