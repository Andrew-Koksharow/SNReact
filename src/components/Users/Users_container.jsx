import React from 'react';
import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC } from '../../redux/users_reducer';
import Users from './UsersС';



let mapStatetoProps = (state) => {
    
return {
    users: state.usersPage.users
}
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (user) => {
            dispatch(setUsersAC(user))
        }
    }
}
const UsersContainer =  connect(mapStatetoProps, mapDispatchToProps)(Users);
export default UsersContainer;