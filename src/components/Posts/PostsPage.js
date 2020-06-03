import React from 'react';
import style from './PostsPage.module.css';
import Post from './Post';
import axios from 'axios';

class Posts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            filter: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(result => {
                this.setState({
                    posts: result.data
                });
            });
    }

    handleInputChange(event) {
        this.setState({ filter: event.target.value });
    }

    render() {
        const filter = this.state.filter;
        const posts = this.state.posts.map((post, index) => {
            const filterInTitleIndex = post.title.indexOf(filter);
            if (filter === '' || filterInTitleIndex != -1) {
                return (
                    <Post
                        key={index}
                        title={post.title}
                        body={post.body}
                        filterStart={filterInTitleIndex}
                        filterLength={filter.length}
                    />);
            }
        });

        return(
            <div className={style.container}>
                <h1>Posts</h1>
                <div class={style.searchField + " ui input"}>
                    <input type="text" placeholder="Type here" onChange={this.handleInputChange} />
                </div>
                <button id='searchFilterButton' className='ui primary button'>Filter</button>
                {posts}
            </div>
        );
    }
}

export default Posts;