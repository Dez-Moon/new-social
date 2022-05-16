import { connect } from 'react-redux';
import { addPost } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts';
import { compose } from "redux";




let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}
export default compose(
  connect(mapStateToProps, {addPost})
)(MyPosts);