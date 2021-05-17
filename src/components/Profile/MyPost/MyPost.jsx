import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post'

const MyPost = (props) => {

let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

  return (
    <div className={s.content}>
      <h3>My posts</h3>
      <div> <textarea className={s.item}></textarea></div>
      <div> <button>Create post</button></div>
      <div>{postsElements}</div>
    </div>)
}

export default MyPost;