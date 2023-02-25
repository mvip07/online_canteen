import styled from "styled-components";

function FOOD_DETAIL({ data }) {

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
			</div>
		</COMPONENT>
	);
}

export default FOOD_DETAIL;

const COMPONENT = styled.div`
	width: 100%;
	height: 300px;
	position: relative;
	border-radius: 15px;
	background: #1F1D2B;

	.food-detail {
		padding: 20px;
	}

	.food-detail__image img {
		width: 160px;
		height: 160px;
		text-align: center;
		border-radius: 50%;
	}

	.food-detail__title p {
		color: #FFFFFF;
		font-size: 18px;
		font-weight: 500;
		line-height: 130%;
		text-align: center;
		font-style: normal;
	}

	.food-detail__price b {
		color: #FFFFFF;
		font-size: 20px;
		font-weight: 400;
		line-height: 140%;
		text-align: center;
		font-style: normal;
	}  
`;
