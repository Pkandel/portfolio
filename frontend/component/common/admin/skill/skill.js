import { Component } from 'react';
import { Form, Input, Icon, Button, Collapse, DatePicker, Checkbox } from 'antd';
const FormItem = Form.Item,
    { TextArea } = Input,
    Panel = Collapse.Panel,
    { RangePicker, } = DatePicker;
import { Debug } from '../../debug';
class Skill extends Component {
    constructor(props){
        super(props);
        this.state = {
            skillWorking: false,
            office_url: ''
        }
    }
    addSkill = () => {

    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: name === 'stillWorking' ? !this.state.stillWorking : value
        })
    }

    handleRemove = (id) => {
       this.props.handleRemove(id);
    }
    render() {
        const { id } = this.props;
        const { stillWorking } = this.state;
        const Cross = () => (<div> Title 
        { id !== 1 && <Icon type="close" style={{ float: 'right', paddingRight: 20 }} onClick={() => this.handleRemove(id)} /> }
    </div>);

        return (
            <Collapse >
            <Panel header={<Cross />} >
                <Form className="login-form" onSubmit={this.handleSubmit} >
                    <FormItem>
                        <Input
                            placeholder="Office URL"
                            size="large"
                            addonAfter={"*"}
                            name="office_url"
                            value={this.state.office_url}
                            onChange={this.handleChange}
                        />
                    </FormItem>
                    <FormItem>
                        <Input
                            placeholder="Job Title (Javascript Developer)"
                            size="large"
                            addonAfter={"*"}
                        />
                    </FormItem>
                    <FormItem>
                        {stillWorking
                            ? <DatePicker placeholder="Start Date" />
                            : <RangePicker onChange={this.onDateChange} />
                        }
                        <div className="right">
                            <Checkbox onChange={(e) => this.handleChange(e, 1)} name="stillWorking" >Still Working </Checkbox>
                        </div>
                    </FormItem>
                    <FormItem>
                        <TextArea
                            placeholder="Role Description"
                            rows={4}

                        />
                    </FormItem>
                </Form>
            </Panel>
            {/* <Debug state={this.state} name="Skill" /> */}
        </Collapse>
        );
    }
}
export default Skill;
