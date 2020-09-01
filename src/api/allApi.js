import Api from './api';
import refLogin from '../config/firebase';



export default {
    SignIn(payload) {
        return Api().post('/dev/login',
            JSON.stringify({
                username: payload.username,
                password: payload.password,
                lastLoginAt: payload.lastlogin_at
            }))
    },
    getProfile(payload) {
        return Api().get('/dev/protect', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + payload
            },
        }
        )
    },
    createProfile(payload) {
        return Api().post('/dev/createProfile',
            JSON.stringify({
                user_id: payload.id,
                username: payload.username,
                lastname: payload.lastname,
                email: payload.email,
                mobile_phone: payload.mobile_phone,
                status: payload.status,
                created_at: payload.created_at
            }), {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + payload.token
            }
        })
    },
    updateProfile(payload) {
        return Api().post('/dev/updateProfile',
            JSON.stringify({
                id: payload.id,
                username: payload.firstname,
                lastname: payload.lastname,
                email: payload.email,
                mobile_phone: payload.mobile_phone,
                updated_at: payload.updated_at
            }), {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + payload.token
            }
        })
    },
    getProfileData(payload) {
        return Api().get('/dev/getDataById', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + payload
            },
        }
        )
    },
    // SignInFirebase(payload) {
    //     return refLogin.set({
    //         user_id: payload.user_id,
    //         lastLoginAt: payload.lastLoginAt
    //     }).then((data) => {
    //         console.log(data)
    //     }).catch((err) => {
    //         console.log('err', err)
    //     })
    // },
}
