import { useState } from "react"

export const USER = JSON.parse(localStorage.getItem("online-canteen"))?.user
export const TODAY_DATE = `${new Date().getUTCFullYear()}-${new Date().getUTCMonth() + 1 < 9 ? "0" + (new Date().getUTCMonth() + 1) : new Date().getUTCMonth() + 1}-${new Date().getDate() < 9 ? "0" + new Date().getDate() : new Date().getDate()}`

export const LINK_ACTIVE = () => {
    const [ACTIVE, SETACTIVE] = useState(0)
    const LINKS = document.querySelectorAll(".header-link__title")

    for (let LINK = 0; LINK < LINKS.length; LINK++) LINKS[LINK].addEventListener("click", () => SETACTIVE(LINK))
    return ACTIVE
}

export const CHOOSE_SORT = (list, sort) => {
    let REQLIST = []
    if (sort === "all") {
        list?.map((data) => REQLIST.unshift(data))

        return REQLIST

    } else if (sort === "today") {
        list?.filter(({ create_date }) => create_date.substring(0, 10) === TODAY_DATE).map((data) => REQLIST.unshift(data))

        return REQLIST

    } else if (sort === "month") {
        list?.filter(({ create_date }) => create_date.substring(0, 7) === TODAY_DATE.substring(0, 7)).map((data) => REQLIST.unshift(data))

        return REQLIST

    } else if (sort === "year") {
        list?.filter(({ create_date }) => create_date.substring(0, 4) === TODAY_DATE.substring(0, 4)).map((data) => REQLIST.unshift(data))

        return REQLIST
    }
}

export const CHANGE = (URL, USER_SECTION, SET_MENU) => {
    if (USER_SECTION === "user") {
        SET_MENU(URL)
        localStorage.setItem("menu", JSON.stringify(URL));
    } else {
        SET_MENU(URL)
        localStorage.setItem("admin-menu", JSON.stringify(URL))
    }
}

export const TOKEN_TIME = (SET_TIME, TIMES, NAVIGATE) => {
    if (TIMES?.start == true && TIMES?.minut <= 59) {
        setTimeout(() => {
            SET_TIME({
                start: TIMES?.start,
                secund: TIMES?.secund + 1,
                minut: TIMES?.secund % 60 == 0 ? TIMES?.minut + 1 : TIMES?.minut,
            })
            sessionStorage.setItem("online-canteen-token-time", JSON.stringify(TIMES))
        }, 1000)
    } else {
        SET_TIME({})
        NAVIGATE("/login");
        sessionStorage.removeItem("online-canteen-token-time")
    }
}

