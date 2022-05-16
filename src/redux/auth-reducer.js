import { authAPI, profileAPI } from "../../src/api/api";
import { stopSubmit } from "redux-form"

const SET_USER_DATA = 'auth/SET-USER-DATA';
const SET_MY_USER_DATA = 'auth/SET-MY-USER-DATA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    myProfile: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        case SET_MY_USER_DATA:
            return {
                ...state,
                myProfile: action.data,
            }
        default:
            return state;
    }
}
export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } });
export const setMyUserData = (data) => ({ type: SET_MY_USER_DATA, data })

export const getAuthUserData = () => async (dispatch) => {
    let data = await authAPI.me();
    if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        dispatch(setAuthUserData(id, email, login, true));
        profileAPI.getProfile(id).then(data => {
            dispatch(setMyUserData(data));
        })
    }
}
export const login = (email, password, rememberMe) => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe)
    if (data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
        dispatch(stopSubmit('Login', { _error: message }))
    }
}
export const logout = (email, password, rememberMe) => async (dispatch) => {
    let data = await authAPI.logout(email, password, rememberMe)
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;