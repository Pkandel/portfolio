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
	 insertAtCaret(areaId, text, type) {
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
		switch (type) {
			case 'italic':
				strPos =strPos - 1;
				break;
			case 'bold':
				strPos = strPos -2;
				break;
			default:
				break;
		}
		if (br == "ie") {
		  txtarea.focus();
		  let ieRange = document.selection.createRange();
		  ieRange.moveStart('character', -txtarea.value.length);
		  ieRange.moveStart('character', strPos);
		  ieRange.moveEnd('character', 0);
		  ieRange.select();
		} else if (br == "ff") {
			txtarea.selectionStart = strPos;
			txtarea.selectionEnd = strPos;
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
		// hljs.initLineNumbersOnLoad();
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
	handleHeadingClick = (e, type) => {
		this.setState({
			showHeading: !this.state.showHeading
		});
		if (!e.target.id) {
			this.insertAtCaret('markdownEditor', `\n${type} `, 'heading');
		}
	}
	handleItalicClick = () => {
		this.insertAtCaret('markdownEditor', "__", 'italic');
	}
	handleBoldClick = () => {
		this.insertAtCaret('markdownEditor', "****", 'bold');
	}
	handleStrikeClick = () => {
		this.insertAtCaret('markdownEditor', "~~~~", 'bold');
	}

	handleCodeClick = () => {
		this.insertAtCaret('markdownEditor', " ``", 'italic');
	}
	handleTableClick = () => {
		const table = `\n| heading 1 | heading 2 |\n| --------- | ----------  |\n|     row1     |     row 2     |`;
		this.insertAtCaret('markdownEditor', table, 'table');
	}

	handleQuoteClick = () => {
		this.insertAtCaret('markdownEditor', '\n> ', 'quote');
	}
	handleListClick = () => {
		this.insertAtCaret('markdownEditor', '\n- ', 'list');
	}

	handleListNumberClick = () => {
		this.insertAtCaret('markdownEditor', '\n1. ', 'listNumber');
	}

	handleToDoClick = () => {
		this.insertAtCaret('markdownEditor', '\n- [] Demo List\n- [x] Demo List completed', 'todo');
	}

	handleTextAlignClick = (align) => {

	}

	handleUndoRedoClick = (action) => {

	}
	handleImageClick = () => {
		this.insertAtCaret('markdownEditor', '![alt msg<>](url =100x100)', 'image');
	}
	render() {
		const { showHeading } = this.state;
		const Heading = () => {
			return showHeading ?  (
				<div className="heading-dropdown">
					 <h1  onClick={(e) => this.handleHeadingClick(e, '#')}>H1</h1>
					 <h2 onClick={(e) => this.handleHeadingClick(e, '##')}>H2</h2>
					 <h3 onClick={(e) => this.handleHeadingClick(e, '###')}>H3</h3>
					 <h4 onClick={(e) => this.handleHeadingClick(e, '####')}>H4</h4>
				</div>) : null;
		};
		return (
			<div className="home-component" id="markdownRoot">
				<div className="icon">
					<i className="fas fa-heading" onClick={this.handleHeadingClick} id="headingIcon"/>
					<Heading />
					<i className="fas fa-italic" onClick={this.handleItalicClick} />
					<i className="fas fa-bold" onClick={this.handleBoldClick}/>
					<i className="fas fa-strikethrough" onClick={this.handleStrikeClick}/>
					<i className="fas fa-code" onClick={this.handleCodeClick}/>
					<i className="fas fa-table" onClick={this.handleTableClick}/>
					<i className="fas fa-image" onClick={this.handleImageClick}/>
					<i className="fas fa-quote-right" onClick={this.handleQuoteClick}/>
					<i className="fas fa-list-ul" onClick={this.handleListClick}/>
					<i className="fas fa-list-ol" onClick={this.handleListNumberClick}/>
					<i className="fas fa-th-list" onClick={this.handleToDoClick}/>
					<div className="right">
						<i className="fas fa-align-left" onClick={(e) => this.handleTextAlignClick(e, 'left')}/>
						<i className="fas fa-align-center" onClick={(e) => this.handleTextAlignClick(e, 'center')}/>
						<i className="fas fa-align-right" onClick={(e) => this.handleTextAlignClick(e, 'right')}/>
						<i className="fas fa-redo" onClick={(e) => this.handleUndoRedoClick(e, 'redo')}/>
						<i className="fas fa-undo" onClick={(e) => this.handleUndoRedoClick(e, 'undo')}/>
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