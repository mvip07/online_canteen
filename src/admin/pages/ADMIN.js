import styled from "styled-components";
import { memo, useEffect } from "react";
import { USER } from "../../utils/functions";

function ADMIN() {
    const NAME = `I'm ${USER?.lastname + " " + USER?.firstname}`

    function ANIMATION() {
        const text = document.querySelector("p")
        text.innerHTML = text.innerText.split("").map((char, i) =>
            `<span style="transform: rotate(${i * 10}deg)">${char}</span>`
        ).join("")
    }

    useEffect(() => ANIMATION())

    return (
        <CONTAINER>
            <div className="circle">
                <div className="logo">
                    <img src={USER?.image} alt="user photo" />
                </div>
                <div className="text">
                    <p>{NAME}</p>
                </div>
            </div>
        </CONTAINER>
    )
}

export default memo(ADMIN)
const CONTAINER = styled.div`
    left: 105px;
    height: 100vh;
    overflow: hidden;
    position: relative;
    width: calc(100% - 105px);

    @media (max-width: 768px) {
        left: 70px;
        width: calc(100% - 70px);
    }

    .circle {
        top: 50%;
        left: 50%;
        width: 200px;
        height: 200px;
        display: flex;
        background: #ccc;
        border-radius: 50%;
        position: relative;
        align-items: center;
        justify-content: center;
        transform: translate(-50%, -50%);
    }

    .logo img {
        width: 150px;
        height: 150px;
        position: relative;
        border-radius: 50%;
        background-size: cover;
    }

    .text {
        position: absolute;
        width: 100%;
        height: 100%;
        animation: rotateText 10s linear infinite;
    }

    @keyframes rotateText {
        0% {
            transform: rotate(360deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }

    .text span {
        position: absolute;
        left: 50%;
        font-size: 1.2rem;
        transform-origin: 0 100px;
    }
` 