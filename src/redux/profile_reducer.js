let ADD_POST = 'ADD-POST';
let CREATE_NEW_POST_TEXT = 'CREATE-NEW-POST-TEXT'

let initialState = {
  posts: [
    { id: 1, message: 'Hello, it my first post', likesCount: 12 },
    { id: 2, message: 'yo', likesCount: 5 },
  ],
  newPostText: 'react'
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