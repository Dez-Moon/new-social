import React from "react";
import s from './Login.module.css';
import {reduxForm, Field} from "redux-form"
import { Input } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import {login, logout} from "../../redux/auth-reducer"
import { Navigate } from "react-router-dom";


const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
                <div>
                    <Field component={Input} validate={[required]} name={'email'} placeholder={'Email'} />
                </div>
                <div>
                    <Field component={Input} validate={[required]} name={'password'} type={'password'} placeholder={'Password'} />
                </div>
                <div>                    
                    <Field component={Input} name={'rememberMe'} type={'checkbox'} /> remember me
                </div>
                {error && <div className={s.formSummaryError}>{error} </div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}
const LoginReduxForm = reduxForm({form: 'Login'})(LoginForm)
const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.remebmerMe)
    }
    if (props.isAuth) {
        return <Navigate to={'/profile'} />
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login, logout}) (Login);