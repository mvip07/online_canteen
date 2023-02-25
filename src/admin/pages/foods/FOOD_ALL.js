import styled from "styled-components";
import { useEffect, useState } from "react";
import ADMIN_DETAIL_FOOD from "./FOOD_DETAIL";
import { useNavigate } from "react-router-dom";
import { ALL_FOOD } from "../../../crud/food_crud";

function ADMIN_ALL_FOOD() {
    const NAVIGATE = useNavigate()
    const TODAY = String(new Date())
    const [FOOD, SET_FOOD] = useState([])

    useEffect(() => {
        ALL_FOOD(SET_FOOD)
    }, [])

    return (
        <CONTAINER>
            <div className="container">
                <div className="container__header">
                    <div className="container__title">
                        <h3>MVIP Canteen</h3>
                        <p>{(TODAY).substring(0, 15)}</p>
                    </div>

                    <div className="container__btn">
                        <button onClick={() => NAVIGATE("/admin/create/food")}>+</button>
                    </div>
                </div>

                <div className="container__foods">
                    {
                        FOOD.map((data) =>
                            <ADMIN_DETAIL_FOOD
                                data={data}
                                key={Math.random()}
                            />
                        )
                    }
                </div>
            </div>
        </CONTAINER>
    )
}

export default ADMIN_ALL_FOOD

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

    .container__header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }

    .container__header {
        border-bottom: 1px solid #393C49;
    }

    .container__header .container__title h3 {
        color: #FFFFFF;
        font-size: 28px;
        font-weight: 600;
        font-style: normal;
        font-family: 'Barlow';
    }

    .container__header .container__title p {
        color: #E0E6E9;
        margin: 10px 0;
        font-size: 16px;
        font-style: normal;
        font-weight: normal;
    }

    .container__btn {
        gap: 20px;
        display: flex;
        margin-top: 20px;
    }

    .container__foods {
        gap: 28px;
        width: 100%;
        display: grid;
        padding: 20px 0;
        margin-top: 20px;
        overflow-y: scroll;
        text-align: center;
        height: calc(80vh - 40px);
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    }

    @media (max-width: 768px) {
        left: 70px;
        width: calc(100% - 70px);
    }

`;