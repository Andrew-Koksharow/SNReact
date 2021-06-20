let CREATE_NEW_MESSAGE_TEXT = 'CREATE-NEW-MESSAGE-TEXT';
let MESSAGE_ADD = 'MESSAGE-ADD';


let initialState = {
  dialogsData: [
      { id: 1, name: 'Andrew' },
      { id: 2, name: 'Sveta' },
      { id: 3, name: 'Julia' },
      { id: 4, name: 'Pasha' },
      { id: 5, name: 'Polina' },
      { id: 6, name: 'Seva' },
  ],
  messagesData: [
      { id: 1, message: 'hello' },
      { id: 2, message: 'how are you?' },
      { id: 3, message: 'hi' },
  ],
  createNewMessagetext: 'm'
}


const dialogsReducer = (state = initialState, action) => {

  switch(action.type) {
case CREATE_NEW_MESSAGE_TEXT: {
  let stateCopy = {...state};
  stateCopy.createNewMessagetext = action.newText;
  return stateCopy;
}
  case MESSAGE_ADD: {
    let body = stateCopy.createNewMessagetext;
    let stateCopy = {...state,
       createNewMessagetext:'',
      messagesData:[...state.messagesData, {id: 6, message: body}]};
    stateCopy.messagesData = [...state.messagesData];
    
    stateCopy.messagesData.push({id: 6, message: body});
    stateCopy.createNewMessagetext = '';
    return stateCopy;
  }
    default: 
    return state;
}
  

    // if (action.type === 'CREATE-NEW-MESSAGE-TEXT') {
    //     state.createNewMessagetext = action.newText;
    // } else if (action.type === 'MESSAGE-ADD') {
    //     let body = state.createNewMessagetext;
    //     state.createNewMessagetext = " ";
    //     state.messagesData.push({ id: 6, message: body });
    // }
    // return state;
}

export default dialogsReducer;


export const updateNewMessagTextActionCreator = (text) => {
    return {
      type:'CREATE-NEW-MESSAGE-TEXT',
      newText: text
    }
  }

export const addMessageActionCreator = () => {
    return {
      type:'MESSAGE-ADD'
    }
  }