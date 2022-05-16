import React from "react";
import Preloader from "../../common/preloader/Preloader";
import s from './ProfileInfo.module.css';
import User from '../../../assets/images/user.png'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large != null ? props.profile.photos.large : User}></img>
        <div>
        </div>
        <p>{props.profile.fullName}</p>
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
        <div>My contacts:
          <ul>
            <li>facebook: {props.profile.contacts.facebook}</li>
            <li>website: {props.profile.contacts.website}</li>
            <li>vk: {props.profile.contacts.vk}</li>
            <li>twitter: {props.profile.contacts.twitter}</li>
            <li>instagram: {props.profile.contacts.instagram}</li>
            <li>youtube: {props.profile.contacts.youtube}</li>
            <li>github: {props.profile.contacts.github}</li>
            <li>mainLink: {props.profile.contacts.mainLink}</li>
          </ul>
        </div>
        <div>
          {props.profile.lookingForAJob ? (<p>Looking for a job<br />{props.profile.lookingForAJobDescription}</p>) : null}
        </div>
      </div>
    </div>
  )
};

export default ProfileInfo;