import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;
const { TextArea } = Input;
import { model } from './home.model';
import axios from 'axios';
import './home.scss';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			uploadSuccess: false,
			model
		};
	}
	handleUpload = (e) => {
		this.setState({
			uploadSuccess: true,
			modlel: {
				...this.state.model,
				 img: e.target.files[0]
				 }
		});

	}
	fileSelectHandler = (e) => {
		const model = { ...this.state.model, img: e.target.files[0] };
		this.setState({
			model: { ...model },
			uploadSuccess: true
		});
	}
	handlePictureRemove = () => {
		this.setState({
			model: {
				...this.state.model,
				img: {}
			},
			uploadSuccess: false
		});
	}
	handleChange = (event) => {
		let { name, value } = event.target;
		const setValue = name === "linkedin" || name === 'facebook'
			? {
				link: {
					...this.state.model.link,
					[name]: value
				}
			}
			: {
				[name]: value
			};
		this.setState({
			model:
				{
					...this.state.model,
					...setValue
				}

		});
	}

	handleSubmit = () => {
		const url = '/api/about/5ab6ff272c89cd6a1d4dbf31';
		const baseURL = "http://localhost:28080";
		let fd = new FormData();
		console.log('images in state', this.state.model.img);
		fd.append('profile', this.state.model.img);
		console.log(fd);
		axios({
			url,
			baseURL,
			method: 'POST',
			data: fd
		}).then(res => console.log(res));
	}
	render() {
		const { title, company_name, description, link: { facebook, linkedin }, img } = this.state.model;
		return (
			<div>
				<Form className="login-form" encType="multipart/form-data">
					<FormItem>
						<Input
							placeholder="Title (Javascript Developer)"
							size="large"
							addonAfter={"*"}
							value={title}
							name="title"
							onChange={this.handleChange}
						/>
					</FormItem>
					<FormItem>
						<Input
							placeholder="Company Name"
							size="large"
							value={company_name}
							name="company_name"
							onChange={this.handleChange}
						/>
					</FormItem>
					<FormItem>
						<TextArea
							placeholder="Introduce Yourself"
							rows={4}
							value={description}
							name="description"
							onChange={this.handleChange}

						/>
					</FormItem>
					<FormItem>
						<Input
							placeholder="LinkedIn"
							size="large"
							addonAfter={"*"}
							value={linkedin}
							name="linkedin"
							onChange={this.handleChange}
						/>
					</FormItem>
					<FormItem>
						<Input
							placeholder="Facebook"
							size="large"
							value={facebook}
							name="facebook"
							onChange={this.handleChange}
						/>
					</FormItem>
					<FormItem>
						<div className="break break-lg" />
						<label>Upload your picture: </label>
						<input
							type="file"
							style={{display: 'none'}}
							name="profile"
							onChange={this.fileSelectHandler}
							ref={fileInput => this.fileInput = fileInput} />
						<Button onClick={() => this.fileInput.click()}>
							<Icon type="upload" /> Click to upload
    					</Button>
						{ this.state.uploadSuccess &&
						<div className="image-content">
							<Icon type="close" onClick={this.handlePictureRemove}/>
							<img src={URL.createObjectURL(img)} />
						</div>
						}
					</FormItem>
					<FormItem>
						<Button type="primary" htmlType="submit" onClick={this.handleSubmit}>Submit</Button>
					</FormItem>
					<pre>
					   { JSON.stringify(this.state.model, null , 2)}
					</pre>
				</Form>
			</div>
		);
	}
}

export default Home;
