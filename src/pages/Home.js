import React from "react";
import TODAY_FOOD from "./Today_Food";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { ALL_FOOD } from "../crud/food_crud";
import FOOD_DETAIL from "../components/food_detail";

function HOME() {
    const TODAY = String(new Date())
    const [ALL_MENU, SET_ALL_MENU] = useState([])
    const [ALL_AND_TODAY, SET_ALL_AND_TODAY] = useState(false)
    const TOKEN = JSON.parse(localStorage.getItem("online-canteen"))?.token

    useEffect(() => {

        let IS_MOUNTED = true;
        
        if (IS_MOUNTED) {
            if (TOKEN && ALL_AND_TODAY) ALL_FOOD(SET_ALL_MENU)
        }
        
        return () => IS_MOUNTED = false

    }, [TOKEN, ALL_AND_TODAY])


    return (
        <CONTAINER>
            <div className="container">
                <div className="container__text">
                    <h3>MVIP Canteen</h3>
                    <p>{(TODAY).substring(0, 15)}</p>
                </div>
                <div className="container__btn">
                    <button onClick={() => SET_ALL_AND_TODAY(true)}>All Menu</button>
                    <button onClick={() => SET_ALL_AND_TODAY(false)}>Today Menu</button>
                </div>
                <div className="container__foods">
                    {
                        ALL_AND_TODAY == true ?
                            ALL_MENU.map((data) =>
                                <FOOD_DETAIL
                                    data={data}
                                    key={Math.random()}
                                />
                            )
                            :
                            TODAY.substring(0, 3) !== "Sun" ?
                                <TODAY_FOOD /> : ""
                    }
                </div>
            </div>
        </CONTAINER>
    )
}

export default HOME

const CONTAINER = styled.div`
    left: 105px;
    height: 100vh;
    overflow: hidden;
    position: relative;
    width: calc(100% - 105px);

    .container {
        width: 100%;
        height: 100%;
        padding: 20px;
    }

    .container__text {
        border-bottom: 1px solid #393C49;
    }

    .container__text h3 {
        color: #FFFFFF;
        font-size: 28px;
        font-weight: 600;
        font-style: normal;
        font-family: 'Barlow';
    }

    .container__text p {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        color: #E0E6E9;
        margin: 10px 0;
    }

    .container__btn {
        margin-top: 20px;
        display: flex;
        gap: 20px;
    }

    .container__foods {
        margin-top: 20px;
        width: 100%;
        height: calc(80vh - 40px);
        display: grid;
        padding: 20px 0;
        gap: 28px;
        overflow-y: scroll;
        text-align: center;
        grid-template-columns: repeat(auto-fill, minmax(192px, 1fr));
    }

    @media (max-width: 768px) {
        left: 70px;
        width: calc(100% - 70px);
    }
`;
