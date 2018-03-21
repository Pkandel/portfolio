import React, { Component } from 'react';

import { BrowserRouter } from 'react-router-dom';
import { Layout } from './containers';
class Root extends Component {
	render () {
		return (
			<BrowserRouter>
				<Layout />
			</BrowserRouter>
		);
	}
}

export default Root;
