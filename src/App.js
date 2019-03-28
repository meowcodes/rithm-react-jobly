import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes'
import NavBar from './NavBar'
import './App.css';

/**
 * Renders NavBar and Routes
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
			isLoggedIn: this.setIsLoggedIn()
		}
		this.updateIsLoggedIn = this.updateIsLoggedIn.bind(this);
	}

	setIsLoggedIn() {
		return localStorage.getItem("_token") ? true : false;
  }
  
	updateIsLoggedIn() {
    const loginStatus = localStorage.getItem("_token") ? true : false;
    this.setState({
      isLoggedIn: loginStatus
    });
	}
  
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar isLoggedIn={ this.state.isLoggedIn } triggerLogout={ this.updateIsLoggedIn } />
          <Routes isLoggedIn={ this.state.isLoggedIn } triggerLogIn={ this.updateIsLoggedIn }/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
