import React from 'react';
import s from './Post.module.css'

const Post = (props) => {

  return (
    <div className={s.post}>
      <div className={s.item}>{props.message}</div>
      <div className={s.likesCount}>{props.likesCount} Like 
      
      
      </div>
    </div>)
}

export default Post;