import React from 'react';
import './App.css';
import data from './data.json';
import Header from './Header.js';
import Main from './Main.js';
import SelectedBeast from './SelectedBeast.js';
import FilteredBeast from './FilteredBeast.js';
import Footer from './Footer.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      display: false,
      data: data,
      selectedBeast: {},
    };
  }
  //function to filter beast; props go to FilteredBeast.js
  // filterBeast = () => {
  //   this.setState({})
  // }

  showModal = () => {
    this.setState({ display: !this.state.display });
  }

  updateBeast = (name) => {
    const beastProfile = data.find(x => x.title === name);
    this.setState({ selectedBeast: beastProfile });
  }

  render() {
    return (
      <div>
        <Header />
        <FilteredBeast />
        <Main
          data={this.state.data}
          showModal={this.showModal}
          updateBeast={this.updateBeast}
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
