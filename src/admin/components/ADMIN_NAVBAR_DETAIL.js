import styled from "styled-components"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function NAVBAR_ADMIN_DETAIL({ data }) {
    return (
        <COMPONENT to={`${data?.path}`}>
            <div className={`${data?.path === "/logout" ? "content__logout content" : "content"}`}>
                <div className="content__box">
                    <FontAwesomeIcon icon={data?.icon} className="icon" />
                </div>
            </div>

        </COMPONENT>
    )
}

export default NAVBAR_ADMIN_DETAIL

const COMPONENT = styled(Link)``