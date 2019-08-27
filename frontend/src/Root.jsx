import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout.jsx';
import 'antd/dist/antd.css';

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
