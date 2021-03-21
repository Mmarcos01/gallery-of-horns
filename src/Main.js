import React from 'react';
import HornedBeast from './HornedBeasts.js';
import beast from './img/hb1.jpg';

class Main extends React.Component {
  render (){
    return (
    
      <main>
        <HornedBeast title="Title of the Animal" imgUrl={beast} description="Horned beast description here." />
        <HornedBeast title="Title of the Animal" imgUrl={beast} description="Horned beast description here." />
      </main>
    );
  }
}

export default Main;
