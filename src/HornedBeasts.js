import React from 'react';
import { Button } from 'react-bootstrap';


class HornedBeasts extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      numberOfClicks: 0,
      numberOfHearts: '',
    };
  }

  vote = () => {
    this.setState({ numberOfClicks: this.state.numberOfClicks + 1 });
    this.setState({ numberOfHearts: '💚' });
  }

  render() {
    return (
      <div>

        <h2>{this.props.title}</h2>

        <p>
          {this.state.numberOfClicks}
          {this.state.numberOfHearts}
        </p>

        <img src={this.props.img_url}
          description={this.props.description}
          title={this.props.title}
        />

        <p>{this.props.description}</p>
        <Button onClick={this.vote}>Vote Here</Button>

      </div>
    );
  }
}

export default HornedBeasts;
