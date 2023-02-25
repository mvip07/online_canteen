import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function ADMIN_REGISTER() {
    const ROL = "admin"
    const NAVIGATE = useNavigate()
    const [JOB, SET_JOB] = useState("")
    const [LASTNAME, SET_LASTNAME] = useState("")
    const [USERNAME, SET_USERNAME] = useState("")
    const [PASSWORD, SET_PASSWORD] = useState("")
    const [FIRSTNAME, SET_FIRSTNAME] = useState("")
    const [CONFIRM_PASSWORD, SET_CONFIRM_PASSWORD] = useState("")

    return (
        <CONTAINER className="REGISTER__CONTAINER">
            <div className="register-container">
                <div className="register__title">
                    <h3>Admin Register</h3>
                </div>

                <div className="register-group">
                    <div className="register-input">
                        <input
                            type="text"
                            placeholder="Enter your First Name"
                            onChange={({ target }) => SET_FIRSTNAME(target.value)}
                        />

                        <input
                            type="text"
                            placeholder="Enter your Last Name"
                            onChange={({ target }) => SET_LASTNAME(target.value)}
                        />

                        <input
                            type="text"
                            placeholder="Enter your job"
                            onChange={({ target }) => SET_JOB(target.value)}
                        />

                        <input
                            type="text"
                            placeholder="Enter your Username"
                            onChange={({ target }) => SET_USERNAME(target.value)}
                        />

                        <input
                            type="text"
                            placeholder="Enter your Password"
                            onChange={({ target }) => SET_PASSWORD(target.value)}
                        />

                        <input
                            type="password"
                            placeholder="Enter your confirm Password"
                            onChange={({ target }) => SET_CONFIRM_PASSWORD(target.value)}
                        />
                    </div>

                    <div className="register-btn">
                        <button onClick={() => NAVIGATE("/admin/login")}>Sign Up</button>
                        <button onClick={() => ADMIN_REGISTER(JOB, ROL, USERNAME, PASSWORD, LASTNAME, FIRSTNAME, CONFIRM_PASSWORD, NAVIGATE)}>Register</button>
                    </div>
                </div>
            </div>
        </CONTAINER>
    )
}

export default ADMIN_REGISTER
const CONTAINER = styled.div``