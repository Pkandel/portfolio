import React, { Component } from 'react';

import { BrowserRouter } from 'react-router-dom';
// import { AdminLayout } from './admin/containers';
import { ClientLayout } from './client';
class Root extends Component {
	render () {
		return (
			<BrowserRouter>
				<ClientLayout />
			</BrowserRouter>
		);
	}
}

export default Root;
