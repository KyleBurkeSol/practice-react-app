import React from 'react';
import style from './PostsPage.module.css';
import Post from './Post';

class Posts extends React.Component {
    constructor(props) {
        super(props);

        const fetchedPosts = [
            {
                'title': 'title 1',
                'body': 'body 1'
            },
            {
                'title': 'title 2',
                'body': 'body 2'
            },
            {
                'title': 'title 3',
                'body': 'body 3'
            }
        ];

        this.state = {
            posts: fetchedPosts
        };
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