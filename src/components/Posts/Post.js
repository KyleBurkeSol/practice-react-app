import React from 'react';

export default function Post(props) {
  return (
    <React.Fragment>
      <div>
        <span data-testid='day'>28</span>
        <span data-testid='month'>JAN</span>
      </div>
      <div>
        <span data-testid='title'>{props.title}</span>
        <span data-testid='content'>{props.body}</span>
      </div>
    </React.Fragment>
  );
}