import React, { Component } from 'react';
import Router from '../Router';
import { NavLink } from 'react-router-dom';
import './layout.scss';
class ClientLayout extends Component {
	render() {
		return (
			<div>
				<li>
					<NavLink exact to="/"  activeClassName="active">Home</NavLink>
					<NavLink  exact to="/about"  activeClassName="active" >About</NavLink>
					<NavLink  exact to="/contact"  activeClassName="active" >Contact</NavLink>
					<NavLink  exact to="/education"  activeClassName="active" >Education</NavLink>
					<NavLink  exact to="/experience"  activeClassName="active" >Experience</NavLink>
					<NavLink  exact to="/project"  activeClassName="active" >Project</NavLink>
					<NavLink  exact to="/skill"  activeClassName="active" >Skill</NavLink>
					<NavLink  exact to="/notes"  activeClassName="active" >All Entity</NavLink>
					<NavLink  exact to="/React"  activeClassName="active" >One Entity</NavLink>
					<NavLink  exact to="/React/React-Router"  activeClassName="active" >Attribute</NavLink>

				</li>
				<Router />
			</div>
		);
	}
}

export default ClientLayout;