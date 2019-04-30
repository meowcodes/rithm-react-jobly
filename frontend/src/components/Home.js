import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.css'

/** Renders basic home component
 * Changes based on user being logged in or not
 */
class Home extends Component {
  render() {
    return (
      <div className="Home">
        <span className="Home-title">Jobly</span>
        <span className="Home-desc">All the jobs in one, convenient place</span>
        {this.props.currUser
          ? <span className="Home-greet">Welcome back!</span>
          : <Link to="/login" className="Home-button">Login</Link>}
      </div>
    );
  }
}

export default Home;
