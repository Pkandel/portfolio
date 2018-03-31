import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { About, Home } from './components';

class Router extends Component {

	render() {
		return (
			<Switch>
				<Route exact path="/admin/home" component={Home} />
				<Route exact path="/admin/about" component={About} />
				<Route path="/admin/*" component={Home} />
			</Switch>
		);
	}
}

export default Router;