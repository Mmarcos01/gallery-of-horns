import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import HornedBeast from './HornedBeasts.js';
import FilteredBeast from './FilteredBeast.js';

class Main extends React.Component {
  render() {
    //maps over data.json and returns the HornedBeast component that includes, img_url, description and title. beast is the name chosen that refers to each index in data.json
    let beastArray = this.props.data.map(beast => {
      return (<HornedBeast
        image_url={beast.image_url}
        description={beast.description}
        title={beast.title}
        horns={beast.horns}
        showModal={this.props.showModal}
        updateBeast={this.props.updateBeast}
      />
      );
    });

    //returns the beastArray output within card columns
    return (
      <main>
        <FilteredBeast
          filterBeast={this.props.filterBeast}
          allBeasts={this.props.allBeasts}
          data={this.props.originalData}
        />
        <CardColumns>
          {beastArray}
        </CardColumns>
      </main>
    );
  }
}


export default Main;

