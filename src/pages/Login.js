import { useState } from "react"
import styled from "styled-components"
import { USER_LOGIN } from "../crud/user_crud";
import { useNavigate } from 'react-router-dom';

function LOGIN () {
	const NAVIGATE = useNavigate();
	const [USERNAME, SET_USERNAME] = useState("");
	const [PASSWORD, SET_PASSWORD] = useState("");

	return (
		<CONTANINER className="LOGIN__CONTAINER">
			<div className="login-container">
				<div className="login__text">
					<h3>Login</h3>
				</div>

				<div className="login__group">
					<div className="login__input">
						<input
							type="text"
							onChange={({ target }) =>
								SET_USERNAME(target.value)}
							placeholder="Enter your Username"
						/>

						<input
							type="password"
							onChange={({ target }) =>
								SET_PASSWORD(target.value)}
							placeholder="Enter your Password"
						/>
					</div>

					<div className="login__forgot">
						<p>Forgot your password ?</p>
					</div>

					<div className="login__btn">
						<button onClick={() => NAVIGATE("/register")}> Register </button>
						<button onClick={() => USER_LOGIN(USERNAME, PASSWORD, NAVIGATE)}> Sign In </button>
					</div>
				</div>
			</div>
		</CONTANINER>
	)
}

export default LOGIN

const CONTANINER = styled.div``
