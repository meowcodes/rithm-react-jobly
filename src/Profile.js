import React, { Component } from 'react';
import JoblyApi from './JoblyAPI';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: this.props.first_name,
      last_name: this.props.last_name,
      email: this.props.email,
      photo_url: this.props.photo_url || "",
      password: "",
      alert: null,
      error: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.hideAlert = this.hideAlert.bind(this);
  }

  // send inputs to App.js
  async handleSubmit(evt) {
    try{
      evt.preventDefault();
      const {alert, error, ...patchData} = this.state;

      if (!patchData.photo_url) {
        delete patchData.photo_url;
      }

      await JoblyApi.updateUserInfo(this.props.username, patchData);

      this.setState({error: null, alert: "User updated successfully!"}, this.hideAlert)
      
    } catch(err) {
      this.setState({error: err, alert: "Update failed!"}, this.hideAlert)
    }
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  hideAlert() {
    setTimeout(() => this.setState({alert: null}), 3000)
  }

  render() {

    const alert = this.state.alert ? <p>{this.state.alert}</p> : null;

    return (
      <div className="Profile">
            <h1>Profile</h1>

            <form className="Profile" onSubmit={ this.handleSubmit }>

              <label htmlFor="username">Username</label>
              <p>{this.props.username}</p>

              <label htmlFor="first_name">First name</label>
              <input name="first_name" id="first_name" value={ this.state.first_name } onChange={ this.handleChange }></input>

              <label htmlFor="last_name">Last name</label>
              <input name="last_name" id="last_name" value={ this.state.last_name } onChange={ this.handleChange }></input>

              <label htmlFor="email">Email</label>
              <input name="email" id="email" value={ this.state.email } onChange={ this.handleChange }></input>

              <label htmlFor="photo_url">Photo URL</label>
              <input name="photo_url" id="photo_url" value={ this.state.photo_url } onChange={ this.handleChange }></input>

              <label htmlFor="password">Password</label>
              <input name="password" id="password" type="password" value={ this.state.password } onChange={ this.handleChange } required></input>

              <button>Submit</button> 
              
              <b> {alert} </b>

            </form>
            
      </div>
    );
  }
}

export default Profile;
