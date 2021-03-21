import React from 'react';
import HornedBeast from './HornedBeasts.js';

class Main extends React.Component {
  render (){
    return (
    
      <main>
        <HornedBeast title="Title of the Animal" imgUrl="./img/hb1.jpg" description="Horned beast description here." />
      </main>
    );
  }
}

export default Main;
