import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post'

const MyPost = () => {

  let postsData = [
    { id: 1, message: 'Hello, it my first post', likesCount: 12 },
    { id: 2, message: 'yo', likesCount: 5 },
    { id: 3, message: 'hhahhaa classic', likesCount: 10 },
    { id: 4, message: 'hey', likesCount: 10 },
    { id: 5, message: 'wwaawaw' },
    { id: 6, message: 'React is so cool' },
  ]


  let postsElements = postsData.map( p => <Post message={p.message} likesCount={p.likesCount} /> );

  return (
    <div className={s.content}>
      <h3>My posts</h3>
      <div> <textarea className={s.item}></textarea></div>
      <div> <button>Create post</button></div>
<div>{postsElements}</div>      
    </div>)
}

export default MyPost;