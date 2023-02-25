import API from "../utils/axios";
import { TOASTIFY } from "../utils/toastify";
import { COME_IMAGE, SEND } from "../utils/firebaseSend";
import {
    URL_ALL_FOOD,
    URL_TODAY_FOOD,
    URL_CREATE_FOOD,
    URL_DELETE_FOOD,
    URL_UPDATE_FOOD,
    URL_SELECTED_FOOD,
} from "../utils/url";

export const DELETE_FOOD = (id) => {
    API.delete(`${URL_DELETE_FOOD}/${id}`)
        .then(res => TOASTIFY("success", "Success"))
        .catch(err => TOASTIFY("error", "Error"))
}

export const ALL_FOOD = (SETUSERS) => {
    API.get(URL_ALL_FOOD)
        .then(res => SETUSERS(res.data))
        .catch(err => TOASTIFY("error", "You have placed an order"))
}

export const SELECTED_FOOD = (SET_FOOD, ID) => {
    API.get(`${URL_SELECTED_FOOD}/${ID}`)
    .then((res) => SET_FOOD(res.data))
    .catch((err) => TOASTIFY(err));
}

export const GET_TODAY_FOOD = (SET_TODAY_MENU, WEEKS, TODAY_NAME) => {
    API.post(`${URL_TODAY_FOOD}/${WEEKS[TODAY_NAME]}`)
        .then((res) => SET_TODAY_MENU(res.data))
        .catch(err => TOASTIFY("error", "You have placed an order"))
}

export const CREATE_FOOD = (DAY, NAME, FILE, PRICE, DESCRIPTION, NAVIGATE) => {
    SEND(FILE);
    setTimeout(() => {
        let IMAGE = COME_IMAGE;
        if (
            DAY.trim() != "" &&
            NAME.trim() != "" &&
            PRICE.trim() != "" &&
            IMAGE.trim() != "" &&
            DESCRIPTION.trim() != ""
        ) {
            const reqBody = {
                day: DAY,
                name: NAME,
                price: PRICE,
                image: IMAGE,
                description: DESCRIPTION,
            };
            API.post(URL_CREATE_FOOD, reqBody)
                .then((res) => {
                    NAVIGATE(-1)
                    TOASTIFY("success", "Your create food has been successfully completed")
                })
                .catch((err) => TOASTIFY("error", "Your create food has not been successfully completed"));
        }
    }, 2000);
}

export const UPDATE_FOOD = (GETFOOD, ID, DAY, NAME, FILE, PRICE, DESCRIPTION) => {
    SEND(FILE);
    setTimeout(() => {
        let IMAGE = COME_IMAGE;

        const reqBody = {
            day: DAY.trim() == "" ? GETFOOD.day : DAY,
            name: NAME.trim() == "" ? GETFOOD.name : NAME,
            image: FILE == "" ? GETFOOD.image : IMAGE,
            price: PRICE.trim() == "" ? GETFOOD.price : PRICE,
            description: DESCRIPTION.trim() == "" ? GETFOOD.description : DESCRIPTION,
        };

        API.post(`${URL_UPDATE_FOOD}/${ID}`, reqBody)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    }, 2000)    
}