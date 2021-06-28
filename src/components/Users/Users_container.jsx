import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, setIsFetching, setTotalCount, setUsers, unfollow } from '../../redux/users_reducer';
import Users from './Users';
import * as axios from 'axios';
import Preloader from '../Common/Preloader';


class UsersAPIComponent extends React.Component {
    
    componentDidMount() {
        this.props.setIsFetching(true);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).
                then(response => {
                    this.props.setIsFetching(false);
                    this.props.setUsers(response.data.items);
                    this.props.setTotalCount(response.data.totalCount)
                })
            }
    
    
    onPageChanged = (pageNumber) => {
        this.props.setIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).
                then(response => {
                    this.props.setIsFetching(false);
                    this.props.setUsers(response.data.items);
                })
    
    }
    
        render() {
    
            return <>
            {this.props.isFetching ? <Preloader/>: null}
            <Users totalCount={this.props.totalCount} pageSize={this.props.pageSize} 
            currentPage={this.props.currentPage} unfollow={this.props.unfollow} follow={this.props.follow} 
            onPageChanged={this.onPageChanged} users={this.props.users} />
            </>
        }
    }


let mapStatetoProps = (state) => {
    
return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    totalCount: state.usersPage.totalCount,
    isFetching: state.usersPage.isFetching
}
}

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

const UsersContainer =  connect(mapStatetoProps, {follow, unfollow, setUsers, setCurrentPage, 
    setTotalCount, setIsFetching
})(UsersAPIComponent);
export default UsersContainer;