import { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import Router from 'next/router';
import Link from 'next/link';

import sidebarStyle from './sidebar.css';

export default class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    handleToggle = () => this.setState({ open: !this.state.open });

    handleClose = (name) => {
        Router.push(`/admin/${name}`)
        this.setState({ open: false });
    }
    render() {
        const Icon = (props) => <i className="material-icons sidebar-icon">{props.name}</i>;
        const menuItemStyle = {
            display: 'flex'
        };
        return (
            <div>
                <MuiThemeProvider>
                    <AppBar title="Menu" onClick={this.handleToggle} />
                    <Link href="/admin" >
                            <a >Admin Home</a>
                        </Link>
                    </MuiThemeProvider>
                    <MuiThemeProvider>
                    <Drawer
                        docked={false}
                        width={220}
                        open={this.state.open}
                        onRequestChange={(open) => this.setState({ open })}
                    >
                    <AppBar 
                        title="PK Portfolio" 
                        onClick={this.handleClose} 
                        iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                        class="menu"
                        />
                        <MenuItem primaryText="Home" leftIcon={<Icon name='home' />} onClick={() => this.handleClose('home')} innerDivStyle={menuItemStyle} />                        
                        <Divider />
                        <MenuItem primaryText="About" leftIcon={<Icon name='tag_faces' />} onClick={() => this.handleClose('about')} innerDivStyle={menuItemStyle} />
                        <Divider />                   
                        <MenuItem primaryText="Skills" leftIcon={<Icon name='book' />} onClick={() => this.handleClose('skills')} innerDivStyle={menuItemStyle}/>
                        <Divider />                        
                        <MenuItem primaryText="Projects" leftIcon={<Icon name='content_copy' />} onClick={() => this.handleClose('projects')} innerDivStyle={menuItemStyle}/>
                        <Divider />
                        <MenuItem primaryText="Contact" leftIcon={<Icon name='email' />} onClick={() => this.handleClose('contact')} innerDivStyle={menuItemStyle}/>
                    </Drawer>
                </MuiThemeProvider>
                <style jsx global>{sidebarStyle}</style>
            </div>
        );
    }
}