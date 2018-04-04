import React, { Component } from 'react';
import axios from 'axios';
import { USER_ID } from '../const';

class BaseEntity extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fetching: true,
			baseEntity: {},
			error: null
		};
		this.loadEntity();
	}
	componentWillReceiveProps = (prevProps, nextProps) => {
		const path = prevProps.location.pathname.replace('/', '');
		this.loadEntity(path);
	}

	loadEntity = (_path) => {
		const path = _path === undefined ? this.props.location.pathname.replace('/', '') : _path;
		const url = path === 'notes' ? `http://localhost:28080/api/base-entity/${USER_ID}`
			: `http://localhost:28080/api/base-entity/${USER_ID}?title=${path}`;
		axios.get(url)
			.then(res => {
				this.setState({
					baseEntity: res.data.data,
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
		if (this.state.fetching) {
			return null;
		}

		return (
			<div>
				<pre>{JSON.stringify(this.state, null, 2)} </pre>
			</div>
		);
	}
}
export default BaseEntity;