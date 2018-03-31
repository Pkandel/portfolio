import React, { Component } from 'react';
import axios from 'axios';

class Experience extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fetching: true,
			experience: [],
			error:null
		};
		this.loadExperience();
	}
    loadExperience = () => {
    	axios.get('http://localhost:28080/api/experience/5abe236da74c374502e8bb4f')
    		.then(res => {
    			console.log(res);
    			this.setState({
    				experience: res.data.data,
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
export default Experience;