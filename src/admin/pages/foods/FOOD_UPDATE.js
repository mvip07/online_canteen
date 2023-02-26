import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SELECTED_FOOD, UPDATE_FOOD } from "../../../crud/food_crud";

function ADMIN_UPDATE_FOOD() {
    const ID = useParams().id;
    const NAVIGATE = useNavigate();
    const [DAY, SET_DAY] = useState("");
    const [NAME, SET_NAME] = useState("");
    const [FILE, SET_FILE] = useState("");
    const [PRICE, SET_PRICE] = useState("");
    const [GETFOOD, SET_FOOD] = useState({});
    const [DESCRIPTION, SET_DESCRIPTION] = useState("");

    useEffect(() => {
      
        let IS_MOUNTED = true;
        
        if (IS_MOUNTED) SELECTED_FOOD(SET_FOOD, ID)

        return () => IS_MOUNTED = false
        
    }, []);

    return (
        <CONTAINER>
            <div className="container">
                <div className="container__title">
                    <h3>Update Food</h3>
                </div>

                <div className="container-select">
                    <select
                        className="select"
                        onClick={({ target }) => SET_DAY(target.value)}>
                        <option>{GETFOOD.day}</option>
                        <option>Monday</option>
                        <option>Tuesday</option>
                        <option>Wednesday</option>
                        <option>Thursday</option>
                        <option>Friday</option>
                        <option>Saturday</option>
                        <option>Sunday</option>
                    </select>
                </div>
            </div>

            <div className="input-group">
                <div className="food-input">
                    <input
                        defaultValue={GETFOOD?.name}
                        onChange={({ target }) => SET_NAME(target.value)}
                        placeholder="Create Food Name"
                        type="text"
                    />

                    <input
                        defaultValue={GETFOOD?.price}
                        onChange={({ target }) => SET_PRICE(target.value)}
                        placeholder="Create Food Price"
                        type="number"
                    />

                    <input
                        defaultValue={GETFOOD?.description}
                        onChange={({ target }) => SET_DESCRIPTION(target.value)}
                        placeholder="Describe the new dish"
                        type="text"
                    />

                    <div className="images">
                        <img src={GETFOOD?.image} alt="" />
                    </div>
                    <input onChange={({ target }) => SET_FILE(target.files[0])} type="file" />

                </div>

                <div className="food__btn">
                    <button onClick={() => NAVIGATE(-1)}>
                        BACK
                    </button>
                    <button onClick={() => UPDATE_FOOD(GETFOOD, ID, DAY, NAME, FILE, PRICE, DESCRIPTION)}>
                        UPDATE
                    </button>
                </div>
            </div>

        </CONTAINER>
    );
}

export default ADMIN_UPDATE_FOOD;

const CONTAINER = styled.div`
    top: 50%;
    left: 50%;
    width: 90%;
    height: 90vh;
    position: absolute;
    padding: 20px 30px;
    background: #1F1D2B;
    border-radius: 15px;
    transform: translate(-50%, -50%);

    .container__title h3 {
        color: #FFFFFF;
        font-size: 28px;
        font-weight: 600;
        line-height: 140%;
        font-style: normal;
        text-align: center;
        font-family: 'Barlow';
    }

    .food__btn {
        gap: 28px;
        width: 100%;
        display: flex;
    }

    .food__btn button {
        width: 100%;
        margin-top: 10px;
    }

    .images {
        gap: 10px;
        width: 120px;
        height: 120px;
        display: flex;

        img {
            width: 100%;
        }
    }
`;
