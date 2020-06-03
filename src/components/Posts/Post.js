import React from 'react';
import style from './Post.module.css'

export default function Post(props) {
  let title = props.title;
  
  if (props.filterLength != 0) {
    const startIndex = props.filterStart;
    const length = props.filterLength;
    const start = title.slice(0, startIndex);
    const middle = title.slice(startIndex, startIndex + length);
    const end = title.slice(startIndex + length, title.length);
    title = [start, <span className={style.highlight}>{middle}</span>, end];
  }
  
  return (
    <div className={style.container}>
      <div className={style.dateContainer}>
        <span data-testid='day' className={style.day} >28</span>
        <span data-testid='month' className={style.month} >JAN</span>
      </div>
      <div className={style.postContainer}>
        <span data-testid='title' className={style.title} >{title}</span>
        <span data-testid='content'>{props.body}</span>
      </div>
    </div>
  );
}