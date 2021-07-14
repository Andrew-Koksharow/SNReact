import React from 'react';
import { connect } from 'react-redux';
import { follow, getUsersThunkCreator, toggleFollowingInProgress,
     setCurrentPage, setTotalCount, unfollow } from '../../redux/users_reducer';
import Users from './Users';
import Preloader from '../Common/Preloader';

class UsersAPIComponent extends React.Component {
    
    componentDidMount() {
        
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        /*/ this.props.setIsFetching(true);
        //     usersAPI.getUsers(this.props.currentPage, this.props.pageSize).
        //         then(data => {
        //             this.props.setIsFetching(false);
        //             this.props.setUsers(data.items);
        //             this.props.setTotalCount(data.totalCount)
        //         })*/
            }
    
    
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
        this.props.setCurrentPage(pageNumber);
        // this.props.setIsFetching(true);
        
        // usersAPI.getUsers(pageNumber, this.props.pageSize).
        //         then(data => {
        //             this.props.setIsFetching(false);
        //             this.props.setUsers(data.items);
        //         })
    
    }
    
        render() {
    
            return <>
            {this.props.isFetching ? <Preloader/>: null}
            <Users totalCount={this.props.totalCount} pageSize={this.props.pageSize} 
            currentPage={this.props.currentPage} unfollow={this.props.unfollow} follow={this.props.follow} 
            onPageChanged={this.onPageChanged} users={this.props.users} 
            followingInProgress={this.props.followingInProgress}
             />
            </>
        }
    }


let mapStatetoProps = (state) => {
    
return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    totalCount: state.usersPage.totalCount,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
}
}


const UsersContainer =  connect(mapStatetoProps, {follow, unfollow, setCurrentPage, 
    setTotalCount, getUsers: getUsersThunkCreator, toggleFollowingInProgress
})(UsersAPIComponent);
export default UsersContainer;


// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userID) => {
//             dispatch(followAC(userID))
//         },
//         unfollow: (userID) => {
//             dispatch(unfollowAC(userID))
//         },
//         setUsers: (user) => {
//             dispatch(setUsersAC(user))
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalCount: (totalCount) => {
//             dispatch(setTotalCountAC(totalCount))
//         },
//         setIsFetching: (isFetching) => {
//             dispatch(setIsFetchingAC(isFetching))
//         },
//     }
// }