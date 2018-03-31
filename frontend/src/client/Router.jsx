import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { About, Contact, Education, Experience, Home, Project, Skill } from './';

class Router extends Component {

	render() {
		return (
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/about" component={About} />
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/education" component={Education} />
				<Route exact path="/experience" component={Experience} />
				<Route exact path="/project" component={Project} />
				<Route exact path="/skill" component={Skill} />
				<Route path="*" component={Home} />
			</Switch>
		);
	}
}

export default Router;