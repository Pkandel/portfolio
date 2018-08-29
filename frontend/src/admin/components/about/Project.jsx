import React, { Component } from 'react';
import { Form, Input, Icon, Collapse, DatePicker, Checkbox } from 'antd';
const FormItem = Form.Item,
    { TextArea } = Input,
    Panel = Collapse.Panel,
    { RangePicker } = DatePicker;
class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            still_working: false
        };
    }
    addSkill = () => {

    }

    handleChange = (e) => {
        const { name, value } = e.target;
        // setTimeout(() => {
        //     console.log(this.state);
        // });
    }

    handleRemove = (id) => {
        this.props.handleRemove(id);
    }

    render() {
        const { id } = this.props;
        const { company_name, demo_url, source_code, role_description, project_description, technology_used, project_name } = this.state;
        const Cross = () => (<div> Title
    	{id !== 1 && <Icon type="close" style={{ float: 'right', paddingRight: 20 }} onClick={() => this.handleRemove(id)} />}
        </div>);

        return (
            <Collapse defaultActiveKey={['1']}>
                <Panel header={<Cross />} key="1">
                    <Form className="login-form" onSubmit={this.handleSubmit} >
                        <FormItem>
                            <Input
                                placeholder="Project Name"
                                size="large"
                                addonAfter={"*"}
                                name="project_name"
                                value={project_name}
                                onChange={this.handleChange}
                            />
                        </FormItem>
                        <FormItem>
                            <Input
                                placeholder="Company Name"
                                size="large"
                                name="company_name"
                                value={company_name}
                                onChange={this.handleChange}
                            />
                        </FormItem>
                        <FormItem>
                            <Input
                                placeholder="Role Description"
                                size="large"
                                name="role_description"
                                value={role_description}
                                addonAfter={"*"}
                            />
                        </FormItem>
                        <FormItem>
                            <Input
                                placeholder="Technology Used"
                                size="large"
                                name="technology_used"
                                value={technology_used}
                                addonAfter={"*"}
                            />
                        </FormItem>
                        <FormItem>
                            <TextArea
                                placeholder="Project Description"
                                rows={4}
                                name="project_description"
                                value={project_description}

                            />
                        </FormItem>
                        <FormItem>
                            <Input
                                placeholder="Source Code URL"
                                size="large"
                                name="source_code"
                                value={source_code}
                            />
                        </FormItem>
                        <FormItem>
                            <Input
                                placeholder="Demo URL"
                                size="large"
                                name="demo_url"
                                value={demo_url}
                            />
                        </FormItem>
                        <FormItem>
                            <div className="right">
                                <Checkbox onChange={this.handleChange} name="public" >Is Public</Checkbox>
                            </div>
                        </FormItem>
                    </Form>
                </Panel>
            </Collapse>
        );
    }
}
export default Project;
