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
			html: '',
			showHeading: false
		};
	}
	 insertAtCaret(areaId, text) {
		let txtarea = document.getElementById(areaId);
		if (!txtarea) {
		  return;
		}
	  
		let scrollPos = txtarea.scrollTop;
		let strPos = 0;
		let br = ((txtarea.selectionStart || txtarea.selectionStart == '0') ?
		  "ff" : (document.selection ? "ie" : false));
		if (br == "ie") {
		  txtarea.focus();
		  let range = document.selection.createRange();
		  range.moveStart('character', -txtarea.value.length);
		  strPos = range.text.length;
		} else if (br == "ff") {
		  strPos = txtarea.selectionStart;
		}
	  
		let front = (txtarea.value).substring(0, strPos);
		let back = (txtarea.value).substring(strPos, txtarea.value.length);
		txtarea.value = front + text + back;
		this.setState({
			markdown: front + text + back
		});
		strPos = strPos + text.length;
		if (br == "ie") {
		  txtarea.focus();
		  let ieRange = document.selection.createRange();
		  ieRange.moveStart('character', -txtarea.value.length);
		  ieRange.moveStart('character', strPos);
		  ieRange.moveEnd('character', 0);
		  ieRange.select();
		} else if (br == "ff") {
			txtarea.selectionStart = strPos;
			txtarea.selectionEnd = strPos - 1;
			txtarea.focus();
		}
	  
		txtarea.scrollTop = scrollPos;

	  }
	componentDidMount() {
		document.addEventListener('click', (el) => {
			if (el.target.id !== 'headingIcon') {
				this.setState({
					showHeading: false
				});
			}
		});
		hljs.initHighlightingOnLoad();
		// set initial markup
		const markdown = `
## How to setup HTTPS ( Ubuntu 18)

#### Install certbot
\`\`\`
sudo apt-get update
sudo add-apt-repository ppa:certbot/certbot
sudo apt-get update
sudo apt install python-certbot-nginx
// check if nginx conf is valid
sudo nginx -t
// reload nginx conf
sudo systemctl reload nginx
\`\`\`
> Apply https to server_name 
\`\`\`
sudo certbot --nginx -d example.com -d www.example.com
\`\`\`
> Auto renew certificate
\`\`\`
sudo certbot renew --dry-run
\`\`\`

> See all certificates
\`\`\`
certbot certificates
\`\`\`

### If this does not work
> Install certbot-auto which is a wrapper for certbot
\`\`\`
wget https://dl.eff.org/certbot-auto
chmod a+x ./certbot-auto
sudo certbot-auto --nginx -d example.com -d www.example.com
sudo certbot-auto renew --dry-run
\`\`\`
\` bug \`
\`\`\`
Package python-virtualenv is not available, but is referred to by another package.
This may mean that the package is missing, has been obsoleted, or
is only available from another source

E: Package 'python-virtualenv' has no installation candidate
\`\`\`
> For this, add \`deb http://us.archive.ubuntu.com/ubuntu/ trusty main restricted universe\` to /etc/apt/sources.list`;
		this.setState({
			markdown,
			html: this.converter.makeHtml(markdown)
		});
	}
	componentDidUpdate () {
		// This is required if route changes
		const code = document.querySelectorAll('code');
		if (code.length) {
			code.forEach(c => {
				hljs.highlightBlock(c);
			});
		}
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
	handleHeadingClick = (e) => {
		this.setState({
			showHeading: !this.state.showHeading
		});
		if (!e.target.id) {
			this.insertAtCaret('markdownEditor', '#  ');
		}
	}
	handleItalicClick = () => {
		this.insertAtCaret('markdownEditor', "__");
	}
	render() {
		const { showHeading } = this.state;
		const Heading = () => {
			return showHeading ?  (
				<div className="heading-dropdown">
					<li> <h1  onClick={this.handleHeadingClick}>H1</h1></li>
					<li> <h2>H2</h2></li>
					<li> <h3>H3</h3></li>
					<li> <h4>H4</h4></li>
				</div>) : null;
		};
		return (
			<div className="home-component" id="markdownRoot">
				<div className="icon">
					<i className="fas fa-heading" onClick={this.handleHeadingClick} id="headingIcon"/>
					<Heading />
					<i className="fas fa-italic" onClick={this.handleItalicClick} />
					<i className="fas fa-bold" onClick={this.handleHeadingClick}/>
					<i className="fas fa-strikethrough" onClick={this.handleHeadingClick}/>
					<i className="fas fa-code" onClick={this.handleHeadingClick}/>
					<i className="fas fa-table" onClick={this.handleHeadingClick}/>
					<i className="fas fa-image" onClick={this.handleHeadingClick}/>
					<i className="fas fa-quote-right" onClick={this.handleHeadingClick}/>
					<i className="fas fa-list-ul" onClick={this.handleHeadingClick}/>
					<i className="fas fa-list-ol" onClick={this.handleHeadingClick}/>
					<i className="fas fa-th-list" onClick={this.handleHeadingClick}/>
					<div className="right">
						<i className="fas fa-align-left" onClick={this.handleHeadingClick}/>
						<i className="fas fa-align-center" onClick={this.handleHeadingClick}/>
						<i className="fas fa-align-right" onClick={this.handleHeadingClick}/>
						<i className="fas fa-redo" onClick={this.handleHeadingClick}/>
						<i className="fas fa-undo" onClick={this.handleHeadingClick}/>
					</div>
				</div>
				<textarea
					name="markdown"
					id="markdownEditor"
					value={this.state.markdown}
					onChange={this.handleChange}
				/>
				<h1> Preview Pane </h1>
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