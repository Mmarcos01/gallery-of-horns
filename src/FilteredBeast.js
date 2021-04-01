import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
// import './FilteredBeast.css';

class FilteredBeast extends React.Component {

  handleForm = event => {
    const hornNum= +event.target.value;
    const hornsArr = this.props.data.filter(beast => beast.horns === hornNum);
    this.props.filterBeast(hornsArr);
  }

  render() {
    return (
      <Container >
        <Form>
          <Form.Group>
            <Form.Label>How many horns?</Form.Label>
            <Form.Control as="select" onChange={this.handleForm}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>100</option>
              <option>All</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

export default FilteredBeast;
