import React from "react";
import Users from './Users'
import { connect } from "react-redux";
import { followSuccess, setCurrentPage, unfollowSuccess, toggleIsFollowingInProgress, requestUsers, follow, unfollow} from "../../redux/users-reducer";
import Preloader from "../common/preloader/Preloader";
import { compose } from "redux";
import {getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress, getPortionSize} from "../../redux/users-selectors"

class UsersContainer extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.requestUsers(currentPage, pageSize)
    }
    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.requestUsers(pageNumber, pageSize)
    }

    render() {
        return (
           <> 
           <Users 
            users={this.props.users} 
            currentPage={this.props.currentPage} 
            totalUsersCount={this.props.totalUsersCount} 
            pageSize={this.props.pageSize}
            onPageChanged={this.onPageChanged}
            requestUsers={this.props.requestUsers}
            followingInProgress={this.props.followingInProgress}
            follow={this.props.follow}
            setCurrentPage={this.props.setCurrentPage}
            unfollow={this.props.unfollow}/>
            {this.props.isFetching ? <Preloader/> : null}
            </>
        )
    }
}


let mapStateToProps = (state) => {
    return {
      users: getUsers(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      followingInProgress: getFollowingInProgress(state),
    }
  }

export default compose(
    connect(mapStateToProps, {followSuccess, unfollowSuccess, setCurrentPage, toggleIsFollowingInProgress, requestUsers, follow, unfollow})
)(UsersContainer)  