import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
            <div className={s.item}>
              <img src="https://bnmusic.com.ua/wp-content/uploads/2020/10/Ava-Max.jpg"></img>
              { props.message }
              <div>
                <span>like</span> {props.likesCount}
              </div>
            </div>    
    )  
};

export default Post;