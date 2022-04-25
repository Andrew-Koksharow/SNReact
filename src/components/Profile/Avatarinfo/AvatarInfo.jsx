import React, { useState } from 'react';
import s from './Ava.module.css';
import Preloader from '../../Common/Preloader';
import ProfileDataForm from '../ProfileDataForm';
import ProfileStatusWithHooks from '../ProfileStatusWithHooks';
import ProfileDataBlock from '../ProfileDataBlock';
import userPhoto from '../../../assets/user_avatar.png';
const AvatarInfo = (props) => {
 
 //debugger
 let [editMode, setEditMode] = useState(false);
 

  if (!props.profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = e => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }
const onloadInfromationAboutProfile = (objectInformation) => {
  props.saveProfile(objectInformation);
    
}

  return (
    <div className={s.description}>

      <div className={s.avatar}>
        <img src={props.profile.photos.large || userPhoto}></img>
        {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected} placeholder={"Enter you photo"} />}
      </div>
      <div className={s.information}>
      <div>
        {props.profile.fullName}
      
      <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
      
      <div className={s.link}>
      {editMode? <ProfileDataForm offEditMode={()=>{setEditMode(false)}} saveProfile={((objectinformation)=> {onloadInfromationAboutProfile(objectinformation)})}/> :
      
      <ProfileDataBlock profile={props.profile} isOwner={props.isOwner} 
      goToEditMode={()=> {setEditMode(true)}} />}
    </div>
</div>
</div>
    </div>)}


export const Contact = ({contactTitle},{contactValue}) => {
  return (
  <div>
    <b>{contactTitle} : </b> {contactValue}
  </div>)
} 

export default AvatarInfo;