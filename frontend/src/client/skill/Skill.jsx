import React, { Component } from 'react';
import axios from 'axios';

class Skill extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fetching: true,
			skill: {},
			error:null
		};
		this.loadSkill();
	}
    loadSkill = () => {
    	axios.get('http://localhost:28080/api/skill/5abe236da74c374502e8bb4f')
    		.then(res => {
    			this.setState({
    				skill: res.data.data,
    				fetching: false
    			});
    		})
    		.catch(err => {
    			this.setState({
    				error: err.message
    			});
    			console.log('err', err);
    		}
    		);
    }

    render() {
    	if (this.state.fetching){
    		return null;
    	}

    	return (
    		<div>
    			<pre>{JSON.stringify(this.state, null, 2)} </pre>
    		</div>
    	);
    }
}
export default Skill;