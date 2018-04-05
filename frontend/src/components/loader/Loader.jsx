import React, { Component } from 'react';
import './loader.scss';
class Loader extends Component {
	render() {
		return (
			<div className="loader-container" id="loader-container">
				<div className="loader" />
				<div id="title" >Loading </div>
			</div>
		);
	}
}

export default Loader;