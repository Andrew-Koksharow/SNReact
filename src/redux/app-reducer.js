import { authAPI } from '../api/api';
import { auth } from './auth-reducer';
const SET_INITIALIZED = 'SET_INITIALIZED';

let initialState = {
  initialized: false
}

const appReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_INITIALIZED: {
      debugger
      return {
        ...state,
        initialized:true
      }
    }
    default:
      return state;
  }
}



export const inicializedSucces = () => {
  return {type: SET_INITIALIZED}
}


export const initialApp = () => (dispatch) => {
let promise = dispatch(auth());
promise.then(() => {dispatch(inicializedSucces())}) 
}

export default appReducer;