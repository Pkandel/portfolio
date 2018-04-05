import React, { Component } from 'react';
import { AdminLayout } from './admin/containers';
import { ClientLayout } from './client';
import { withRouter } from 'react-router';
import Loader from './components/loader';
class Layout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false
		};
	}

	componentDidMount = () => {
		this.setState({
			loaded: true
		});
	}
	render () {
		const { pathname } = this.props.location;
		if (!this.state.loaded) return <Loader />;
		if (pathname.includes('/admin')) {
			return <AdminLayout />;
		}
		return <ClientLayout />;
        
	}
}

export default withRouter(Layout);
