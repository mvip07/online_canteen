import API from "../utils/axios";
import { TOASTIFY } from "../utils/toastify";
import { COME_IMAGE, SEND } from "../utils/firebaseSend";
import {
    URL_USER_ALL,
    URL_USER_BLOCK,
    URL_USER_LOGIN,
    URL_USER_UPDATE,
    URL_USER_REGISTER,
    URL_USER_SELECTED,
} from "../utils/url"

export const USER_ALL = (SET_USERS) => {
    API.get(URL_USER_ALL)
        .then(res => SET_USERS(res.data))
        .catch(err => TOASTIFY("error", "User such not found"))
}

export const USER_SELECTED = (SET_USER, ID) => {
    API.get(`${URL_USER_SELECTED}/${ID}`)
        .then(res => SET_USER(res.data))
        .catch(err => TOASTIFY("error", "We could not find you due to some reason"))
}

export const USER_BLOCK = (ID, SET_USERS) => {
    const REQBODY = {
        "block": true
    }
    API.post(`${URL_USER_BLOCK}/${ID}`, REQBODY)
        .then(res => { TOASTIFY("success", "User blocked successfully"); USER_ALL(SET_USERS) })
        .catch(err => TOASTIFY("error", "User not blocked successfully"))
}

export const USER_UNBLOCK = (ID, SET_USERS) => {

    const REQBODY = {
        "block": false
    }

    API.post(`${URL_USER_BLOCK}/${ID}`, REQBODY)
        .then(res => { TOASTIFY("success", "User Unblocked successfully"); USER_ALL(SET_USERS)})
        .catch(err => TOASTIFY("error", "User not Unblocked successfully"))
}

export const USER_LOGIN = (USERNAME, PASSWORD, NAVIGATE) => {

    const reqBody = {
        username: USERNAME,
        password: PASSWORD
    }

    API.post(URL_USER_LOGIN, reqBody)
        .then(({ data }) => {
            if (data.user.block == true) NAVIGATE("/block")
            else if (data.user.rol == "user") NAVIGATE("/")
            else if (data.user.rol == "admin") NAVIGATE("/admin")
            
            localStorage.setItem("online-canteen", JSON.stringify(data))
            TOASTIFY("success", `Hello ${data.user.firstname} ${data.user.lastname}`)
            sessionStorage.setItem("online-canteen-token-time", JSON.stringify({ secund: 0, minut: 0, start: true }))

        }).catch((err) => TOASTIFY("error", "Username and Password were entered incorrectly"))
}

export const USER_UPDATE = (USER, ROL, JOB, IMAGE, LASTNAME, USERNAME, FIRSTNAME, PASSWORD, NAVIGATE) => {
    
    SEND(IMAGE)

    setTimeout(() => {

        const REQBODY = {
            "rol": ROL.trim() == "" ? USER.rol : ROL,
            "job": JOB.trim() == "" ? USER.job : JOB,
            "image": IMAGE == "" ? USER.image : COME_IMAGE,
            "lastname": LASTNAME.trim() == "" ? USER.lastname : LASTNAME,
            "username": USERNAME.trim() == "" ? USER.username : USERNAME,
            "firstname": FIRSTNAME.trim() == "" ? USER.firstname : FIRSTNAME,
            "password": PASSWORD.trim() == "" ? USER.password : PASSWORD,
        }

        API.post(`${URL_USER_UPDATE}/${String(USER?._id)}`, REQBODY)
            .then((res) => {
                localStorage.removeItem("online-canteen"); NAVIGATE("/login")
                TOASTIFY("success", "Your account has been successfully completed");
            })
            .catch((err) => TOASTIFY("error", "Your account has not been successfully completed"))
    }, 2000)
}

export const USER_REGISTER = (JOB, ROL, USERNAME, PASSWORD, LASTNAME, FIRSTNAME, CONFIRM_PASSWORD, NAVIGATE) => {

    if (
        CONFIRM_PASSWORD == PASSWORD &&
        JOB.trim() != "" && JOB.length >= 5 &&
        USERNAME.trim() != "" && USERNAME.length >= 3 &&
        PASSWORD.trim() != "" && PASSWORD.length >= 8 &&
        LASTNAME.trim() != "" && LASTNAME.length >= 5 &&
        FIRSTNAME.trim() != "" && FIRSTNAME.length >= 5 &&
        CONFIRM_PASSWORD.trim != "" && CONFIRM_PASSWORD.length >= 8
    ) {
        const reqBody = {
            "rol": ROL,
            "job": JOB,
            "block": false,
            "image": false,
            "username": USERNAME,
            "password": PASSWORD,
            "lastname": LASTNAME,
            "firstname": FIRSTNAME,
            "confirmPassword": CONFIRM_PASSWORD
        }

        API.post(URL_USER_REGISTER, reqBody)
            .then(res => {
                TOASTIFY("success", "You have successfully registered"); NAVIGATE("/login")
            })
            .catch(err => TOASTIFY("error", "You have not successfully registered"))
    } else {
        TOASTIFY("error", `
            Job length must be greater than 5 \n
            Username length must be greater than 3 \n
            Password length must be greater than 8 \n
            Last Name length must be greater than 5 \n
            First Name length must be greater than 5 \n
            Password and confirm password must be the same \n
        `)
    }
}