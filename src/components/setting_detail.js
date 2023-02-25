import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { CHANGE } from "../utils/functions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SETTING_DETAIL({ data, SET_MENU }) {
    
    return (
        <COMPONENT className="SETTING__COMPONENT">
            <NavLink className="setting-link" to="" onClick={() => CHANGE(data?.title, "user" , SET_MENU)}>
                <div className="setting-link__icon">
                    <FontAwesomeIcon icon={data?.imgIcon} className="icon" />
                </div>

                <div className="setting-link__title">
                    <p className="title">{data?.title}</p>
                    <span className="decription">{data?.decription}</span>
                </div>
            </NavLink>
        </COMPONENT>
    )
}

export default SETTING_DETAIL

const COMPONENT = styled.div`
   
`