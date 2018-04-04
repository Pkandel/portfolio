import React, { Component } from 'react';
import axios from 'axios';
// for testing purpose
import { USER_ID } from '../const';

class About extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fetching: true,
			about: {},
			error:null
		};
		this.loadAbout();
	}
    loadAbout = () => {
    	axios.get(`http://localhost:28080/api/about/${USER_ID}`)
    		.then(res => {
    			this.setState({
    				about: res.data.data,
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
export default About;