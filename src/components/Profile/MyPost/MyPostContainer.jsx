import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile_reducer';
import MyPost from './MyPost';


// const MyPostContainer = (props) => {
// let state = props.store.getState();
  

// let postAdd = () => {
//   props.store.dispatch(addPostActionCreator());
//   const action = updateNewPostTextActionCreator('');
//   props.store.dispatch(action);
// }

// let onPostChange = (text) => {
//   const action = updateNewPostTextActionCreator(text);
//   props.store.dispatch(action);
// }

//   return (
//     <MyPost updateNewPostText={onPostChange}
//      addPost={postAdd} 
//      posts={state.profilePage.posts}
//      newPostText={state.profilePage.newPostText}/>
//   )
// }

let mapStateToProps = (state) => {
  return {
posts: state.profilePage.posts,
newPostText: state.profilePage.newPostText
}
}

let mapDispatchToProps =(dispatch) => {
  return {
    updateNewPostText: (text) => {dispatch(updateNewPostTextActionCreator(text))},
    addPost: () => {
      dispatch(addPostActionCreator());
      dispatch(updateNewPostTextActionCreator(''));
    }
  }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;