import React, { useState } from "react";
import s from './Profile.module.css';
import { Contact } from "./Avatarinfo/AvatarInfo";
import Button from "../Common/Button";


const ProfileDataBlock = (props) => {
    let [displayContact, showContact] = useState(false);

    return <div className={s.item}>


        <div> looking for a job: {props.profile.lookingForAJob ? "yes" : "no"}</div>

        {!displayContact && <Button onClick={() => showContact(true)} name={'contact'} />}

        <div>

            {

                displayContact &&

                Object.keys(props.profile.contacts)

                    .map(key => {
                        console.log(key,props.profile.contacts)
                        return <Contact key={key} contactTitle={key}
                            contactValue={props.profile.contacts[key]} />
                    })

            }
            {displayContact && <Button onClick={() => showContact(false)} name={'hide'} />}


            {props.isOwner ? <div><Button onClick={props.goToEditMode} name={'Изменить информацию'} /></div> : <div></div>}
        </div>

    </div>
}

export default ProfileDataBlock;