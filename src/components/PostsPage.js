import React from 'react';
import Post from './PostList';

function Posts(){
    return(
        <div>
            <h1>Posts</h1>
            <div>    
                <input id='searchFilterField' type='text' placeholder='Type here'></input>
                <button id='searchFilterButton' className='ui primary button'>Filter</button>
            </div>
            <div>
                <Post />
            </div>
        </div>
        
    );
}

export default Posts;