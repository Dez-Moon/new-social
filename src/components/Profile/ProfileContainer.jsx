import React from "react";
import { connect } from "react-redux";
import { openUserProfile, getStatus, updateStatus } from "../../redux/profile-reducer";
import Profile from "./Profile";
import { compose } from "redux";
import { profileWithAuthNavigate, withRouter } from "../../hoc/withAuthNavigate";
import { profileAPI } from "../../api/api";


class ProfileContainer extends React.Component {
  componentDidMount() {
    profileAPI.updatePhoto('/Users/konstantin/Downloads/photo.png')
    let userId = this.props.router.params['*'];
    if (!userId) {
      userId = this.props.authorizationUserId;
  }
    this.props.openUserProfile(userId);
    this.props.getStatus(userId);
    
  }
  componentDidUpdate(prevProps) {
    if (prevProps.router.params['*'] !== this.props.router.params['*']) {
      let userId = this.props.router.params['*'];
      if (!userId) {
        userId = this.props.authorizationUserId;
    }
      this.props.openUserProfile(userId);
      this.props.getStatus(userId);    
    }
  }

  render() {
    return (
      <div>
      <Profile {...this.props} 
      profile={this.props.profile} 
      status={this.props.status} 
      updateStatus={this.props.updateStatus}/>
    </div>
  )  
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizationUserId: state.auth.userId,
  isAuth: state.auth.isAuth
});


export default compose(
  connect(mapStateToProps, {openUserProfile, getStatus, updateStatus}),
  withRouter,
  profileWithAuthNavigate,
)(ProfileContainer)