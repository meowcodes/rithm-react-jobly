import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './NavBar.css'

/**For rendering links to all main pages 
 * everywhere in the app */
class NavBar extends Component {
	constructor(props) {
		super(props);
		this.logout = this.logout.bind(this);
	}

	logout(){
		localStorage.removeItem("_token");
		this.props.triggerLogout();
	}

	render() {
		return ( 
			<nav className="NavBar" >
				<NavLink className="NavBar-logo" exact to="/">Jobly</NavLink> 
				{ this.props.isLoggedIn
					? <section>
						<NavLink to="/companies">Companies</NavLink>
						<NavLink exact to="/jobs">Jobs</NavLink>
						<NavLink exact to="/profile">Profile</NavLink>
						<a onClick={ this.logout }>Log Out</a>
					</section>
					: <section>
						<NavLink exact to="/login">Log In</NavLink>
						<NavLink exact to="/register">Register</NavLink>
					</section>
				}
			</nav>
		);
	}
}

export default NavBar;