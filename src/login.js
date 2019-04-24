import React, { Component } from "react";
import logo from "../src/images/logo-small.png";
import "./App.css";
import Demo from "./Component_tab/demo";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
// import TextField from '@material-ui/core/TextField';
// import Validate from "react-validate-form";

class NameForm extends Component {
	componentDidMount() {
		document.title = "Logic Login page";
	}

	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		};
	}

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmitContact = e => {
		e.preventDefault();
		console.log(this.state);
		this.setState({
			username: "",
			password: ""
		});
	};

	render() {
		const { username, password } = this.state;

		const AllReg = "[a-zA-Z0-9_]+.*$";
		const isEnabled = username.length > 0 && password.length > 0;
		const formElements = [
			{
				label: "Username",
				type: "text",
				autoComplete: "OFF",
				class: "form-control",
				placeholder: "Enter Username",
				name: "username",
				value: username,
				required: true,
				pattern: AllReg
			},
			{
				label: "Password",
				type: "password",
				autoComplete: "OFF",
				class: "form-control",
				placeholder: "Enter Password",
				name: "password",
				value: password,
				required: true,
				pattern: AllReg
			}
		];
		return (
			<React.Fragment>
				<div className="offset-lg-3 col-lg-6">
					<div style={{ textAlign: "center" }}>
						<img className="mt-5 " src={logo} alt="Logo" />
					</div>
					<form onSubmit={this.onSubmitContact}>
						<Demo formElements={formElements} onChange={this.onChange} />
						<div className="text-center">
							<Button
								type="submit"
								className="col-lg-4 mt-5"
								id="primary"
								variant="contained"
								color="primary"
								disabled={!isEnabled}>
								Submit
							</Button>
						</div>
					</form>

					<div style={{ textAlign: "center" }}>
						<Link to={"/login/singup"} className="nav-link">
							{" "}
							<Button color="primary">Sing UP</Button>
						</Link>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default NameForm;
