import React from 'react';
import Button from '../../Common/Button';
import s from './MyPost.module.css';
import Post from './Post/Post'



const MyPost = (props) => {

let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);


let newPostElement = React.createRef();

let postAdd = () => {
  props.addPost();
}

let onPostChange = () => {
  let text = newPostElement.current.value;
  props.updateNewPostText(text);
}

  return (
    <div className={s.content}>
      
      <div> <input onChange={onPostChange} className={s.item} ref={newPostElement} value={props.newPostText}/></div>
      <div> <Button onClick={postAdd} name={'Create post'}/></div>
      <div>{postsElements}</div>
    </div>)
}

export default MyPost;