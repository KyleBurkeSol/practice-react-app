import React from 'react';
import style from './Post.module.css'

export default function Post(props) {
  return (
    <div className={style.container}>
      <div className={style.dateContainer}>
        <span data-testid='day' className={style.day} >28</span>
        <span data-testid='month' className={style.month} >JAN</span>
      </div>
      <div className={style.postContainer}>
        <span data-testid='title' className={style.title} >{props.title}</span>
        <span data-testid='content'>{props.body}</span>
      </div>
    </div>
  );
}