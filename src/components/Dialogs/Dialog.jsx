import React from 'react';
import s from './Dialog.module.css';
import DialogItem from './DialogItem';
import Message from './Message';

const Dialog = (props) => {

    let dialogsElements = props.dialogsData.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    // Create a dialog based on array of data
    let messagesElements = props.dialogsData.messagesData.map(m => <Message message={m.message} />);

    let addMessage = () => {
        props.addMessage();
    }

    let onMessageText = (event) => {
        let text = event.target.value;
        props.MessageText(text);

    }

    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div> <textarea onChange={onMessageText}
                    value={props.createNewMessagetext}
                    placeholder='Enter you message'></textarea></div>
                <div> <button onClick={addMessage}>Send</button></div>
            </div>
        </div>
    )

}

export default Dialog;