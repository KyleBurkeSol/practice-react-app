import React from 'react';

class PostList extends React.Component{
  // constructor(){
  //   super();
  // }
  render(){
    return(
      <ul id='post-list'>
        <li>
          <div className='post-date'>
            <span>1</span>
            <span>JUN</span>
          </div>
          <div className='post-details'>
            <h4>Post Title</h4>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
          </div>
        </li>
        <li>
          <div className='post-date'>
            <span>1</span>
            <span>JUN</span>
          </div>
          <div className='post-details'>
            <h4>Post Title</h4>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
          </div>
        </li>
        <li>
          <div className='post-date'>
            <span>1</span>
            <span>JUN</span>
          </div>
          <div className='post-details'>
            <h4>Post Title</h4>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
          </div>
        </li>
      </ul>
    );
  }
}

export default PostList;