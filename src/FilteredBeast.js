import React from 'react';
import Form from 'react-bootstrap/Form';

class FilteredBeast extends React.Component {

  render() {
    return (

      <Form>
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label>How many horns?</Form.Label>
          <Form.Control as="select" custom>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>100</option>
            <option>All</option>
          </Form.Control>
        </Form.Group>
      </Form>
    );
  }
}

export default FilteredBeast;
