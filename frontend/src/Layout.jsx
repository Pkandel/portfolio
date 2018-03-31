import React, { Component } from 'react';
import { AdminLayout } from './admin/containers';
import { ClientLayout } from './client';
import { withRouter } from 'react-router';
class Layout extends Component {
	render () {
		const { pathname } = this.props.location;
		if (pathname.includes('/admin')) {
			return <AdminLayout />;
		}
		return <ClientLayout />;
        
	}
}

export default withRouter(Layout);
