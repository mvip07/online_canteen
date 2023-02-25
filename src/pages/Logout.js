import styled from "styled-components";
import { USER } from "../utils/functions";
import { TOASTIFY } from "../utils/toastify";
import { useNavigate } from "react-router-dom";

function LOGOUT () {
    let NAVIGATE = useNavigate();
    
    return (
        <CONTAINER >
            <div className="logout-container">
                <div className="logout__title">
                     <h3>Dear User, please confirm if you want to leave the site</h3>
                </div>

                <div className="logout__btn">
                    <button onClick={() => NAVIGATE(-1)}>Canel</button>
                    <button 
                        onClick={() => {
                            TOASTIFY("warning", `See you next time ${USER.firstname} ${USER.lastname}`)
                            localStorage.removeItem("online-canteen")
                            NAVIGATE("/login")
                        }}
                    >I agree</button>
                </div>
            </div>
        </CONTAINER>
    )
}

export default LOGOUT

const CONTAINER = styled.div`
    left: 105px;
    height: 100vh;
    overflow: hidden;
    position: relative;
    width: calc(100% - 105px);

    .logout-container {
        top: 50%;
        left: 50%;
        width: 450px;
        height: 260px;
        position: absolute;
        border-radius: 8px;
        background: #1F1D2B;
        padding: 55px 30px 25px 30px;
        transform: translate(-50%, -50%);
    }

    .logout__title h3 {
        color: #FFFFFF;
        font-size: 20px;
        font-weight: 400;
        line-height: 120%;
        font-style: normal;
        text-align: center;
        font-family: 'Barlow';
    }

    .logout__btn {
        gap: 20px;
        display: flex;
        margin-top: 85px;
    }

    .logout__btn button {
        width: 100%;
    }
`