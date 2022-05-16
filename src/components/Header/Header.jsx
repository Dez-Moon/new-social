import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css';
import UserPhoto from '../../assets/images/user-header.png';
import PhotoWithSettings from "./component/PhotoWithSettings";

const Header = (props) => {
    let [myProfile, setMyProfile] = useState(props.myProfile)
    useEffect(() => { setMyProfile(props.myProfile) }, [props.myProfile])
    let [clickOnPhoto, setClickOnPhoto] = useState(false)
    let openSettings = () => {
        if (clickOnPhoto) {
        setClickOnPhoto(false)
        } else {
            setClickOnPhoto(true)
        }
    }
    return (
        <header className={s.header}>
            <span className={s.websiteName}>New Social</span>
            <span className={s.loginBlock} onClick={openSettings}>
                {props.isAuth
                    ? (<span>
                        <img src={myProfile != null&undefined
                            ? myProfile.photos.small 
                            : UserPhoto}></img>
                        {clickOnPhoto ? <PhotoWithSettings {...props} UserPhoto={UserPhoto}/> : ''}
                    </span>)
                    : <NavLink to={'/login'}>Login</NavLink>}
            </span>
        </header>
    )
};

export default Header;