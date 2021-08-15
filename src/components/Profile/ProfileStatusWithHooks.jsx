import React, { useState } from 'react';
import { useEffect } from 'react';


const ProfileStatusWithHooks = (props) => {

 let [editMode, setEditMode] = useState(false);
 let [status, setStatus] = useState(props.status);
 
useEffect(()=> {
setStatus(props.status )
}, [props.status]) //закиньте в меня функцию, которую я выполню , когда произойдет уже отриcовка
// Use effect запускать не всегда, а только в момент когда самый первый раз компонента вмонтировалась

const activateEditMode = () => {setEditMode(true);}

const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status)
}

const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
}

    return (
        <div >
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || 'Enter new status'}</span>
                    </div>
            }

            {editMode &&
                <div><input autoFocus={true} onBlur={deactivateEditMode} onChange={onStatusChange} value={status}/> </div>
            }

        </div>)
}


export default ProfileStatusWithHooks;