import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { "API-KEY": "02e4f623-0659-4076-b2cd-710855c46c0c" }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
            .then(response => response.data)
    },
    getStatus(userId) {
        return instance.get(`/profile/status/` + userId)
            .then(response => response.data)
    },
    updateStatus(status) {
        return instance.put(`/profile/status`, {status: status})
            .then(response => response.data)
    },
    updatePhoto(newPhoto) {
        return instance.post('/profile/photo', {
            image: newPhoto
        }).then(response => response.data)
    }
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    login(email, password, rememberMe) {
        return instance.post(`auth/login`, {
            email: email,
            password: password,
            rememberMe: rememberMe,

        })
        .then(response => response.data)
    },
    logout() {
        return instance.delete(`auth/login`)
        .then(response => response.data)
    },
    getcaptcha() {
        return instance.get(`/security/get-captcha-url`, {
            url: 'https://social-network.samuraijs.com/HelpApp/HelpApp/Captcha?w=200&h=100&c=TjyHh6ELNCvTKkm2xNk3Sg%3D%3D'
        })
    }
}