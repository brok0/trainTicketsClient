import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles.css";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import { userLoginFetch } from "../../actions.js/userLoginFetch";
import HomePage from "../HomePage";

export class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "admin",
			password: "12345",
		};


		this.handleChange = this.handleChange.bind(this);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.Login();
	};

	componentDidMount() {
		document.getElementById("logOut").style.display = "none";
	}

	Login = () => {};

	// условный выход - просто удаляем токен и меняем видимость блоков
	logOut = (e) => {
		e.preventDefault();
		document.getElementById("logOut").style.display = "none";
		document.getElementById("userName").style.display = "none";
		document.getElementById("loginForm").style.display = "block";
		this.setState({ tokenKey: "" });
	};

	render() {
		return (
			<div class="login-page">
				<div class="form">
					<p id="userName"></p>
					<form id="loginForm" class="login-form" onSubmit={this.handleSubmit}>
						<input
							type="text"
							placeholder="Login"
							name="name"
							value={this.state.name}
							onChange={this.handleChange}
						/>
						<input
							type="password"
							placeholder="password"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
						/>
						<input
							className="button-success"
							type="submit"
							value="Login"
						></input>
						<button id="logOut" onClick={this.logOut}>
							Logout
						</button>
						<p class="message">
							Not registered? <Link to="/register">Create an account</Link>
						</p>
					</form>
				</div>
			</div>
		);
	}
}
export default LoginForm;
