import React, { useState } from "react";
import s from './Profile.module.css';
import { Contact } from "./Avatarinfo/AvatarInfo";
import Button from "../Common/Button";


const ProfileDataBlock = (props) => {
    let [displayContact, showContact] = useState(false);

    return <div className={s.item}>


        <div>job: {props.profile.lookingForAJob ? "yes" : "no"}</div>
        <Button onClick={()=>showContact(true)} name={'contact'}/>

        <div>

            { 
            
            displayContact &&
           
            Object.keys(props.profile.contacts)
            .map(key => {
                return <Contact key={key} contactTitle={key} 
                contactValue={props.profile.contacts[key]} />
            })
       
       }
       {  displayContact &&   <button onClick={()=>showContact(false)}></button> }


            {props.isOwner ? <div><button onClick={props.goToEditMode}>Изменить информацию</button></div>: <div></div>}
        </div>

    </div>
}

export default ProfileDataBlock;