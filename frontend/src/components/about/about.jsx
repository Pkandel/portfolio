import React, { Component } from 'react';
import  Skill  from '../skill';
import { Tabs, Icon, Button, Layout } from 'antd';
const TabPane = Tabs.TabPane,
	{ Footer } = Layout;
import './about.scss';
class About extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: 0,
			addSkill: 0,
			activeTab: 1,
			disablePrev: true,
			disableNext: false,
			SkillArray: []
		};
	}

	componentDidMount() {
		const SkillArray = [...this.state.SkillArray];
		SkillArray.push({data: {}, id: ++this.state.id });
		this.setState({
			SkillArray
		});
	}
    handleSubmit = () => {
    	console.log('Form submitted');
    }


    onDateChange = (date, dateString) => {
    	// console.log(date, dateString);
    }
    handleChange = (e, index) => {
       
    }

    checkDisable = () => {
    	setTimeout(() => {
    		this.setState({
    			disablePrev: this.state.activeTab === 1 ? true : false,
    			disableNext: this.state.activeTab === 3 ? true : false
    		});
    	}, 0);
    }
    handleTabClick = (number) => {
    	this.setState({
    		activeTab: Number(number)
    	});
    	this.checkDisable();
    }
    handleNavigation = (navigateTo) => {
    	this.setState({
    		activeTab: navigateTo === "prev" ? this.state.activeTab - 1 : this.state.activeTab + 1
    	});
    	this.checkDisable();
    }

    handleSkillAdd = () => {
    	const SkillArray = [ ...this.state.SkillArray ];
    	SkillArray.push({data: {}, id: ++this.state.id });
    	this.setState({
    		SkillArray
    	});
    }

    handleSkillChange = () => {
        
    }
    handleRemove = (key) => {
    	let SkillArray = this.state.SkillArray;
    	SkillArray = SkillArray.filter(({id}) => id !== key );
    	this.setState({ SkillArray });
    }
    render() {
    	const { activeTab, disablePrev, disableNext, SkillArray } = this.state;
    	return (
    		<Layout>
    			<Tabs activeKey={`${activeTab}`} onTabClick={this.handleTabClick} >
    				<TabPane tab={<span><Icon type="apple" />Experience</span>} key="1" >
    					{SkillArray.map(({ data, id }) => <Skill key={id} id={id} handleRemove={this.handleRemove} onChange={this.handleSkillChange}/>)}
    					<div className="center">
    						<Button type="default" onClick={this.handleSkillAdd}>Add More <Icon type="plus-circle-o" /></Button>
    					</div>
    				</TabPane>
    				<TabPane tab={<span><Icon type="android" />Education</span>} key="2" >
                        Tab 2
    				</TabPane>
    			</Tabs>
    			<Footer style={{ textAlign: 'center', padding: '15px 40px 45px 40px' }}>
    				<div className="left">
    					<Button type="default" onClick={() => this.handleNavigation('prev')} disabled={disablePrev}><Icon type="left" />Prev</Button>
    				</div>
    				<div className="right">
    					<Button type="default" onClick={() => this.handleNavigation('next')} disabled={disableNext} >Next <Icon type="right" /></Button>
    				</div>

    			</Footer>

    		</Layout>
    	);
    }
}

export default About;

