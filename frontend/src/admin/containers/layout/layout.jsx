import React from 'react';
import { Layout, Icon } from 'antd';
const { Header, Content } = Layout;
import { Sidebar } from '../sidebar';
import Router from '../../Router';
import Loader from '../../../components/loader';
import './layout.scss';

class AdminLayout extends React.Component {
	state = {
		collapsed: false,
		valid: false
	};
	constructor(props) {
		super(props);
		this.checkAuth();
	}

	checkAuth = () => {
		setTimeout(() => {
			this.setState({
				valid: true
			});
		}, 2000);
	}
	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed
		});
	}
	render() {
		if (!this.state.valid) {
			return <Loader />;
		}
		return (
			<Layout>
				<Sidebar collapsible={this.state.collapsed} />
				<Layout>
					<Header style={{ background: '#fff', padding: 0 }}>
						<Icon
							className="trigger"
							type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
							onClick={this.toggle}
						/>
					</Header>
					<Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
						<Router />
					</Content>
				</Layout>
			</Layout>
		);
	}
}

export default AdminLayout;
