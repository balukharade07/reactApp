import React, { Component } from "react";
import logo from "../src/images/logo-small.png";
import "./App.css";
import Inputs from "./Component_tab/demo";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import CustomButton from "./button";

class NameForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fields: {
				username: "",
				password: ""
			},
			errors: {}
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmitContact = this.onSubmitContact.bind(this);
	}

	onChange = e => {
		let fields = this.state.fields;
		fields[e.target.name] = e.target.value;
		this.setState({
			fields
		});
		this.validateForm();
	};

	onSubmitContact = e => {
		e.preventDefault();
		if (this.validateForm()) {
			let fields = {};
			fields.username = "";
			fields.password = "";
			this.setState({ fields: fields });
			console.log(this.state.fields);
		}
	};

	validateForm() {
		const fields = this.state.fields;
		const errors = {};
		let formIsValid = true;

		if (typeof fields.username !== "undefined") {
			if (!fields.username.match(/^[a-zA-Z][a-zA-Z ]+$/)) {
				formIsValid = false;
				errors.username = "*Please enter alphabet characters only.";
			}
		}

		if (typeof fields.username !== "undefined") {
			if (!fields.username) {
				formIsValid = false;
				errors.username = "*Please enter your username.";
			}
		}

		if (typeof fields.password !== "undefined") {
			if (!fields.password.match(/[a-zA-Z0-9_]+.*$/)) {
				formIsValid = false;
				errors.password = "*Please enter secure and strong password.";
			}
		}

		if (typeof fields.password !== "undefined") {
			if (fields.password.length < 8) {
				formIsValid = false;
				errors.password = "Password must be 8 or more characters";
			}
		}

		if (typeof fields.password !== "undefined") {
			if (!fields.password) {
				formIsValid = false;
				errors.password = "*Please enter your password.";
			}
		}

		this.setState({
			errors: errors
		});

		return formIsValid;
	}
	componentWillUnmount() {
		console.log(this);
	}
	render() {
		const formElements = [
			{
				label: "Username",
				type: "text",
				autoComplete: "OFF",
				class: "form-control",
				errorsBorder: this.state.errors.username,
				placeholder: "Enter Username",
				name: "username",
				value: this.state.fields.username,
				errorsSMS: this.state.errors.username
			},
			{
				label: "Password",
				type: "password",
				autoComplete: "OFF",
				class: "form-control",
				errorsBorder: this.state.errors.password,
				placeholder: "Enter Password",
				name: "password",
				value: this.state.fields.password,
				errorsSMS: this.state.errors.password
			}
		];
		const Custom_Button = [
			{
				type: "submit",
				className: "col-lg-4 mt-5",
				variant: "contained",
				color: "primary",
				btnText: "Submit"
			}
		];
		return (
			<React.Fragment>
				<div className="offset-lg-3 col-lg-6">
					<div style={{ textAlign: "center" }}>
						<img className="mt-5 " src={logo} alt="Logo" />
					</div>
					<form onSubmit={this.onSubmitContact}>
						<Inputs formElements={formElements} onChange={this.onChange} />
						<div className="text-center">
							<CustomButton Custom_Button={Custom_Button} />
						</div>
					</form>

					<div style={{ textAlign: "center" }}>
						<Link to={"/login/singup"} className="nav-link">
							<Button color="primary">Sing UP</Button>
						</Link>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default NameForm;
