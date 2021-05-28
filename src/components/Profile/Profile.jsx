import React from 'react';
import AvatarInfo from './Avatarinfo/AvatarInfo';
import MyPost from './MyPost/MyPost';
import s from './Profile.module.css'


const Profile = (props) => {
  return (
    <div>
      <AvatarInfo />
      <MyPost posts={props.profile.posts}
       addPost={props.addPost}
        newPostText={props.profile.newPostText}
        createNewPostText={props.createNewPostText}/>
    </div>)
}

export default Profile;