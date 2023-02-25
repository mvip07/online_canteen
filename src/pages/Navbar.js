import LOGO from "../assets/Logo.png"
import styled from "styled-components";
import NAVBAR_DETAIL from "../components/navbar_detail"
import { faHome, faEnvelope, faCog, faSignOut } from "@fortawesome/free-solid-svg-icons";

const NAVBAR_ICON = [
    {
        id: 1,
        icon: faHome,
        path: ""
    },

    {
        id: 3,
        icon: faEnvelope,
        path: "contact"
    },

    {
        id: 2,
        icon: faCog,
        path: "setting"
    },

    {
        id: 4,
        icon: faSignOut,
        path: "logout"
    },
]

function NAVBAR() {
    const USER_IMAGE = JSON.parse(localStorage.getItem("online-canteen"))?.user.image

    return (
        <CONTAINER className="NAVBAR__CONTAINER">
            <div className="logo__box">
                {
                    USER_IMAGE == false || USER_IMAGE == "" ?
                        <img src={LOGO} alt="" className="logo" />
                        : <img src={USER_IMAGE} alt="" className="logo user-image" />

                }
            </div>
            <div className="navbar__content">
                {
                    NAVBAR_ICON.map((data) => (
                        <NAVBAR_DETAIL key={Math.random()} data={data} />
                    ))
                }
            </div>
        </CONTAINER>
    )
}

export default NAVBAR

const CONTAINER = styled.div``