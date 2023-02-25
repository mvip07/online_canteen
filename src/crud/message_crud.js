import API from "../utils/axios"
import { USER } from "../utils/functions"
import { TOASTIFY } from "../utils/toastify"
import {
    URL_MESSAGE_ALL,
    URL_MESSAGE_USER,
    URL_MESSAGE_CREATE,
    URL_MESSAGE_DELETE,
    URL_MESSAGE_UPDATE,
    URL_MESSAGE_SELECTED,
} from "../utils/url"

export const UPDATE_MESSAGE = (ID) => {
    API.post(`${URL_MESSAGE_UPDATE}/${ID}`)
        .then(res => TOASTIFY("success", "Success"))
        .catch(err => TOASTIFY("error", "Wrong!"))
}

export const CREATE_MESSAGE = (MESSAGE) => {

    const reqBody = {
        user: USER,
        message: MESSAGE,
    }

    if (MESSAGE.trim() != "") {
        API.post(URL_MESSAGE_CREATE, reqBody)
            .then(res => TOASTIFY("success", res.data.message))
            .catch(err => TOASTIFY("error", err.data.message))

        document.querySelector(".input-group__msg").value = ""
    }
}

export const SELECTED_MESSAGE = (ID, SET_SELECTED_MESSAGE) => {
    API.get(`${URL_MESSAGE_SELECTED}/${ID}`)
        .then(res => SET_SELECTED_MESSAGE(res.data))
        .catch(err => TOASTIFY("error", "Wrong!"))
}

export const ALL_MESSAGES = (SET_MESSAGE, SET_MESSAGE_CHOOSE, CHOOSE_SORT, CHOOSE_DATE) => {
    API.get(URL_MESSAGE_ALL)
        .then(res => { SET_MESSAGE(res.data); SET_MESSAGE_CHOOSE(CHOOSE_SORT(res.data, CHOOSE_DATE)) })
        .catch(err => TOASTIFY("error", "No such messages found"))
}

export const ALL_USER_MESSAGE = (SET_MESSAGE, SET_MESSAGE_CHOOSE, CHOOSE_SORT, CHOOSE_DATE) => {
    API.get(`${URL_MESSAGE_USER}/${USER?.id}`)
        .then(res => { SET_MESSAGE(res.data); SET_MESSAGE_CHOOSE(CHOOSE_SORT(res.data, CHOOSE_DATE)) })
        .catch(err => TOASTIFY("error", "Your messages were not found"))
}

export const DELETE_MESSAGE = (ID, DIRECTION, SET_MESSAGE, SET_MESSAGE_CHOOSE, CHOOSE_SORT, CHOOSE_DATE) => {
    API.delete(`${URL_MESSAGE_DELETE}/${ID}`)
        .then(res => {
            TOASTIFY("success", "Succecss");
            DIRECTION == "usermessages" ?
                ALL_USER_MESSAGE(SET_MESSAGE, SET_MESSAGE_CHOOSE, CHOOSE_SORT, CHOOSE_DATE)
                :
                ALL_MESSAGES(SET_MESSAGE, SET_MESSAGE_CHOOSE, CHOOSE_SORT, CHOOSE_DATE)
        })
        .catch(err => TOASTIFY("error", "Wrong !"))
}