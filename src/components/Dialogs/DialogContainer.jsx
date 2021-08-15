import React from 'react'
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { addMessageActionCreator, updateNewMessagTextActionCreator } from '../../redux/dialog_reducer'
import Dialog from './Dialog';


// const DialogContainer = (props) => {
//     debugger    
//     let state = props.state.getState();

//     let addMessage = () => {
//         props.dispatch(addMessageActionCreator())
//     }

//     let MessageText = (event) => {

        
//         props.dispatch(updateNewMessagTextActionCreator(event));
//     }
//     return (
//         <Dialog MessageText={MessageText} addMessage={addMessage}
//          dialogsData={state.dialogPage.dialogsData}
//          messagesData={state.dialogPage.messagesData}/>
//     )

// };

let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogPage
        
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {dispatch(addMessageActionCreator())},
        MessageText: (event) => {dispatch(updateNewMessagTextActionCreator(event))}
    }
}

let authRedirect = withAuthRedirect(Dialog)



const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(authRedirect);

export default DialogContainer;