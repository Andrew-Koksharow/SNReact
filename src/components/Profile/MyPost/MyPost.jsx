import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post'

const MyPost = (props) => {

let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);


let newPostElement = React.createRef();

let postAdd = () => {
  let textPost = newPostElement.current.value;
  props.addPost(textPost);
  newPostElement.current.value ='';
}

  return (
    <div className={s.content}>
      <div className={s.h}>My posts</div>
      <div> <textarea className={s.item} ref={newPostElement}></textarea></div>
      <div> <button onClick={postAdd}>Create post</button></div>
      <div>{postsElements}</div>
    </div>)
}

export default MyPost;