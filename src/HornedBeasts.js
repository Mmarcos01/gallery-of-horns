import React from 'react';
import Card from 'react-bootstrap/Card';


class HornedBeasts extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      numberOfClicks: 0,
      showEmoji: '',
    };
  }

  vote = () => {
    this.setState({ numberOfClicks: this.state.numberOfClicks + 1 });
    this.setState({ showEmoji: '🐱‍👤' });
    this.props.updateBeast(this.props.title);
    this.props.showModal();
  }

  render() {
    return (

      <Card>
        <Card.Img onClick={this.vote} variant="top" src={this.props.image_url} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            {this.props.description}
            <p>
              {this.state.numberOfClicks}
              {this.state.showEmoji}
            </p>
          </Card.Text>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
    );
  }
}

export default HornedBeasts;
