import API from "../utils/axios";
import { TOASTIFY } from "../utils/toastify";
import { TODAY_DATE, USER } from "../utils/functions";
import {
    URL_ORDER_ALL,
    URL_ORDER_TODAY,
    URL_ORDER_CREATE,
    URL_ORDER_USERID,
} from "../utils/url";

export const GET_TODAY_ORDER = (SET_ORDER) => {
    
    const TRUE = true
    API.get(URL_ORDER_TODAY)
        .then(res => SET_ORDER(res.data))
        .catch(err => TOASTIFY("error", "Your orders were not found"))

    return TRUE
}

export const CREATE_ORDER = (GET_DATE, GET_USER, FOOD) => {

    const reqBody = {
        user: USER,
        food: FOOD,
    }

    if (!GET_DATE.includes(TODAY_DATE) || !GET_USER.includes(USER.id)) {
        API.post(URL_ORDER_CREATE, reqBody)
            .then(res => TOASTIFY("success", "You have successfully placed an order"))
            .catch(err => TOASTIFY("error", "You have not successfully placed an order"))
    } else TOASTIFY("warning", "You have placed an order")
}

export const ALL_ORDER = (SET_ORDER, SET_ORDER_CHOOSE, CHOOSE_SORT) => {
    API.get(URL_ORDER_ALL)
        .then(res => { SET_ORDER(res.data); SET_ORDER_CHOOSE(CHOOSE_SORT(res.data, "today")) })
        .catch(err => TOASTIFY("error", "No such orders found"))
}

export const ALL_USER_ORDER = (SET_ORDER, SET_ORDER_CHOOSE, CHOOSE_SORT) => {
    API.get(`${URL_ORDER_USERID}/${USER.id}`)
        .then(res => { SET_ORDER(res.data); SET_ORDER_CHOOSE(CHOOSE_SORT(res.data, "all")) })
        .catch(err => TOASTIFY("error", "Your orders were not found"))
}