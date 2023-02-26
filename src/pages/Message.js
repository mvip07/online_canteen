import { useState } from "react";
import styled from "styled-components";
import { CREATE_MESSAGE } from "../crud/message_crud";

function MESSAGES() {
    
    const [MESSAGE, SET_MESSAGE] = useState("")

    return (
        <CONTAINER>
            <div className="container__title">
                <h2>Send Message</h2>
            </div>
            <div className="form">
                <div className="form-input__group">
                    <textarea
                        className="input-group__msg"
                        placeholder="Your Comments"
                        defaultValue={MESSAGE}
                        onChange={({ target }) => SET_MESSAGE(target.value)}
                    />

                    <button
                        onClick={() => CREATE_MESSAGE(MESSAGE)}
                        className="input-group__btn">Message Send</button>
                </div>

            </div>
        </CONTAINER>
    )
}

export default MESSAGES

const CONTAINER = styled.div`
    left: 105px;
    height: 100vh;
    overflow: hidden;
    position: relative;
    width: calc(100% - 105px);

    .container__title {
        padding: 20px;
    }

    .container__title h2 {
        color: #FFFFFF;
        font-size: 28px;
        font-weight: 600;
        font-style: normal;
        font-family: 'Barlow';
    }

    .form {
        top: 50%;
        left: 50%;
        width: 450px;
        height: 410px;
        padding: 20px;
        position: absolute;
        border-radius: 8px;
        background: #1F1D2B;
        transform: translate(-50%, -50%);
    }

    .form .form-input__group {
        width: 100%;
        height: 100%;
    }

    .form .form-input__group .input-group__msg {
        margin: 0 0 30px 0;
        height: 280px;
        resize: none;
    }

    .form .form-input__group .input-group__btn {
        width: 100%;
    }   
    
    @media (max-width: 768px) {
        left: 70px;
        width: calc(100% - 70px);
    }

    @media (max-width: 600px) {
        .form {
            width: 100%;
        }
    }
`