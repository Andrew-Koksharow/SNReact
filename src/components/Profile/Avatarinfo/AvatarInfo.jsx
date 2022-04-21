import React, { useState } from 'react';
import s from './Ava.module.css';
import Preloader from '../../Common/Preloader';
import ProfileDataForm from '../ProfileDataForm';
import ProfileStatusWithHooks from '../ProfileStatusWithHooks';
import userPhoto from '../../../assets/user_avatar.png';
const AvatarInfo = (props) => {
 
 
 let [editMode, setEditMode] = useState(false);
 
  if (!props.profile) {
    return <Preloader />
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
        {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected} placeholder={"Enter you photo"} />}
      </div>
      <div className={s.information}>
      <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
      
      
      {editMode? <ProfileDataForm offEditMode={()=>{setEditMode(false)}}/> :
      
      <ProfileDataBlock profile={props.profile} isOwner={props.isOwner} 
      goToEditMode={()=> {setEditMode(true)}}/>}
</div>
    </div>)}


const ProfileDataBlock = (props) => {
  return <div className={s.item}>
    
        <div>{props.profile.fullName}</div>
        <div>job: {props.profile.lookingForAJob ? "да" : "нет"}</div>
        <div>Contact's: {Object.keys(props.profile.contacts).map(key=> {
          <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
        })}
        {props.isOwner &&  <div><button onClick={props.goToEditMode}>Изменить информацию</button></div>}
        </div>
      </div>
}



const Contact = ({contactTitle},{contactValue}) => {
  return (<div>
    <b>{contactTitle} : </b> {contactValue}
  </div>)
}

export default AvatarInfo;