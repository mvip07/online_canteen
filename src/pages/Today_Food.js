import styled from "styled-components";
import { useEffect, useState } from "react";
import { TOASTIFY } from "../utils/toastify";
import { GET_TODAY_FOOD } from "../crud/food_crud";
import { CREATE_ORDER, GET_TODAY_ORDER } from "../crud/order_crud";

function TODAY_FOOD() {

	const TODAY_NAME = new Date().getDay()
	const [COUNT, SET_COUNT] = useState(1)
	const [ORDER, SET_ORDER] = useState([])
	const [TODAY_MENU, SET_TODAY_MENU] = useState({})
	const GET_USER = ORDER?.map(({ user }) => user.id)
	const TOKEN = JSON.parse(localStorage.getItem("online-canteen"))?.token
	const GET_DATE = ORDER?.map(({ create_date }) => create_date.substring(0, 10))
	const WEEKS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

	useEffect(() => {
		if (TOKEN) {
			GET_TODAY_ORDER(SET_ORDER)
			GET_TODAY_FOOD(SET_TODAY_MENU, WEEKS, TODAY_NAME)
		}
	}, [TOKEN, TODAY_NAME])

	function ORDERS () {
		if (COUNT <= 1) {
			SET_COUNT(COUNT + 1)
			CREATE_ORDER(GET_DATE, GET_USER, TODAY_MENU)
		} else TOASTIFY("warning", "You have placed an order")
	}

	return (
		<CONTAINER>
			<div className="food-detail">
				<div className="food_detail__image">
					<img src={TODAY_MENU?.image} alt="" />
				</div>

				<div className="food_detail__title">
					<p className="food-detail-p">{TODAY_MENU?.name}</p>
				</div>

				<div className="food_detail__price">
					<b>$ {TODAY_MENU?.price}</b>
				</div>

				<div className="food-detail__btn"
					onClick={() => ORDERS()}
				>
					<button>To Order</button>
				</div>
			</div>
		</CONTAINER>
	);
}

export default TODAY_FOOD;

const CONTAINER = styled.div`
	width: 300px;
	height: 430px;
	position: relative;
	border-radius: 15px;
	background-color: #1F1D2B;

	.food-detail {
		padding: 20px;
	}

	.food_detail__image img {
		width: 200px;
		height: 200px;
		border-radius: 50%;
	}

	.food_detail__title p {
		color: #FFFFFF;
		font-size: 18px;
		font-weight: 500;
		line-height: 130%;
		margin: 20px auto;
		font-style: normal;
	}

	.food_detail__price b {
		color: #FFFFFF;
		font-size: 20px;
		font-weight: 400;
		line-height: 140%;
		text-align: center;
		font-style: normal;
	}

	.food-detail__btn button {	
		left: 0;
		bottom: 0;
		width: 100%;
		position: absolute; 
	}

	@media (max-width: 445px) {
		width: 100%;

		.food_detail__image img { 
			width: 90% ;
			height: 200px;
		}

		.food-detail__btn button {	
			margin-top: 20px;
		}	
	}
  
`;
