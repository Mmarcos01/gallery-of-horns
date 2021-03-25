import React from 'react';

class HornedBeasts extends React.Component {
  // constructor (props){
  //   super(props);

  //   this.state = {
  //     numberOfClicks: 0,
  //     numberOfHearts: '',
  //   }
  // }


  render (){
    return (
      <div>
        <img src={this.props.imgUrl} alt={this.props.alt} title={this.props.title}></img>
        <h2>{this.props.title}</h2>    
        <p>{this.props.description}</p>
        {/* <Button onClick = { () => this.setState({
          numberofClicks: this.state.numberOfClicks + ''} >Vote </Button> */}

      </div>
    );
  }
}

export default HornedBeasts;
