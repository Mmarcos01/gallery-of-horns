import React from 'react';

class HornedBeasts extends React.Component {
  render (){
    return (
      <div>
        <img src={this.props.imgUrl} alt={this.props.alt} title={this.props.title}></img>
        <h2>{this.props.title}</h2>    
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default HornedBeasts;
