import React, { Component } from 'react';
import { Form, Input, Icon, Collapse, DatePicker, Checkbox } from 'antd';
const FormItem = Form.Item,
    { TextArea } = Input,
    Panel = Collapse.Panel,
    { RangePicker } = DatePicker;
class Experience extends Component {
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
        this.setState({
            [name]: name === 'still_working' ? !this.state.still_working : value
        });
    }

    handleRemove = (id) => {
        this.props.handleRemove(id);
    }

    render() {
        const { id } = this.props;
        const { office_url, still_working, title, start_date, description } = this.state;
        const Cross = () => (<div> Title
    	{id !== 1 && <Icon type="close" style={{ float: 'right', paddingRight: 20 }} onClick={() => this.handleRemove(id)} />}
        </div>);

        return (
            <Collapse defaultActiveKey={['1']}>
                <Panel header={<Cross />} key="1">
                    <Form className="login-form" onSubmit={this.handleSubmit} >
                        <FormItem>
                            <Input
                                placeholder="Office URL"
                                size="large"
                                addonAfter={"*"}
                                name="office_url"
                                value={office_url}
                                onChange={this.handleChange}
                            />
                        </FormItem>
                        <FormItem>
                            <Input
                                placeholder="Job Title (Javascript Developer)"
                                size="large"
                                name="title"
                                value={title}
                                addonAfter={"*"}
                            />
                        </FormItem>
                        <FormItem>
                            {still_working
                                ? <DatePicker placeholder="Start Date" name="start_date" onChange={this.handleChange} />
                                : <RangePicker onChange={this.onDateChange} />
                            }
                            <div className="right">
                                <Checkbox onChange={this.handleChange} name="still_working" >Still Working </Checkbox>
                            </div>
                        </FormItem>
                        <FormItem>
                            <TextArea
                                placeholder="Role Description"
                                rows={4}
                                name="description"
                                value={description}

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
export default Experience;
