import React from "react";
import s from "./Message.module.css";

const Message = (props) => {
    return (
        <div className={s.message}>
            <img src="https://scontent.fhrk1-1.fna.fbcdn.net/v/t1.6435-9/51538384_2256254384641334_6424292934669041664_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=QgpKB561YwEAX8a1C-2&_nc_ht=scontent.fhrk1-1.fna&oh=00_AT81MhVST-VCjPw_OQEDdJr-2MX03XxK3hVyrcWPtQ_SZA&oe=6267AFBC"></img>
            <span className={s.messageEl}>{props.message}</span>
        </div>
    )
}

export default Message;