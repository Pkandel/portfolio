import { Component } from 'react';
import { Layout } from '../../component/common/admin';
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import { store } from '../../redux/store';
import * as layoutActions from '../../redux/actions/layout';
import { Debug } from '../../component'
import { Form, Input, Tabs, Icon, Button, Layout as AppLayout, Collapse, DatePicker, Checkbox } from 'antd';
const FormItem =
    Form.Item, TabPane = Tabs.TabPane,
    { TextArea } = Input,
    { Footer } = AppLayout,
    Panel = Collapse.Panel,
    { RangePicker,  } = DatePicker;
class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addSkill: 1,
            stillWorking: false,
            activeTab: 1,
            disablePrev: true,
            disableNext: false
        };
    }
    handleSubmit = () => {
        console.log('Form submitted')
    }
    handleSkillAdd = () => {
        this.setState({
            addSkill: this.state.addSkill + 1
        })
    }
     onDateChange = (date, dateString) => {
        console.log(date, dateString);
      }
      handleChange = (e) => {
          const { name, value } = e.target;
        this.setState({
            [name]: value
        })
      }

       checkDisable = () => {
        setTimeout(() => {
            this.setState({
                disablePrev: this.state.activeTab === 1 ? true : false,
                disableNext: this.state.activeTab === 3 ? true : false
            })
        }, 0);
      }
      handleTabClick = (number) => {
          this.setState({
              activeTab: Number(number)
          })
          this.checkDisable();
      }
      handleNavigation = (navigateTo) => {
        this.setState({
            activeTab: navigateTo === "prev" ? this.state.activeTab - 1 : this.state.activeTab + 1,
        })
        this.checkDisable();
      }
    render() {
        const { addSkill, stillWorking, activeTab, disablePrev, disableNext } = this.state
        const Skill = (number) => { 
               return ( <Collapse defaultActiveKey={[`${addSkill}`]}>
                        <Panel header={`Experience ${number}`} key={number}>
                            <Form className="login-form" onSubmit={this.handleSubmit} >
                                <FormItem>
                                    <Input
                                        placeholder="Office URL"
                                        size="large"
                                        addonAfter={"*"}
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
                                    { stillWorking 
                                    ? <DatePicker placeholder="Start Date" /> 
                                    : <RangePicker onChange={this.onDateChange} /> 
                                    }
                                    <div className="right">
                                        <Checkbox onChange={this.handleChange} name="stillWorking" value={!stillWorking}>Still Working </Checkbox>
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
                    </Collapse> )};

        const SkillArray = [];
        for(let i=1; i<= addSkill; i++){
            SkillArray.push(Skill(i));
        };

        return (
            <Layout>
                <Tabs activeKey={`${activeTab}`} onTabClick={this.handleTabClick}>
                    <TabPane tab={<span><Icon type="apple" />Experience</span>} key="1" >
                        { SkillArray.map((skill, key) => <div key={key}>{skill}</div>) }
                        <div className="center">
                            <Button type="default" onClick={this.handleSkillAdd}>Add More <Icon type="plus-circle-o" /></Button>
                        </div>
                    </TabPane>
                    <TabPane tab={<span><Icon type="android" />Education</span>} key="2" >
                        Tab 2
                    </TabPane>
                    <TabPane tab={<span><Icon type="android" />Skills</span>} key="3" >
                        Add Your Skills
                    </TabPane>
                </Tabs>

                <Footer style={{ textAlign: 'center', padding: '15px 40px 45px 40px' }}>
                    <div className="left">
                        <Button type="default" onClick={() => this.handleNavigation('prev')} disabled={disablePrev}><Icon type="left" />Prev</Button>
                    </div>
                    <div className="right">
                        <Button type="default" onClick={() => this.handleNavigation('next')} disabled={disableNext} >Next <Icon type="right" /></Button>
                    </div>

                </Footer>
                <style jsx>{`
                .left {
                    float:left;
                }
                :global(.right) {
                    float: right;
                }
                .center {
                    text-align: center;
                    margin: 10px;
                }
                `}</style>
                <Debug state={this.state} name="About"/>
            </Layout>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        layoutActions: bindActionCreators(layoutActions, dispatch)
    }
}

export default withRedux(store, null, mapDispatchToProps)(About);

