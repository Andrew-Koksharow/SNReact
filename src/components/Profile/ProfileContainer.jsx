import React from 'react'
import Profile from './Profile';
import { connect } from 'react-redux';
import {getUsersProfile, getStatus, updateStatus} from '../../redux/profile_reducer'
import { withRouter } from 'react-router-dom';



class ProfileContainer extends React.Component {
componentDidMount() {
  let userId = this.props.match.params.UserId;
  
   this.props.getUsersProfile(userId)
   this.props.getStatus(userId)
}

  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} status={this.props.status}
        updateStatus={this.props.updateStatus}/>
      </div>)
  }
}

let mapStateToProps = (state) => ({
profile: state.profilePage.profile,
status: state.profilePage.status
})

let ContainerRouteProfile = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUsersProfile, getStatus, updateStatus})(ContainerRouteProfile);