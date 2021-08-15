import { authAPI } from '../api/api';
const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  password: null,
  rememberMe: false
}

const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data,
      }
    }
    default:
      return state;
  }
}

export default authReducer;

export const setAuthUserData = (Id, email, login, isAuth) => {
  return {
    type: SET_USER_DATA,
    data: { Id, email, login, isAuth }
  }
}

export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(auth())
    }

  })
}

export const logout = () => (dispatch) => {
  authAPI.logout().then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null,null,null,false))
    }

  })
}

export const auth = () => (dispatch) => {

  return authAPI.getAuth().then(data => {
    let { id, email, login } = data.data;
    if (data.resultCode === 0) {dispatch(setAuthUserData(id, email, login, true));}
    
  })
}




