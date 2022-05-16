import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import s from './Users.module.css'

const Users = (props) => {
    return (
        <div className={s.users}>
            <Paginator  
                setCurrentPage={props.setCurrentPage}
                requestUsers={props.requestUsers} 
                totalItemsCount={props.totalUsersCount} 
                pageSize={props.pageSize} 
                currentPage={props.currentPage} 
                onPageChanged={props.onPageChanged}/>
            <div>
                {props.users.map(u => <User
                    followingInProgress={props.followingInProgress}
                    unfollow={props.unfollow}
                    follow={props.follow}
                    user={u} />)}
            </div>
        </div>
    )
}

export default Users;