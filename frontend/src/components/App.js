import React, { Component } from 'react';
import { decode } from 'jsonwebtoken';
import { withRouter } from 'react-router-dom';
import JoblyApi from '../api/JoblyAPI';
import Routes from './Routes'
import NavBar from './NavBar'
import './styles/App.css';

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
    this.handleApply = this.handleApply.bind(this);
  }
  
  // ensures currUser is updated prior to rendering page
  async componentDidMount() {
    try {
      await this.updateCurrUser();
    } catch(err) {
      this.setState({
        error: err
      });
    }
    this.setState({
      loading: false,
    })
  }
  
  // helper function that decodes token to 
  // set user's username in state
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

  // handles registering new user. 
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

  // removes token from local storage, updates currUser, 
  // and re-routes user to homepage.
  handleLogout(){
    localStorage.removeItem("_token");
    this.updateCurrUser();
    this.props.history.push("/");
  }
  
  // Sends note to server indicating that a job has been applied to. 
  // Updates currUser in state.
  async handleApply(id){
    try {
      await JoblyApi.getApplicationMsg(id);
      await this.updateCurrUser();
    } catch(err) {
      this.setState({
        error: err
    });
    }
  }
  
  render() {
    return (
      <div className="App">
        { this.state.loading
          ? <p>loading...</p>
          : (<>
            <NavBar currUser={ this.state.currUser } triggerLogout={ this.handleLogout } />
            <Routes currUser={ this.state.currUser } triggerLogin={ this.handleLogin } triggerRegister={ this.handleRegister } triggerApply={ this.handleApply } />
          </>)
        }
          
      </div>
    );
  }
}

export default withRouter(App);
