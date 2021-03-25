import React from 'react';
import HornedBeast from './HornedBeasts.js';
// import beast from './img/hb1.jpg';
import data from './data.json';

class Main extends React.Component {
  render() {
    return (
      <div>
        {data.map(beast => {
          return (
            <HornedBeast
              img_url={beast.img_url}
              title={beast.title}
              description={beast.description}
            />
          );
        })
        };
      </div>
    );
  }
}

export default Main;

