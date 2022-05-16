import React from "react";
import { connect } from "react-redux";
import { sendMessage } from '../../redux/dialogs-reducer'
import Dialogs from "./Dialogs";
import {withAuthNavigate} from "../../hoc/withAuthNavigate"
import { compose } from "redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
    }
}


export default compose(
    connect(mapStateToProps, {sendMessage}),
    withAuthNavigate
)(Dialogs)