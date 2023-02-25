import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { CREATE_FOOD } from "../../../crud/food_crud";

function ADMIN_CREATE_FOOD() {
    const NAVIGATE = useNavigate();
    const [DAY, SET_DAY] = useState("")
    const [NAME, SET_NAME] = useState("");
    const [FILE, SET_FILE] = useState("");
    const [PRICE, SET_PRICE] = useState("");
    const [DESCRIPTION, SET_DESCRIPTION] = useState("");

    return (
        <CONTAINER>
            <div className="container">
                <div className="container__title">
                    <h3 className="title">Create Food</h3>
                </div>

                <div className="container__select">
                    <select
                        className="select"
                        onClick={({ target }) => SET_DAY(target.value)}>
                        <option className="select__option">Monday</option>
                        <option className="select__option">Tuesday</option>
                        <option className="select__option">Wednesday</option>
                        <option className="select__option">Thursday</option>
                        <option className="select__option">Friday</option>
                        <option className="select__option">Saturday</option>
                        <option className="select__option">Sunday</option>
                    </select>
                </div>

                <div className="input__group">
                    <div className="food__input">
                        <input
                            onChange={({ target }) => SET_NAME(target.value)}
                            placeholder="Enter The Food Name"
                            type="text"
                        />

                        <input
                            onChange={({ target }) => SET_PRICE(target.value)}
                            placeholder="Enter The Food Price"
                            type="number"
                        />

                        <input
                            onChange={({ target }) => SET_DESCRIPTION(target.value)}
                            placeholder="Enter The Food About"
                            type="text"
                        />

                        <input onChange={({ target }) => SET_FILE(target.files[0])} type="file" />
                    </div>

                    <div className="food__btn">
                        <button onClick={() => NAVIGATE(-1)}> Canel </button>
                        <button onClick={() => CREATE_FOOD(DAY, NAME, FILE, PRICE, DESCRIPTION, NAVIGATE)}> Create</button>
                    </div>

                </div>
            </div>
        </CONTAINER>
    );
}

export default ADMIN_CREATE_FOOD;

const CONTAINER = styled.div`
  top: 50%;
  left: 50%;
  width: 90%;
  height: 70vh;
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
		display: flex;
		gap: 45px;
		align-items: center;
		justify-content: space-between;

		button {
			width: 100%;
		}
	}
`;
