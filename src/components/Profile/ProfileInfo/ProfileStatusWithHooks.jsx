import React, {useState, useEffect} from "react";

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);
    let activateEditMode = () => {setEditMode(true)}
    let deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)}
    let onStatusChange = (e) => {setStatus(e.currentTarget.value)}
    useEffect( () => {
        setStatus(props.status)}
        , [props.status])
    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || '-----'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} value={status} autoFocus={true} />
                    <button onClick={deactivateEditMode}>Save</button>
                </div>}
        </div>
    );
}
export default ProfileStatusWithHooks;