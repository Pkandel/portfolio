import React, { Component } from 'react';
import axios from 'axios';
import { USER_ID } from '../const';

class Project extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fetching: true,
			project: [],
			error:null
		};
		this.loadProject();
	}
    loadProject = () => {
    	axios.get(`http://localhost:28080/api/project/${USER_ID}`)
    		.then(res => {
    			this.setState({
    				project: res.data.data,
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
export default Project;