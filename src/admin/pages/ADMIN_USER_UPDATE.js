import styled from "styled-components";
import { useState, useEffect } from "react";
import { USER } from "../../utils/functions";
import { useNavigate, useParams } from "react-router-dom";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { USER_SELECTED, USER_UPDATE } from "../../crud/user_crud";

function ADMIN_USER_UPDATE() {

    const ID = useParams().id
    const NAVIGATE = useNavigate()
    const [JOB, SET_JOB] = useState("")
    const [ROL, SET_ROL] = useState("")
    const [USERS, SET_USERS] = useState({})
    const [IMAGE, SET_IMAGE] = useState("")
    const [USERNAME, SET_USERNAME] = useState("")
    const [PASSWORD, SET_PASSWORD] = useState("")
    const [LASTNAME, SET_LASTNAME] = useState("")
    const [FIRSTNAME, SET_FIRSTNAME] = useState("")
   
    useEffect(() => {
        let IS_MOUNTED = true;
        
        if (IS_MOUNTED) USER_SELECTED(SET_USERS, ID)

        return () => IS_MOUNTED = false
        
    }, [ID])

    return (
        <CONATINER>
            <div className="user__update">
                <div className="user__header">
                    <h2>Hey ! {USER.firstname + " " + USER.lastname}</h2>
                </div>
                <div className="user__information">
                    <div className="user__image">
                        <img src={USERS.image} alt="User Image" />
                    </div>
                    <div className="update__input">
                        <h3>User Selected </h3>
                        <p>Create Date: {USERS.create_date}</p>
                        <div className="input-group">
                            <div className="input">
                                <input
                                    onChange={({ target }) =>
                                        SET_FIRSTNAME(target.value)}
                                    type="text"
                                    defaultValue={USERS.firstname}
                                    placeholder="Enter your First Name"
                                />

                                <input
                                    onChange={({ target }) =>
                                        SET_LASTNAME(target.value)}
                                    type="text"
                                    defaultValue={USERS.lastname}
                                    placeholder="Enter your Last Name"
                                />

                                <input
                                    onChange={({ target }) =>
                                        SET_JOB(target.value)}
                                    type="text"
                                    defaultValue={USERS.job}
                                    placeholder="Enter your job"
                                />

                                <input
                                    onChange={({ target }) =>
                                        SET_USERNAME(target.value)}
                                    type="text"
                                    defaultValue={USERS.username}
                                    placeholder="Enter your Username"
                                />

                                <input
                                    onChange={({ target }) =>
                                        SET_PASSWORD(target.value)}
                                    type="text"
                                    defaultValue={USERS.password}
                                    placeholder="Enter your Password"
                                />

                                <select
                                    onChange={({ target }) =>
                                        SET_ROL(target.value)}
                                    defaultValue={USERS.rol}
                                    placeholder="Enter your Rol"
                                >
                                    <option>{USERS.rol}</option>
                                    <option>user</option>
                                    <option>admin</option>
                                </select>
                                <input id="file" type="file"
                                    onChange={({ target }) => SET_IMAGE(target.files[0])}
                                />
                            </div>

                            <div className="change-btn">
                                <button onClick={() => NAVIGATE(-1)}>Back</button>
                                <button onClick={() => USER_UPDATE(USERS, ROL, JOB, IMAGE, LASTNAME, USERNAME, FIRSTNAME, PASSWORD, NAVIGATE)}>Update User</button>
                                <label className="btn__label" htmlFor="file"><FontAwesomeIcon icon={faImage} className="icon" /></label>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </CONATINER>
    )
}

export default ADMIN_USER_UPDATE

const CONATINER = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;

    .user__update {
        left: 50%;
        width: 100%;
        height: 100%;
        position: relative;
        padding: 25px 30px;
        background: #1F1D2B;
        transform: translate(-50%, -0%);
    }

    .user__header {
        border-bottom: 1px solid #fff;
    }

    .user__header h2 {
        color: #FFFFFF;
        font-size: 20px;
        font-weight: 600;
        line-height: 140%;
        font-style: normal;
        font-family: 'Barlow';
        margin: 0px 0px 25px 0;
    }

    .user__information {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .user__image img {
        width: 100%;
        height: 100%;
    }

    .user__update .update__input {
        margin: 0 30px;
    }

    .update__input h3 {
        color: #FFFFFF;
        font-size: 28px;
        margin-top: 10px;
        font-weight: 600;
        line-height: 140%;
        font-style: normal;
        font-family: 'Barlow';
    }

    .update__input p {
        color: #FFFFFF;
        font-size: 20px;
        margin-top: 10px;
        font-weight: 600;
        line-height: 140%;
        font-style: normal;
        font-family: 'Barlow';
    }

    #file {
        display: none;
    }

    .update__input .change-btn {
        gap: 20px;
        width: 100%;
        display: flex;
        align-items: center;
    }

    .update__input .change-btn button {
        width: 100%;
    }
`