import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { About, Contact, Education, Experience, Home, Project, Skill, BaseEntity, Attribute } from './';

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
				<Route exact path="/attribute" component={Attribute} />
				<Route exact path="/notes" component={BaseEntity} />
				<Route exact path="/:base_entity/:attribute" component={Attribute}/>>
				<Route exact path="/:base_entity" component={BaseEntity} />
				<Route path="*" component={Home} />
			</Switch>
		);
	}
}

export default Router;