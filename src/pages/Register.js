import { useState } from "react";
import styled from "styled-components"
import { useNavigate } from 'react-router-dom';
import { USER_REGISTER } from "../crud/user_crud";

function REGISTER() {
    const ROL = "user"
    const NAVIGATE = useNavigate()
    const [JOB, SET_JOB] = useState("")
    const [USERNAME, SET_USERNAME] = useState("")
    const [PASSWORD, SET_PASSWORD] = useState("")
    const [LASTNAME, SET_LASTNAME] = useState("")
    const [FIRSTNAME, SET_FIRSTNAME] = useState("")
    const [CONFIRM_PASSWORD, SET_CONFIRM_PASSWORD] = useState("")
    
    return (
        <CONTAINER className="REGISTER__CONTAINER">
            <div className="register-container">
                <div className="register__title">
                    <h3>Register</h3>
                </div>

                <div className="register-group">
                    <div className="register-input">
                        <input
                            onChange={({ target }) =>
                                SET_FIRSTNAME(target.value)}
                            type="text"
                            placeholder="Enter your First Name"
                        />

                        <input
                            onChange={({ target }) =>
                                SET_LASTNAME(target.value)}
                            type="text"
                            placeholder="Enter your Last Name"
                        />

                        <input
                            onChange={({ target }) =>
                                SET_JOB(target.value)}
                            type="text"
                            placeholder="Enter your job"
                        />

                        <input
                            onChange={({ target }) =>
                                SET_USERNAME(target.value)}
                            type="text"
                            placeholder="Enter your Username"
                        />

                        <input
                            onChange={({ target }) =>
                                SET_PASSWORD(target.value)}
                            type="text"
                            placeholder="Enter your Password"
                        />

                        <input
                            onChange={({ target }) =>
                                SET_CONFIRM_PASSWORD(target.value)}
                            type="password"
                            placeholder="Enter your confirm Password"
                        />
                    </div>

                    <div className="register-btn">
                        <button onClick={() => NAVIGATE("/login")}>Sign Up</button>
                        <button onClick={() => USER_REGISTER(JOB, ROL, USERNAME, PASSWORD, LASTNAME, FIRSTNAME, CONFIRM_PASSWORD, NAVIGATE)}>Register</button>
                    </div>
                </div>
            </div>
        </CONTAINER>
    )
}

export default REGISTER

const CONTAINER = styled.div``