import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getUsersProfile, getStatus, updateStatus, savePhoto, saveProfile} from '../../redux/profile_reducer'
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {

refreshProfile() {
  let userId = this.props.match.params.UserId;
  if (!userId) {
    userId = 18048;
  }
   this.props.getUsersProfile(userId);
   this.props.getStatus(userId);
}

componentDidMount() {
 this.refreshProfile();
}
componentDidUpdate(prevProps, prevState) {
 if (this.props.match.params.UserId != prevProps.match.params.UserId) {
  this.refreshProfile();
 }
}

  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} status={this.props.status}
        updateStatus={this.props.updateStatus} isOwner={!this.props.match.params.UserId}
        savePhoto={this.props.savePhoto} saveProfile={this.props.saveProfile}/>
      </div>)
  }
}

let mapStateToProps = (state) => ({
profile: state.profilePage.profile,
status: state.profilePage.status
})

let ContainerRouteProfile = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUsersProfile, getStatus, updateStatus, savePhoto, saveProfile})(ContainerRouteProfile);