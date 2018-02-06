import { Component } from 'react';
import withRedux from 'next-redux-wrapper'
import { store } from '../../redux/store';
import * as layoutActions from '../../redux/actions/layout'
import axios from 'axios';
import { Layout } from '../../component';
class Root extends Component {
    static async getInitialProps() {
       
    }
    constructor(props) {
        super(props);

    }
    render() {
        return (
                <Layout >
                    <div>
                        Welcome to the admin cite where you can create your portfolio
                    </div>
                </Layout>
               
        );
    }
}
export default withRedux(store, null, null)(Root);