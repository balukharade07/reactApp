import React, { Component } from 'react';
import Footer from './footer';
import Header from './header';

import './App.css';

class App extends Component {

  componentDidMount(){
    document.title = "Logic Hotspot"
  }


  render() {

    return (
      <div className="App" >
          <Header />
          <Footer />
      </div>
    );
  }
}

export default App;
