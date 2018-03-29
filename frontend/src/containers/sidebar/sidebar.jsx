import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Item } = Menu;
const { Sider } = Layout;
import './sidebar.scss';
class Sidebar extends Component {
	render() {
		const collapsed = this.props.collapsible;
  	return (
  			<Sider
  				trigger={null}
  				collapsible
  				collapsed={collapsed}
  			>
  				<div className="logo" />
  				<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
  					<Item key="home" >
  						<Icon type="home" />
  						<span>Home</span>
  					</Item>
  					<Item key="about" >
  						<Icon type="smile" />
  						<span>About Me</span>
  					</Item>
  					<Item key="projects">
  						<Icon type="book" />
  						<span>Projects</span>
  					</Item>
  					<Item key="contact">
  						<Icon type="mail" />
  						<span>Contact Me</span>
  					</Item>
  					<Item key="blog">
  						<Icon type="form" />
  						<span>Write Blog</span>
  					</Item>
  				</Menu>
  			</Sider>
  	);
	}
}

export default Sidebar;