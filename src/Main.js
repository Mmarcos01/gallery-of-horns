import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import HornedBeast from './HornedBeasts.js';
import data from './data.json';
// import beast from './img/hb1.jpg';

class Main extends React.Component {
  render() {
    //maps over data.json and returns the HornedBeast component that includes, img_url, description and title. beast is the name chosen that refers to each index in data.json
    let beastArray = data.map(beast => {
      return (<HornedBeast
        image_url={beast.image_url}
        description={beast.description}
        title={beast.title}
      />
      );
    });

    //returns the beastArray output within card columns
    return (
      <main>
        <CardColumns>
          {beastArray}
        </CardColumns>
      </main>
    );
  }
}


export default Main;

