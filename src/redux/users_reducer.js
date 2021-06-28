let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET_USERS';
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
let SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
let IS_FETCHING = 'IS_FETCHING'

let initialState = {
  users: 
    [
    // { id: 1, followed: true, status: 'hey, it\'s\ status', fullname: 'Pavel', location: { city: 'Beloreck', country: 'Russia' }},
    // { id: 2, followed: false, status: 'meow meow',
    //  fullname: 'Julia', location: { city: 'Chelyabinsk', country: 'Russia' }}
    ],
    pageSize: 10,
    currentPage: 1,
    totalCount: 0,    //how user get at server
    isFetching: false
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
    default:
      return state;
  }
}

export default usersReducer;

export const follow = (userID) => {
  return {
    type: FOLLOW,
    userID: userID
  }
}

export const unfollow = (userID) => {
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



