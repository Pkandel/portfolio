import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { About, Home } from './';

class Router extends Component {

	render() {
		return (
			<Switch>
				<Route exact path="/admin/home" component={Home} />
				<Route path="/admin/about" component={About} />
			</Switch>
		);
	}
}

export default Router;