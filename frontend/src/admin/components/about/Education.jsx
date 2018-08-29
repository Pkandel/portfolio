import React, { Component } from 'react';
import { Form, Input, Icon, Collapse, DatePicker, Checkbox } from 'antd';
const FormItem = Form.Item,
    { TextArea } = Input,
    Panel = Collapse.Panel,
    { RangePicker } = DatePicker;
class Education extends Component {
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
        const { course_name, still_working, college_name, start_date, course_description } = this.state;
        const Cross = () => (<div> Title
    	{id !== 1 && <Icon type="close" style={{ float: 'right', paddingRight: 20 }} onClick={() => this.handleRemove(id)} />}
        </div>);

        return (
            <Collapse defaultActiveKey={['1']}>
                <Panel header={<Cross />} key="1">
                    <Form className="login-form" onSubmit={this.handleSubmit} >
                        <FormItem>
                            <Input
                                placeholder="Course Name"
                                size="large"
                                addonAfter={"*"}
                                name="course_name"
                                value={course_name}
                                onChange={this.handleChange}
                            />
                        </FormItem>
                        <FormItem>
                            <Input
                                placeholder="College Name"
                                size="large"
                                name="college_name"
                                value={college_name}
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
                                placeholder="Course Description"
                                rows={4}
                                name="course_description"
                                value={course_description}

                            />
                        </FormItem>
                        <FormItem>
                        <div className="right">
                                <Checkbox onChange={this.handleChange} name="is_public" >Public</Checkbox>
                            </div>
                        </FormItem>
                    </Form>
                </Panel>
            </Collapse>
        );
    }
}
export default Education;
