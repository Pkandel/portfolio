import { Component } from 'react';
import { Layout } from '../../component/common/admin';
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import { store } from '../../redux/store';
import  * as layoutActions  from '../../redux/actions/layout';
import { Form, Icon, Input, Button, Upload } from 'antd';
const FormItem = Form.Item;
const { TextArea } = Input;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { uploadSuccess: false, img: {} };
    }
    handleUpload = (e) => {
        this.setState({ uploadSuccess: true, img: e.target.files[0] })
    }
    normFile = (e) => {
        // console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    }

    handleSubmit = () => {
        console.log('Form submitted')
    }
    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Layout>
                <Form className="login-form" onSubmit={this.handleSubmit} >
                    <FormItem>
                        <Input
                            placeholder="Enter Your Name"
                            size="large"
                            addonAfter={"*"}
                        />
                    </FormItem>
                    <FormItem>
                        <Input
                            placeholder="Title (Javascript Developer)"
                            size="large"
                            addonAfter={"*"}
                        />
                    </FormItem>
                    <FormItem>
                        <Input
                            placeholder="Company Name"
                            size="large"
                        />
                    </FormItem>
                    <FormItem>
                        <TextArea
                            placeholder="Introduce Yourself"
                            rows={4}

                        />
                    </FormItem>
                    <FormItem>
                        <Input
                            placeholder="Email"
                            size="large"
                            addonAfter={"*"}
                        />
                    </FormItem>
                    <FormItem>
                        <Input
                            placeholder="LinkedIn"
                            size="large"
                            addonAfter={"*"}
                        />
                    </FormItem>
                    <FormItem>
                        <Input
                            placeholder="Facebook"
                            size="large"
                        />
                    </FormItem>
                    <FormItem>
                        <div className="break break-lg" />
                      <label>Upload your picture: </label>  
                        {getFieldDecorator('upload', {
                            valuePropName: 'fileList',
                            getValueFromEvent: this.normFile,
                        })(
                            <Upload name="logo" action="/upload" listType="picture">
                                <Button>
                                    <Icon type="upload" /> Click to upload
      </Button>
                            </Upload>
                            )}
                    </FormItem>
                    <FormItem>
                            <Button type="primary" htmlType="submit">Submit</Button>
                    </FormItem>
                </Form>
                <style jsx>{`
                :global(input:focus) {
                    font-size: 0.8em;
                    transition: 0.4s;
                }
                label {
                    margin-right: 20px;
                }

                `}</style>
            </Layout>
        );
    }
}

const WrappedDemo = Form.create()(Home);
const mapDispatchToProps = dispatch => {
    return {
        layoutActions: bindActionCreators(layoutActions, dispatch)
    }
}

export default withRedux(store, null, mapDispatchToProps)(WrappedDemo);
