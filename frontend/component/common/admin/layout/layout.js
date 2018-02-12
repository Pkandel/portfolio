import { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Router from 'next/router';
import Head from 'next/head';
import { Debug } from '../../../common/debug';
import * as layoutActions from '../../../../redux/actions/layout'
import { Layout as AppLayout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = AppLayout;
const { Item } = Menu;
import layoutStyle from './layout.css';
class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0,
            collapsed: this.props.layout.collapsed,
            selectedRoute: undefined,

        }
    }

    componentWillUnmount = () =>{
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
      updateWindowDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
        this.props.layoutActions.setWindowWidth(this.state.width )
      }
    toggle = () => {
            this.setState({ collapsed: !this.state.collapsed, });
            this.props.layoutActions.toggleSidebar(this.state.collapsed )

    }
    handleClick = (e) => {
        const { key } = e;
        const { width } = this.state;
        Router.push(`/admin/${key}`);
        if(width < 725 ) {
            this.toggle();
        }
    }
    componentDidMount(){
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        this.setState ({
            selectedRoute: Router['router'].route.replace('/admin/', '')
        });
        // this will update the width in the state and we can decide 
        // whether open sidebar on initial load or not depending onthe window width
        this.updateWindowDimensions();
        if(this.state.width < 725 ){
            this.setState({ collapsed: true });
            this.props.layoutActions.toggleSidebar(true )
        }
    }
    
    render() {
        const { selectedRoute } = this.state;
        // what ever data needs to resolve put it here
        if(!selectedRoute || this.state.width === 0){
            return null;
        }
        return (
            <AppLayout>
                <Head>
                    <title>Portfolio Admin Panel</title>
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                        rel="stylesheet" />
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.2.0/antd.css" rel="stylesheet" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Head>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed }
                    breakpoint={768}
                    collapsedWidth={this.state.width > 725 ? 80 : 0}
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" onClick={this.handleClick} defaultSelectedKeys={[selectedRoute]} >
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

                <AppLayout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                        I can put what ever I like here
          </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', overflow:'initial'}}>
                {/* <Debug state={this.state} />> */}
                        {this.props.children}
                    </Content>
                </AppLayout>
                <style jsx> {layoutStyle} </style>
            </AppLayout>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        layoutActions: bindActionCreators(layoutActions, dispatch)
    }
}

const mapStateToProps = ({ layout }) => ({ layout })
export default connect(mapStateToProps, mapDispatchToProps)(Layout) ;