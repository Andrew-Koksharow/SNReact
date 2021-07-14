import { usersAPI } from '../api/api';
let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET_USERS';
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
let SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
let IS_FETCHING = 'IS_FETCHING';
let TOGGLE_FOLLOW_PROGRESS = 'TOGGLE_FOLLOW_PROGRESS';

let initialState = {
  users: 
    [],
    pageSize: 10,
    currentPage: 1,
    totalCount: 0,    //how user get at server
    isFetching: false,
    followingInProgress: [2]
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
      return { ...state, users: action.users }
      case SET_CURRENT_PAGE:
        return {
          ...state, currentPage: action.currentPage
        }
        case SET_TOTAL_COUNT:
          return {
            ...state, totalCount: action.totalCount
          }
          case IS_FETCHING:
            return {...state, isFetching:action.isFetching};
          case TOGGLE_FOLLOW_PROGRESS: 
          return {...state, 
            followingInProgress: action.isFetching ? 
            [...state.followingInProgress, action.userID]
            : [state.followingInProgress.filter(id => id != action.userID)]}
    default:
      return state;
  }
}

export default usersReducer;

export const followSucces = (userID) => {
  return {
    type: FOLLOW,
    userID: userID
  }
}
export const unfollowSucces = (userID) => {
  return {
    type: UNFOLLOW,
    userID: userID
  }
}
export const setUsers = (user) => {
  return {
    type: SET_USERS,
    users: user
  }
  
}
export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage: currentPage
  }
}
export const setTotalCount = (totalCount) => {
  return {
    type: SET_TOTAL_COUNT,
    totalCount
  }
}
export const setIsFetching = (isFetching) => {
  return {
    type: IS_FETCHING,
    isFetching
  }
}
export const toggleFollowingInProgress = (followingInProgress, userID) => {
  return {
    type: TOGGLE_FOLLOW_PROGRESS,
    followingInProgress,
    userID
  }
}


export const getUsersThunkCreator = (currentPage, pageSize) => {
  return (dispatch) => {
  
  dispatch(setIsFetching(true));

            usersAPI.getUsers(currentPage, pageSize).
                then(data => {

                    dispatch(setIsFetching(false));

                    dispatch(setUsers(data.items));
                    dispatch(setTotalCount(data.totalCount))
                })
}
}

export const follow = (id) => {
  return (dispatch) => {
  
    dispatch(toggleFollowingInProgress(true, id));
    usersAPI.follow(id).then(response => {
        if (response.data.resultCode == 0) {
            dispatch(followSucces(id));
        }
    })
    dispatch(toggleFollowingInProgress(false, id));
}
}

export const unfollow = (id) => {
  return (dispatch) => {
  
    dispatch(toggleFollowingInProgress(true, id));
    usersAPI.unfollow(id).then(response => {
        if (response.data.resultCode == 0) {
            dispatch(unfollowSucces(id));
        }
    })
    dispatch(toggleFollowingInProgress(false, id));
}
}