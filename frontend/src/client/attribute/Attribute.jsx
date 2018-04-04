import React, { Component } from 'react';
import axios from 'axios';

class Attribute extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fetching: true,
			attribute: {},
			error:null
		};
		this.loadAbout();
	}
    loadAbout = () => {
    	const pathArray = this.props.location.pathname.split('/');
    	const attribute = pathArray[2];
    	axios.get(`http://localhost:28080/api/attribute/5ab70e46be4ec57ef49e066e/5ac439f16083a369ad2475ff?attribute=${attribute}`)
    		.then(res => {
    			this.setState({
    				attribute: res.data.data,
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
export default Attribute;