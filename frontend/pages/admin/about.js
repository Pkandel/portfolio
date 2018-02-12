import { Component } from 'react';
import { Layout, Skill } from '../../component/common/admin';
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import { store } from '../../redux/store';
import * as layoutActions from '../../redux/actions/layout';
import { Debug } from '../../component';
import _ from 'lodash';
import { Form, Input, Tabs, Icon, Button, Layout as AppLayout, Collapse, DatePicker, Checkbox } from 'antd';
// import { Form, Input, Tabs, Icon, Button, Layout as AppLayout, Collapse, DatePicker, Checkbox } from 'antd-mobile';

const FormItem = Form.Item,
    TabPane = Tabs.TabPane,
    { TextArea } = Input,
    { Footer } = AppLayout,
    Panel = Collapse.Panel,
    { RangePicker, } = DatePicker;
class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            addSkill: 0,
            activeTab: 1,
            disablePrev: true,
            disableNext: false,
            SkillArray: [],
        };
    }

    componentDidMount() {
        const SkillArray = [...this.state.SkillArray];
        SkillArray.push({data: {}, id: ++this.state.id });
        this.setState({
            SkillArray
        })
    }
    handleSubmit = () => {
        console.log('Form submitted')
    }


    handleSkillAdd = () => {
      const SkillArray = [ ...this.state.SkillArray ];
        SkillArray.push({data: {}, id: ++this.state.id })
        this.setState({
            SkillArray
        })
    }
    onDateChange = (date, dateString) => {
        // console.log(date, dateString);
    }
    handleChange = (e, index) => {
       
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

    handleRemove = (key) => {
        let SkillArray = this.state.SkillArray;
        SkillArray = SkillArray.filter(({id}) => id !== key );
        this.setState({ SkillArray });
    }
    render() {
        const { addSkill, stillWorking, activeTab, disablePrev, disableNext, SkillArray } = this.state;
        return (
            <Layout>
                <Tabs activeKey={`${activeTab}`} onTabClick={this.handleTabClick} >
                    <TabPane tab={<span><Icon type="apple" />Experience</span>} key="1" >
                        {SkillArray.map(({ data, id }) => <Skill key={id} id={id} handleRemove={this.handleRemove} />)}
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
                <Debug state={this.state} name="About" />
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

