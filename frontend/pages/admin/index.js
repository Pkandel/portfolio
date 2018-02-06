import { Component } from 'react';
import axios from 'axios';
import { Layout } from '../../component';
class Root extends Component {
    static async getInitialProps() {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const posts = res.data;
        if (posts) {
            return { posts }
        } else {
            return { posts: [] }
        }
    }
    constructor(props) {
        super(props);
        const posts = this.props.posts;
        this.state= { 
            posts: posts,
        }

    }
    render() {
        const Posts = () => {
                return this.props.posts.map(({ id, title, body }) => (
                    <div key={id}>
                        <h2>{title}</h2>
                        <p>{body}</p>
                    </div>
                ))
        };

        return (
            <div>
                <Layout />
                <div className="container">
                    <div>
                </div>
                    <Posts />
                </div>

            </div>
        );
    }
}
export default Root;