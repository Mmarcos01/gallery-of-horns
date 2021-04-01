import React from 'react';
import './App.css';
import data from './data.json';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import SelectedBeast from './SelectedBeast.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      display: false,
      allBeast: data,
      selectedBeast: {},
    };
  }

  showModal = () => {
    this.setState({ display: !this.state.display });
  }

  updateBeast = (name) => {
    const beastProfile = data.find(x => x.title === name);
    this.setState({ selectedBeast: beastProfile });
  }

  filterBeast = (allBeast) => {
    this.setState({allBeast:allBeast});
  }

  render() {
    return (
      <div>
        <Header />
        <Main
          showModal={this.showModal}
          updateBeast={this.updateBeast}
          allBeast={this.state.allBeast}
          filterBeast={this.filterBeast}
          originalData={data}
          // horns={this.state.horns}
        />
        <SelectedBeast
          display={this.state.display}
          showModal={this.showModal}
          selectedBeast={this.state.selectedBeast}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
