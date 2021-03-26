import React from 'react';
import './HornedBeast.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class HornedBeasts extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      numberOfClicks: 0,
      ninjaCat: '',
    };
  }

  vote = () => {
    this.setState({ numberOfClicks: this.state.numberOfClicks + 1 });
    this.setState({ ninjaCat: '🐱‍👤' });
  }

  render() {
    return (

      <Card>
        <Card.Img variant="top" src={this.props.image_url} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            {this.props.description}
            {this.state.numberOfClicks}
            {this.state.ninjaCat}
          </Card.Text>
          <Button onClick={this.vote}>Vote Here</Button>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
    );
  }
}

export default HornedBeasts;
