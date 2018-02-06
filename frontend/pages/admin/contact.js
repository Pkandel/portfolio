import { Component } from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Layout } from '../../component/common/admin';

class Contact extends Component {
    render() {
        return (
            <Layout>
                <MuiThemeProvider>
                    <h1> Contact Me </h1>
                </MuiThemeProvider>
            </Layout>
        );
    }
}


export default Contact;