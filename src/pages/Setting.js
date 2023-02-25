import ORDER from "./Orders";
import ACCOUNT from "./Account";
import COMMENT from "./Comments";
import styled from "styled-components";
import { useState, useEffect } from "react";
import SETTING_DETAIL from "../components/setting_detail";
import { faHeart, faUniversity, faBell } from "@fortawesome/free-solid-svg-icons";

const SETTING_MENU = [
    {
        id: 1,
        imgIcon: faHeart,
        title: "My Account",
        url: "/my/account",
        decription: "You  change the account",
    },

    {
        id: 2,
        imgIcon: faUniversity,
        title: "My Orders",
        url: "/my/orders",
        decription: "You  change the account",
    },

    {
        id: 3,
        imgIcon: faBell,
        title: "My Comments",
        url: "/my/comments",
        decription: "You  change the account",
    },
]

function SETTING() {
    const [MENU, SET_MENU] = useState(JSON.parse(localStorage.getItem("menu")))
    
    useEffect(() => {
        SET_MENU(JSON.parse(localStorage.getItem("menu")))
    }, [MENU])

    return (
        <CONTAINER className="SETTING__CONTAINER">
            <div className="setting">
                <div className="setting__title">
                    <h3>Settings</h3>
                </div>
                <div className="setting-menu__detail">
                    {
                        SETTING_MENU.map((data) => (
                            <SETTING_DETAIL
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
                    MENU == "My Account" ? <ACCOUNT /> :
                    MENU == "My Comments" ? <COMMENT /> : 
                    MENU == "My Orders" ? <ORDER /> : ""
                }
            </div>

        </CONTAINER>
    )
}

export default SETTING

const CONTAINER = styled.div``
