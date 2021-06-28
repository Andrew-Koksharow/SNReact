let ADD_POST = 'ADD-POST';
let CREATE_NEW_POST_TEXT = 'CREATE-NEW-POST-TEXT';
let SET_USERS_PROFILE = 'SET_USERS_PROFILE';

let initialState = {
  posts: [
    { id: 1, message: 'Hello, it my first post', likesCount: 12 },
    { id: 2, message: 'yo', likesCount: 5 },
  ],
  newPostText: 'react',
  profile:null
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