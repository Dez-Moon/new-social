import s from '../Header.module.css';
import { SettingsIcon, ModeIcon, HelpIcon, LogOutIcon } from './MenuItemIcon';

const PhotoWithSettings = (props) => {
    console.log(props.UserPhoto)
    return (
        <div className={s.divClickPhoto}>
            <div>
                <img src={props.myProfile.photos.small != null&undefined ? props.myProfile.photos.small : props.UserPhoto}></img>
                <span className={s.itemName}>{props.myProfile.fullName}</span>
            </div>
            <div className={s.item}>
                <SettingsIcon />
                <span>Settings</span>
            </div>
            <div className={s.item}>
                <ModeIcon />
                <span>Mode</span>
            </div>
            <div className={s.item}>
                <HelpIcon />
                <span>Help</span>
            </div>
            <div className={s.item} onClick={props.logout}>
                <LogOutIcon />
                <span>Log out</span>
            </div>
        </div>
    )
}
export default PhotoWithSettings;