import React from 'react';
import Post from './Post/Post'
import s from './MyPosts.module.css';
import { reduxForm, Field } from "redux-form"
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name={'NewPostText'} validate={[required, maxLength10]} placeholder={'Post message'}/>
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}
const AddNewPostFormRedux = reduxForm({ form: 'NewPostText' })(AddNewPostForm);


const MyPosts = (props) => {
  let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />)
  let onAddPost = (values) => {
    props.addPost(values.NewPostText)
  }
  return (
    <div className={s.postsBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <AddNewPostFormRedux onSubmit={onAddPost} />
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
};

export default MyPosts;