import React from 'react';
import style from './PostsPage.module.css';
import Post from './Post';
import axios from 'axios';

class Posts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(result => {
                this.setState({ posts: result.data });
            });
    }

    render() {
        const posts = this.state.posts.map((post, index) => (
            <Post key={index} title={post.title} body={post.body} />
        ));

        return(
            <div className={style.container}>
                <h1>Posts</h1>
                <div class={style.searchField + " ui input"}>
                    <input type="text" placeholder="Type here" />
                </div>
                <button id='searchFilterButton' className='ui primary button'>Filter</button>
                {posts}
            </div>
        );
    }
}

export default Posts;