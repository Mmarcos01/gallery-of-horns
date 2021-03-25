import React from 'react';
import HornedBeast from './HornedBeasts.js';
import data from './data.json';
// import beast from './img/hb1.jpg';

class Main extends React.Component {
  render() {
    return (
      <div>
        {data.map(beast => {
          return (
            <HornedBeast
              img_url={beast.image_url}
              description={beast.description}
              title={beast.title}
            />
          );
        })
        };
      </div>
    );
  }
}

export default Main;

