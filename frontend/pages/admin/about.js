import { Component } from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Layout } from '../../component/common/admin';
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import { store } from '../../redux/store';
import  * as layoutActions  from '../../redux/actions/layout';
class About extends Component {
    render() {
        return (
            <Layout>      
            <h2>About Me</h2>
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

