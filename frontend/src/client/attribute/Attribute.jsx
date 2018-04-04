import React, { Component } from 'react';
import axios from 'axios';
import { USER_ID, BASE_ID } from '../const';

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
		axios.get(`http://localhost:28080/api/attribute/${USER_ID}/${BASE_ID}?attribute=${attribute}`)
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