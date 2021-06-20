import React from 'react';
import store from '../../redux/state';

import AvatarInfo from './Avatarinfo/AvatarInfo';
import MyPostContainer from './MyPost/MyPostContainer';

import s from './Profile.module.css'


const Profile = (props) => {
 
  return (
    <div>
      <AvatarInfo />
      <MyPostContainer store={props.state}/>
    </div>)
}

export default Profile;