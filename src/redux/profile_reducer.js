import {profileAPI} from '../api/api'
let ADD_POST = 'ADD-POST';
let CREATE_NEW_POST_TEXT = 'CREATE-NEW-POST-TEXT';
let SET_USERS_PROFILE = 'SET_USERS_PROFILE';
let SET_STATUS = 'SET_STATUS';
let SAVE_PHOTO_SUCCES='SAVE_PHOTO_SUCCES';

let initialState = {
  posts: [
    { id: 1, message: "Hello, it's test post/", likesCount: 100 },
    { id: 2, message: 'yo', likesCount: 5 },
  ],
  newPostText: 'Enter post',
  profile: null,
  status:'Helloo'
}

const profileReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
      };
      let stateCopy = {...state};
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = '';
      return stateCopy;
    }

    case CREATE_NEW_POST_TEXT: {
      let stateCopy = {...state};
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }

    case SET_USERS_PROFILE: {
return {...state, profile: action.profile}
    }
    case SET_STATUS: {
      return {...state, status: action.status}
    }
    case SAVE_PHOTO_SUCCES: {
      return {...state, profile: {...state.profile, photos: action.photos}}
    }

    default:
      return state;
  }
}

export default profileReducer;

export const addPostActionCreator = () => {
  return {
    type: 'ADD-POST'
  }
}

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: 'CREATE-NEW-POST-TEXT',
    newText: text
  }
}

 export const setUsersProfile = (profile) => {
  return {
    type: SET_USERS_PROFILE,
    profile
  }
}

export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status
  }
}

export const savePhotoSucces = (photos) => {
  return {
    type: SAVE_PHOTO_SUCCES,
    photos
  }
}

export const getStatus = (userId) => (dispatch) =>{
  profileAPI.getStatus(userId).then(response => {
    dispatch(setStatus(response.data))
  })
}

export const updateStatus = (status) => (dispatch) =>{
  profileAPI.updateStatus(status).then(response => {
    if (response.data.resultCode === 0) {
    dispatch(setStatus(status))
    }
  })
}

export const savePhoto = (file) => async (dispatch) =>{
   let response = await profileAPI.savePhoto(file);
   if (response.data.resultCode === 0) {
    dispatch(savePhotoSucces(response.data.data.photos))
    }
}


export const getUsersProfile = (userId) => (dispatch) => {
  profileAPI.getProfile(userId).then(data => {
    
    dispatch(setUsersProfile(data));
  })
}

export const saveProfile = (profileObject) => async (dispatch) => {
  
  let response = await profileAPI.saveProfile(profileObject);
  if (response.resultCode === 0) {
  // dispatch(savePhotoSucces(response.data.data.photos))
   }
}

// saveProfile

//old
  // if (action.type === 'ADD-POST') {
    //     let newPost = {
    //         id: 5,
    //         message: state.newPostText,
    //         likesCount: 0
    //     };
    //     state.posts.push(newPost);
    //     state.newPostText = '';
    // } else if (action.type === CREATE_NEW_POST_TEXT) {
    //     state.newPostText = action.newText;

    // }
    // return state;