import React from "react";
import Header from "./Header";
import { connect } from 'react-redux';
import { logout } from '../../redux/auth-reducer'
import { compose } from "redux";




const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    myProfile: state.auth.myProfile
});
export default compose(
    connect(mapStateToProps, {logout} )
)(Header)