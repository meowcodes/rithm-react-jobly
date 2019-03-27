import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes'
import NavBar from './NavBar'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar/>
          <Routes/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
