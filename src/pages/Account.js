import { useState } from "react";
import styled from "styled-components";
import { USER } from "../utils/functions";
import { USER_UPDATE } from "../crud/user_crud";
import { useNavigate } from "react-router-dom";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ACCOUNT() {
    const NAVIGATE = useNavigate()
    const [ROL, SET_ROL] = useState("")
    const [JOB, SET_JOB] = useState("")
    const [IMAGE, SET_IMAGE] = useState("")
    const [USERNAME, SET_USERNAME] = useState("")
    const [LASTNAME, SET_LASTNAME] = useState("")
    const [PASSWORD, SET_PASSWORD] = useState("")
    const [FIRSTNAME, SET_FIRSTNAME] = useState("")

    return (
        <CONTAINER className="ACCOUNT__CONTAINER">
            <div className="change__header">
                <div className="header__title">
                    <h2>My Account</h2>
                </div>
            </div>

            <div className="change-main">
                <div className="change-main__text">
                    <h3>Update Account</h3>
                </div>
                <div className="change-group">
                    <div className="change-input">
                        <label>Your First Name</label>
                        <input
                            type="text"
                            defaultValue={USER.firstname}
                            placeholder="Enter your First Name"
                            onChange={({ target }) => SET_FIRSTNAME(target.value)}
                        />
                    </div>

                    <div className="change-input">
                        <label>Your Last Name</label>
                        <input
                            type="text"
                            defaultValue={USER.lastname}
                            placeholder="Enter your Last Name"
                            onChange={({ target }) => SET_LASTNAME(target.value)}
                        />
                    </div>

                    <div className="change-input">
                        <label>Your Username</label>
                        <input
                            type="text"
                            defaultValue={USER.username}
                            placeholder="Enter your Username"
                            onChange={({ target }) => SET_USERNAME(target.value)}

                        />
                    </div>

                    <div className="change-input">
                        <label>Your Job</label>
                        <input
                            type="text"
                            defaultValue={USER.job}
                            placeholder="Enter your Job"
                            onChange={({ target }) => SET_JOB(target.value)}
                        />
                    </div>

                    <div className="change-input">
                        <input id="image" type="file"
                            onChange={({ target }) => SET_IMAGE(target.files[0])}
                        />
                    </div>
                </div>
                <div className="change-btn">
                    <button onClick={() => USER_UPDATE(USER, ROL, JOB, IMAGE, LASTNAME, USERNAME, FIRSTNAME, PASSWORD, NAVIGATE)}>Account Update</button>
                    <label className="btn__label" htmlFor="image"><FontAwesomeIcon icon={faImage} className="icon"/></label>
                </div>
            </div>
        </CONTAINER>
    )
}
export default ACCOUNT

const CONTAINER = styled.div``