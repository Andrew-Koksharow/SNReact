import React from 'react'

import s from './Dialog.module.css'
import DialogItem from './DialogItem'
import Message from './Message'

const Dialog = (props) => {

 
    let dialogsElements = props.dialogs.dialogsData.map(dialog =>  <DialogItem name={dialog.name} id={dialog.id}/>);

    // Create a dialog based on array of data
    let messagesElements = props.dialogs.messagesData.map(m => <Message message={m.message} />);

let textMessage = React.createRef();

let addMessage = () => {
let text = textMessage.current.value;
alert(text);
}

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div> <textarea ref={textMessage}></textarea></div>
                <div> <button onClick={ addMessage }></button></div>
            </div>
        </div>
    )

}

export default Dialog;