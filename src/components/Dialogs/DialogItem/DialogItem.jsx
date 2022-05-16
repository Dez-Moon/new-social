import React from "react";
import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            
            <NavLink to={path} className = { navData => navData.isActive ? s.active : s.dialog }>
                <img src={props.img}></img>
                <span className={s.name}>{props.name}</span>
                <span className={s.status}>{props.status}</span>
                </NavLink>
        </div>

    )
}

export default DialogItem;