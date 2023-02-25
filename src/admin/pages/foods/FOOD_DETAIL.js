import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { DELETE_FOOD } from "../../../crud/food_crud";

function ADMIN_DETAIL_FOOD({ data }) {
	
	const NAVIGATE = useNavigate()
	return (
		<COMPONENT>
			<div className="food-detail">
				<div className="food-detail__image">
					<img src={data?.image} alt="" />
				</div>
				<div className="food-detail__title">
					<p>{data?.name}</p>
				</div>
				<div className="food-detail__price">
					<b> $ {data?.price}</b>
				</div>
				<div className="food-detail__decription">
					<p>{data?.description.length > 255 ? (data?.description).substring(0, 255) + "..." : data?.description}</p>
				</div>
				<div className="food-detail__btn">
					<button onClick={() => NAVIGATE(`/admin/update/food/${data?._id}`)}>EDIT</button>
					<button onClick={() => DELETE_FOOD(data?._id)}>DELETE</button>
				</div>
			</div>
		</COMPONENT>
	);
}

export default ADMIN_DETAIL_FOOD;

const COMPONENT = styled.div`
	width: 100%;
	height: 500px;
	position: relative;
	border-radius: 15px;
	background: #1F1D2B;

	.food-detail {
		padding: 20px;
	}

	.food-detail__image img {
		width: 200px;
		height: 200px;
		text-align: center;
		border-radius: 50%;
	}

	.food-detail__title p {
		color: #FFFFFF;
		font-size: 18px;
		font-weight: 500;
		margin-top: 20px;
		text-align: center;
		font-style: normal;
	}

	.food-detail__price b {
		color: #FFFFFF;
		margin: 20px 0;
		font-size: 20px;
		font-weight: 400;
		line-height: 140%;
		text-align: center;
		font-style: normal;
	} 
	
	.food-detail__decription {
		color: #FFFFFF;
		margin: 20px 0;
		font-size: 15px;
		font-weight: 400;
		line-height: 140%;
		text-align: center;
		font-style: normal;
	}

	.food-detail__btn {
		gap: 10px;
		width: 100%;
		display: flex;
		position: absolute;
		bottom:  0;
		left: 0;
	}

	.food-detail__btn button {
		width: 100%;
	}
`;
