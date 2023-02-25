import Main from "./pages/Main";
import styled from "styled-components";
import { TOKEN_TIME } from "./utils/functions";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import React, { useEffect, useState } from "react";

function App() {
	const NAVIGATE = useNavigate()
	const [TIMES, SET_TIME] = useState(JSON.parse(sessionStorage.getItem("online-canteen-token-time")))

	useEffect(() => {
		if (!(TIMES?.minut >= 60)) TOKEN_TIME(SET_TIME, TIMES, NAVIGATE)
	}, [TIMES?.secund])

	return (
		<>
			<TOKEN_TIME_CONTENT>
				<div
					aria-valuemin="0"
					role="progressbar"
					aria-valuemax="100"
					aria-valuenow={TIMES?.minut}
					style={{ "--value": TIMES?.minut }}
				></div>
			</TOKEN_TIME_CONTENT>

			<ToastContainer
				draggable
				rtl={false}
				closeOnClick
				pauseOnHover
				theme="colored"
				autoClose={2000}
				pauseOnFocusLoss
				newestOnTop={false}
				position="top-right"
				hideProgressBar={false}
			/>
			<Main />
		</>
	)
}
export default React.memo(App);
const TOKEN_TIME_CONTENT = styled.div`
	right: 20px;
	bottom: 20px;
	z-index: 10000;
	position: absolute;
	
	div[role="progressbar"] {
		--bg: #def;
		--size: 3rem;
		--fg: #EA7C69;
		display: grid;
		color: var(--fg);
		width: var(--size);
		border-radius: 50%;
		height: var(--size);
		place-items: center;
		background-color: var(--bg);
		--pgPercentage: var(--value);
		--pgPercentage: var(--value);
		font-size: calc(var(--size) / 3);
		animation: growProgressBar 3s 1 forwards;
		font-family: Helvetica, Arial, sans-serif;
		background: radial-gradient(closest-side, white 80%, transparent 0 99.9%, white 0), conic-gradient(var(--fg) calc(var(--pgPercentage) * 1%), var(--bg) 0);
	}
	
	@keyframes growProgressBar {
  		0% { --pgPercentage: 0; }
  		100% { --pgPercentage: var(--value); }
	}

	div[role="progressbar"]::before {
		content: counter(percentage);
		content: counter(percentage + "min"), "min";
		counter-reset: percentage var(--value);
	}
`