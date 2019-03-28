import React, { Component } from 'react';
import { decode } from 'jsonwebtoken';
import { withRouter } from 'react-router-dom';
import JoblyApi from './JoblyAPI';
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
      loading: true,
      currUser: null,
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }
  
  componentDidMount() {
    this.updateCurrUser();
  }
  
	async updateCurrUser() {
    let currUser;

    let token = localStorage.getItem("_token")
    if(token){
      let username = decode(token).username;
      currUser = await JoblyApi.getUserInfo(username);
    } else {
      currUser = null;
    }

    this.setState({
      currUser,
      error: null
    });
  }
  
  // get token from API
  async handleLogin(input){
    try {
      // get token and save to local storage
      const token = await JoblyApi.getTokenLogin(input);
      localStorage.setItem("_token", token);
      await this.updateCurrUser();
      this.props.history.push("/jobs");
    } catch(err) {
        this.setState({
            error: err
        });
    }
  }

  async handleRegister(input){
    try {
      // get token and save to local storage
      const token = await JoblyApi.getTokenRegister(input);
      localStorage.setItem("_token", token);
      await this.updateCurrUser();
      this.props.history.push("/jobs");
    } catch(err) {
      this.setState({
          error: err
      });
    }
  }

  handleLogout(){
    localStorage.removeItem("_token");
    this.updateCurrUser();
    this.props.history.push("/");
	}
  
  render() {
    return (
      <div className="App">
          <NavBar currUser={ this.state.currUser } triggerLogout={ this.handleLogout } />
          <Routes currUser={ this.state.currUser } triggerLogin={ this.handleLogin } triggerRegister={ this.handleRegister }/>
      </div>
    );
  }
}

export default withRouter(App);
