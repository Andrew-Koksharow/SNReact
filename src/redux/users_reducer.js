let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET_USERS';

let initialState = {
  users: 
    [
    // { id: 1, followed: true, status: 'hey, it\'s\ status', fullname: 'Pavel', location: { city: 'Beloreck', country: 'Russia' }},
    // { id: 2, followed: false, status: 'meow meow',
    //  fullname: 'Julia', location: { city: 'Chelyabinsk', country: 'Russia' }}
    ]
}
 
const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        // users: [...state.users],
        users: state.users.map(u => {
          if (u.id === action.userID) {
            return { ...u, followed: true }
          }
          return u
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userID) {
            return { ...u, followed: false }
          }
          return u
        })
      }
    case SET_USERS:
      return { ...state, users: [...state.users,...action.users] }
    default:
      return state;
  }
}

export default usersReducer;

export const followAC = (userID) => {
  return {
    type: FOLLOW,
    userID: userID
  }
}

export const unfollowAC = (userID) => {
  return {
    type: UNFOLLOW,
    userID: userID
  }
}

export const setUsersAC = (user) => {
  return {
    type: SET_USERS,
    users: user
  }
}

