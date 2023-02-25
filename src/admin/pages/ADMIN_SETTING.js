import ADMIN_USER from "./ADMIN_USER";
import styled from "styled-components";
import { useCallback, useEffect, useState } from "react";
import ADMIN_ACCOUNT from "./ADMIN_ACCOUNT";
import ADMIN_ALL_ORDER from "./ADMIN_ALL_ORDERS";
import ADMIN_ALL_MESSAGE from "./ADMIN_ALL_MESSAGES";
import ADMIN_SETTING_DETAIL from "../components/ADMIN_SETTING_DETAIL";
import { faHeart, faUser, faMessage, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const SETTING_MENU = [
    {
        id: 1,
        imgIcon: faHeart,
        title: "My Account",
        url: "/admin/my/account",
        decription: "You  change the account",
    },

    {
        id: 2,
        imgIcon: faCheckCircle,
        title: "All The Orders",
        url: "/admin/all/orders",
        decription: "You Can See All The Orders",
    },

    {
        id: 3,
        imgIcon: faMessage,
        title: "All The Messages",
        url: "/admin/all/messages",
        decription: "You Can See All The Messages",
    },

    {
        id: 4,
        imgIcon: faUser,
        title: "All The Users",
        url: "/admin/all/users",
        decription: "You Can See All The Users",
    },
]

function ADMIN_SETTING() {

    const [MENU, SET_MENU] = useState(JSON.parse(localStorage.getItem("admin-menu")))
    
    useEffect(() => {
        SET_MENU(JSON.parse(localStorage.getItem("admin-menu")))
    }, [MENU])

    return (
        <CONTAINER className="SETTING__CONTAINER">
            <div className="setting">
                <div className="setting__title">
                    <h3>Admin Settings</h3>
                </div>
                <div className="setting-menu__detail">
                    {
                        SETTING_MENU.map((data) => (
                            <ADMIN_SETTING_DETAIL
                                data={data}
                                SET_MENU={SET_MENU}
                                key={Math.random()}
                            />
                        ))
                    }
                </div>
            </div>

            <div className="change-components">
                {
                    MENU == "All The Users" ? <ADMIN_USER /> :
                        MENU == "My Account" ? <ADMIN_ACCOUNT /> :
                            MENU == "All The Orders" ? <ADMIN_ALL_ORDER /> :
                                MENU == "All The Messages" ? <ADMIN_ALL_MESSAGE /> : ""
                }
            </div>

        </CONTAINER>
    )
}

export default ADMIN_SETTING

const CONTAINER = styled.div``