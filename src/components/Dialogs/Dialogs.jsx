import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";
import { Field, reduxForm } from "redux-form"
import { Textarea } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";

const maxLength100 = maxLengthCreator(100)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <button>Send</button>
            </div>
            <div>
                <Field component={Textarea} validate={[required, maxLength100]} name={'newMessageBody'} placeholder={'Enter your message'}/>
            </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);
const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name} img={d.img} status={d.status} />);
    let messagesElements = props.messages.map(m => <Message key={m.id} message={m.message} img={props.dialogs.img} />)
    
    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div className={s.writeMessages}>
                    <AddMessageFormRedux onSubmit={addNewMessage} />
                </div>
                <div className={s.message}>{messagesElements}</div>
            </div>
        </div>
    )
}

export default Dialogs;