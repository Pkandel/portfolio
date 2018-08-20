import React, { Component } from 'react';
import hljs from 'highlight.js';
import './home.scss';

const showdown = require('showdown');

class Home extends Component {
	constructor() {
		super();
		// see below for individual setup
		showdown.setFlavor('github');
		this.converter = new showdown.Converter();
		this.state = {
			markdown: '',
			html: this.converter.makeHtml('# Hello World')
		};
	}
	componentDidMount() {
		hljs.initHighlightingOnLoad();
	}
	handleChange = (e) => {
		this.setState({
			markdown: e.target.value,
			html: this.converter.makeHtml(e.target.value)
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
// const converterOptions = {
// 	strikethrough: true,
// 	tables: true,
// 	omitExtraWLInCodeBlocks: true,
// 	parseImgDimensions: true,
// 	simplifiedAutoLink: true,
// 	excludeTrailingPunctuationFromURLs: true,
// 	tasklists: true,
// 	smoothLivePreview: true,
// 	smartIndentationFix: true,
// 	disableForced4SpacesIndentedSublists: true,
// 	simpleLineBreaks: true,
// 	ghMentions: true,
// 	backslashEscapesHTMLTags:true,
// 	emoji: true

// };
// this.converter = new showdown.Converter(converterOptions);

/* parseImage dimentions
![foo](foo.jpg =100x80)     simple, assumes units are in px
![bar](bar.jpg =100x*)      sets the height to "auto"
![baz](baz.jpg =80%x5em)  Image with width of 80% and height of 5em
*/
/* simplyfiedAutoLink
some text www.google.com becomes
<p>some text <a href="www.google.com">www.google.com</a>
*/
/* excludeTrailingPunctuationFromURLs
some text www.google.com! becomes
<p>check this link <a href="www.google.com">www.google.com</a>!</p>
*/

// for emoji :smile: list here https://github.com/showdownjs/showdown/wiki/Emojis