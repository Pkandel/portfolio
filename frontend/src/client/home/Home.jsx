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
			html: ''
		};
	}
	componentDidMount() {
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
	render() {
		return (
			<div className="home-component">
				<textarea
					name="markdown"
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