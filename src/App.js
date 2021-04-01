import React from 'react';
import './App.css';
import data from './data.json';
import Header from './Header.js';
import Main from './Main.js';
import SelectedBeast from './SelectedBeast.js';
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

  showModal = () => {
    this.setState({ display: !this.state.display });
  }

  updateBeast = (name) => {
    const beastProfile = data.find(x => x.title === name);
    this.setState({ selectedBeast: beastProfile });
  }

  filterBeast = (data) => {
    this.setState({ allBeasts: data });
  }

  render() {
    return (
      <div>
        <Header />
        <Main
          data={this.state.data}
          showModal={this.showModal}
          updateBeast={this.updateBeast}
          filterBeast= {this.filterBeast}
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
