import React from 'react';

function Posts(){
    return(
        <div>
            <h1>Posts</h1>
            <input id='searchFilterField' type='text' placeholder='Type here'></input>
            <button id='searchFilterButton' className='ui primary button'>Filter</button>
        </div>
    );
}

export default Posts;