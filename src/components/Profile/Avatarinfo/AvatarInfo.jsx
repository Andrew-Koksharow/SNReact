import React from 'react';
import s from './Ava.module.css';
import Preloader from '../../Common/Preloader';
import ProfileStatusWithHooks from '../ProfileStatusWithHooks';
import userPhoto from '../../../assets/user_avatar.png';
const AvatarInfo = (props) => {
if (!props.profile) {
  return  <Preloader/>
}

const onMainPhotoSelected = e => {
  if (e.target.files.length) {
props.savePhoto(e.target.files[0])
  }
}


  return (
    <div className={s.description}>
      
      <div className={s.avatar}>
       <img src={props.profile.photos.large || userPhoto}></img>
       {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
        </div>
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/> 
      <div className={s.item}>
       <div>Name : {props.profile.fullName}</div> 
       <div>Status:  {props.profile.aboutMe}</div>
       <div>Contact's:
         <div>Facebook: {props.profile.contacts.facebook}</div>
         <div>website: {props.profile.contacts.website}</div>
         <div>vk: {props.profile.contacts.vk}</div>
       </div>
        </div>

    </div>)
}

export default AvatarInfo;