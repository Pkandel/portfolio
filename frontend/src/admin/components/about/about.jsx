import React, { Component } from 'react';
import Education from './Education';
import Experience from './Experience';
import Project from './Project';
import { Tabs, Icon, Button, Layout } from 'antd';
const TabPane = Tabs.TabPane,
	{ Footer } = Layout;
import './about.scss';
class About extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: 0,
			educationId: 0,
			experienceId: 0,
			projectId:0,
			addSkill: 0,
			activeTab: 1,
			disablePrev: true,
			disableNext: false,
			educationArray: [],
			experienceArray: [],
			projectArray: [],
		};
	}
	initializeArray = (name) => {
		const arr = [...this.state[`${name}Array`]];
		arr.push({ data: {}, id: ++this.state[`${name}Id`] });
		this.setState({
			[`${name}Array`]: arr
		});
	}

	componentDidMount() {
		this.initializeArray('education');
		this.initializeArray('experience');
		this.initializeArray('project');
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

	handleSkillAdd = (name) => {
		this.initializeArray(name);
	}

	handleChange = () => {

	}
	handleRemove = (key, name) => {
		let arr = this.state[`${name}Array`];
		arr = arr.filter(({ id }) => id !== key);
		this.setState({ [`${name}Array`]: arr });
	}
	render() {
		const { activeTab, disablePrev, disableNext, experienceArray, educationArray, projectArray } = this.state;
		return (
			<Layout>
				<Tabs activeKey={`${activeTab}`} onTabClick={this.handleTabClick} >
					<TabPane tab={<span><Icon type="apple" />Experience</span>} key="1" >
						{
							experienceArray.map(({ data, id }) =>
								<Experience
									key={id}
									id={id}
									handleRemove={() => this.handleRemove(id, 'experience')}
									onChange={this.handleChange} />
							)
						}
						<div className="center">
							<Button type="default" onClick={() => this.handleSkillAdd('experience')}>Add More <Icon type="plus-circle-o" /></Button>
						</div>
					</TabPane>
					<TabPane tab={<span><Icon type="android" />Education</span>} key="2" >
						{
							educationArray.map(({ data, id }) =>
								<Education
									key={id}
									id={id}
									handleRemove={() => this.handleRemove(id, 'education')}
									onChange={this.handleChange} />
							)
						}
						<div className="center">
							<Button type="default" onClick={() => this.handleSkillAdd('education')}>Add More <Icon type="plus-circle-o" /></Button>
						</div>
					</TabPane>
					<TabPane tab={<span><Icon type="smile" />Projects</span>} key="3" >
						{
							projectArray.map(({ data, id }) =>
								<Project
									key={id}
									id={id}
									handleRemove={() => this.handleRemove(id, 'project')}
									onChange={this.handleChange} />
							)
						}
						<div className="center">
							<Button type="default" onClick={() => this.handleSkillAdd('project')}>Add More <Icon type="plus-circle-o" /></Button>
						</div>
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

