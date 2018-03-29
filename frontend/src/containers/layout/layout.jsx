import React from 'react';
import { Layout, Icon } from 'antd';
const { Header, Content } = Layout;
import { Sidebar } from '../sidebar';
import { Home, About } from '../../components';
import './layout.scss';

class SiderDemo extends React.Component {
  state = {
  	collapsed: false
  };
  toggle = () => {
  	this.setState({
  		collapsed: !this.state.collapsed
  	});
  }
  render() {
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
  					{/* <Home /> */}
  					<About />
  				</Content>
  			</Layout>
  		</Layout>
  	);
  }
}

export default SiderDemo;