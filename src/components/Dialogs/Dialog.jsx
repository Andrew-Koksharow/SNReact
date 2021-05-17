import React from 'react'

import s from './Dialog.module.css'
import DialogItem from './DialogItem'




const Message = (props) => {
    return (
        <div className='s.dialog'>{props.message}</div>
    )
}


const Dialog = () => {

    let dialogsData = [
        { id: 1, name: 'Andrew' },
        { id: 2, name: 'Sveta' },
        { id: 3, name: 'Julia' },
        { id: 4, name: 'Pasha' },
        { id: 5, name: 'Polina' },
        { id: 6, name: 'Seva' },
    ]

    let dialogsElements = dialogsData.map(dialog =>  <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesData = [
        { id: 1, message: 'hello' },
        { id: 2, message: 'how are you?' },
        { id: 3, message: 'hi' },
    ]


    // Create a dialog based on array of data
    let messagesElements = messagesData.map(m => <Message message={m.message} />);


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )

}

export default Dialog;