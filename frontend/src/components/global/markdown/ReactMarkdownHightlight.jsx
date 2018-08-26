import React, { Component } from 'react';
import hljs from 'highlight.js';
import './ReactMarkdownHightlight.scss';

const showdown = require('showdown');

class ReactMarkdownHightlight extends Component {
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
				strPos = strPos - 1;
				break;
			case 'bold':
				strPos = strPos - 2;
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
# These are current todos

> Features

- when rendering the default template, provide default text as well with selected
- add click function for align left, alight right and align center,
- add ability to undo and redo
- add function for all the buttons when text is selected in the clipboard
- make table more attractive by displaying the hover option
- Add preview option for tab, horizontal and vertical
- Add different theme option by selecting the name 

> Code Refactor
		
- optimise the click handler function
	`;
		this.setState({
			markdown,
			html: this.converter.makeHtml(markdown),
			state: this.props.previewStyle === 'tab' ? 'markdown' : null
		});
	}
	componentDidUpdate() {
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

	handleToggle = (state) => {
		this.setState({
			state
		});
	}
	MarkdownEditor = () => {
		const { showHeading } = this.state;
		const Heading = () => {
			return showHeading ? (
				<div className="heading-dropdown">
					<h1 onClick={(e) => this.handleHeadingClick(e, '#')}>H1</h1>
					<h2 onClick={(e) => this.handleHeadingClick(e, '##')}>H2</h2>
					<h3 onClick={(e) => this.handleHeadingClick(e, '###')}>H3</h3>
					<h4 onClick={(e) => this.handleHeadingClick(e, '####')}>H4</h4>
				</div>) : null;
		};
		return (
			<div className="markdown-editor">
				<div className="icon">
					<i className="fas fa-heading" onClick={this.handleHeadingClick} id="headingIcon" />
					<Heading />
					<i className="fas fa-italic" onClick={this.handleItalicClick} />
					<i className="fas fa-bold" onClick={this.handleBoldClick} />
					<i className="fas fa-strikethrough" onClick={this.handleStrikeClick} />
					<i className="fas fa-code" onClick={this.handleCodeClick} />
					<i className="fas fa-table" onClick={this.handleTableClick} />
					<i className="fas fa-image" onClick={this.handleImageClick} />
					<i className="fas fa-quote-right" onClick={this.handleQuoteClick} />
					<i className="fas fa-list-ul" onClick={this.handleListClick} />
					<i className="fas fa-list-ol" onClick={this.handleListNumberClick} />
					<i className="fas fa-th-list" onClick={this.handleToDoClick} />
					<div className="right">
						<i className="fas fa-align-left" onClick={(e) => this.handleTextAlignClick(e, 'left')} />
						<i className="fas fa-align-center" onClick={(e) => this.handleTextAlignClick(e, 'center')} />
						<i className="fas fa-align-right" onClick={(e) => this.handleTextAlignClick(e, 'right')} />
						<i className="fas fa-redo" onClick={(e) => this.handleUndoRedoClick(e, 'redo')} />
						<i className="fas fa-undo" onClick={(e) => this.handleUndoRedoClick(e, 'undo')} />
					</div>
				</div>
				<textarea
					name="markdown"
					id="markdownEditor"
					value={this.state.markdown}
					onChange={this.handleChange}
				/>
			</div>
		);
	}
	TabGroup = () => {
		return (
			<div className="tab">
				<button className="tab-button" onClick={() => this.handleToggle('preview')}>Preview</button>
				<button className="tab-button" onClick={() => this.handleToggle('markdown')}>Code</button>
			</div>);
	}

	PreviewPanel = () => {
		return (
			<div className="markdown-preview">
				<div className="preview-head"> Preview </div>
				<div dangerouslySetInnerHTML={{ __html: `${this.state.html}` }} className="preview-content" />
			</div>
		);
	}
	render() {
		const { state } = this.state;
		const { previewStyle } = this.props;
		const markdownStyle = `markdown-root preview-${previewStyle}`;
		const { MarkdownEditor, TabGroup, PreviewPanel } = this;
		return (
			<div className={markdownStyle} id="markdownRoot">
				{ state && state !== 'markdown' ?  null : <MarkdownEditor /> }
				{ state && state !== 'preview' ? null : <PreviewPanel /> }
				{ state && <TabGroup /> }
			</div>
		);
	}
}
export default ReactMarkdownHightlight;
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