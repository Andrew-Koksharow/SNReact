import React from 'react';

import AvatarInfo from './Avatarinfo/AvatarInfo';
import MyPostContainer from './MyPost/MyPostContainer';

import s from './Profile.module.css'


const Profile = (props) => {
 
  return (
    <div>
      <AvatarInfo profile={props.profile} status={props.status} 
      updateStatus={props.updateStatus} isOwner={props.isOwner}
      savePhoto={props.savePhoto} saveProfile={props.saveProfile}/>
      <MyPostContainer/>
    </div>)
}

export default Profile;