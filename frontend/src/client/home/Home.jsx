import React, { Component } from 'react';
import hljs from 'highlight.js';
import './home.scss';

const showdown = require('showdown'),
	converter = new showdown.Converter();

class Home extends Component {
	constructor() {
		super();
		this.state = {
			markdown: '',
			html: converter.makeHtml('# Hello World')
		};
	}
	componentDidMount() {
		hljs.initHighlightingOnLoad();
	}
	handleChange = (e) => {
		this.setState({
			markdown: e.target.value,
			html: converter.makeHtml(e.target.value)
		}, () => {
			const code = document.querySelectorAll('code');
			if (code.length) {
				code.forEach(c => {
					hljs.highlightBlock(c);
				});
			}
		}
		);
	}
	render() {
		return (
			<div className="home-component">
				<textarea
					name="markdown"
					value={this.state.markdown}
					onChange={this.handleChange}
				/>
				<h1> This is client Home </h1>
				<div dangerouslySetInnerHTML={{ __html: `${this.state.html}`}} />
			</div>
		);
	}
}
export default Home;