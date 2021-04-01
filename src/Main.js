import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import HornedBeast from './HornedBeasts.js';
import FilteredBeast from './FilteredBeast.js';

class Main extends React.Component {
  render() {

    let beastArray = this.props.allBeast.map(beast => {
      return (<HornedBeast
        image_url={beast.image_url}
        description={beast.description}
        title={beast.title}
        showModal={this.props.showModal}
        updateBeast={this.props.updateBeast}
      />
      );
    });

    return (
      <>
        <FilteredBeast
          filterBeast={this.props.filterBeast}
          allBeast={this.props.allBeast}
          originalData={this.props.originalData}
        // data={this.props.originalData}
        />
        <main>
          <CardColumns>
            {beastArray}
          </CardColumns>
        </main>
      </>
    );
  }
}


export default Main;

