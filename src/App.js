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
      display: 'none',
      data: data,
      selectedBeast: {},
    };
  }

  showModal = () => {
    this.setState({ display: 'inline-block', });
  }

  hideModal = () => {
    this.setState({ display: 'none' });
  }

  render() {
    return (
      <div>
        <Header />
        <Main />
        <SelectedBeast />
        <Footer />
      </div>
    );
  }
}

export default App;
