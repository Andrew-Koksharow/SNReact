import React from 'react';
import AvatarInfo from './Avatarinfo/AvatarInfo';
import MyPost from './MyPost/MyPost';

import s from './Profile.module.css'

const Profile = () => {
  return (
    <div>
      <AvatarInfo />
      <MyPost />
    </div>)
}

export default Profile;