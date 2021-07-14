import { authAPI } from '../api/api';
const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false
}

const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
    }
    default:
      return state;
  }
}

export default authReducer;

export const setAuthUserData = (Id, email, login) => {
  return {
    type: SET_USER_DATA,
    data: { Id, email, login }
  }
}

export const auth = () =>  (dispatch) => { 
    
    authAPI.getAuth().then(data => {
      let { id, email, login } = data.data;
      dispatch(setAuthUserData(id, email, login));
    })
  }




