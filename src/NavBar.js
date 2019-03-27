import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';;

class NavBar extends Component {
	render() {
		return ( 
			<div className = "NavBar" >
				<NavLink exact to="/">Jobly</NavLink>
				<NavLink exact to="/companies">Companies</NavLink>
				<NavLink exact to="/jobs">Jobs</NavLink>
				<NavLink exact to="/profile">Profile</NavLink>
				<NavLink exact to="/login">Log In</NavLink>
				<NavLink exact to="/register">Register</NavLink>
			</div>
		);
	}
}

export default NavBar;