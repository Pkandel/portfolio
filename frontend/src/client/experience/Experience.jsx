import React, { Component } from 'react';
import axios from 'axios';
import { USER_ID } from '../const';
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
    	axios.get(`http://localhost:28080/api/experience/${USER_ID}`)
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