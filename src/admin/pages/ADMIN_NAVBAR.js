import styled from "styled-components";
import LOGO from "../../assets/Logo.png"
import NAVBAR_ADMIN_DETAIL from "../components/ADMIN_NAVBAR_DETAIL"
import { faHome, faCog, faSignOut, faFolderPlus } from "@fortawesome/free-solid-svg-icons";

const NAVBAR_ICON = [
    {
        id: 1,
        icon: faHome,
        path: "/admin"
    },

    {
        id: 2,
        icon: faFolderPlus,
        path: "/admin/all/food"
    },

    {
        id: 3,
        icon: faCog,
        path: "/admin/setting"
    },

    {
        id: 4,
        icon: faSignOut,
        path: "/logout"
    },
]

function NAVBAR_ADMIN () {
    const USER_IMAGE = JSON.parse(localStorage.getItem("online-canteen"))?.user.image

    return (
        <CONTAINER className="NAVBAR__CONTAINER">
            <div className="logo__box">
                {
                    USER_IMAGE === false || USER_IMAGE === "" ?
                        <img src={LOGO} alt="" className="logo" />
                        : <img src={USER_IMAGE} alt="" className="logo user-image" />

                }
            </div>
            <div className="navbar__content">
                {
                    NAVBAR_ICON.map((data) => (
                        <NAVBAR_ADMIN_DETAIL key={Math.random()} data={data} />
                    ))
                }
            </div>
        </CONTAINER>
    )
}

export default NAVBAR_ADMIN

const CONTAINER = styled.div``