import React, { Component } from "react";
import logo from "../src/images/logo-small.png";
import "./App.css";
import Inputs from "./Component_tab/demo";
import CustomButton from "./button";

class Singup extends Component {
	componentDidMount() {
		document.title = "Logic Singup";
	}

	constructor(props) {
		super(props);
		this.state = {
			singup: {
				username: "",
				password: "",
				Fname: "",
				Lname: "",
				email: ""
			},
			errors: {}
		};
	}

	onChange = e => {
		let singup = this.state.singup;
		singup[e.target.name] = e.target.value;
		this.setState({
			singup
		});
		this.validateForm();
	};

	onSubmitContact = e => {
		e.preventDefault();

		if (this.validateForm()) {
			console.log(this.state.singup);
			this.props.history.push("/login");
			this.setState({
				singup: {
					username: "",
					password: "",
					Fname: "",
					Lname: "",
					email: ""
				}
			});
		}
	};

	validateForm() {
		const singup = this.state.singup;
		const errors = {};
		let formIsValid = true;

		if (singup.Fname !== "undefined") {
			if (!singup.Fname.match(/^[a-zA-Z][a-zA-Z ]+$/)) {
				formIsValid = false;
				errors.Fname = "*Please enter alphabet characters only.";
			}
		}
		if (singup.Fname !== "undefined") {
			if (!singup.Fname) {
				formIsValid = false;
				errors.Fname = "*Please enter your Fname.";
			}
		}

		if (singup.Lname !== "undefined") {
			if (!singup.Lname.match(/^[a-zA-Z][a-zA-Z ]+$/)) {
				formIsValid = false;
				errors.Lname = "*Please enter alphabet characters only.";
			}
		}
		if (singup.Lname !== "undefined") {
			if (!singup.Lname) {
				formIsValid = false;
				errors.Lname = "*Please enter your Lname.";
			}
		}

		if (singup.email !== "undefined") {
			if (!singup.email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
				formIsValid = false;
				errors.email = "*Email is inValid.";
			}
		}
		if (singup.email !== "undefined") {
			if (!singup.email) {
				formIsValid = false;
				errors.email = "*Please enter your email.";
			}
		}
		if (singup.username !== "undefined") {
			if (!singup.username.match(/^[a-zA-Z][a-zA-Z ]+$/)) {
				formIsValid = false;
				errors.username = "*Please enter alphabet characters only.";
			}
		}

		if (singup.username !== "undefined") {
			if (!singup.username) {
				formIsValid = false;
				errors.username = "*Please enter your username.";
			}
		}

		if (singup.password !== "undefined") {
			if (!singup.password.match(/[a-zA-Z0-9_]+.*$/)) {
				formIsValid = false;
				errors.password = "*Please enter secure and strong password.";
			}
		}

		if (singup.password !== "undefined") {
			if (singup.password.length < 8) {
				formIsValid = false;
				errors.password = "Password must be 8 or more characters";
			}
		}

		if (singup.password !== "undefined") {
			if (!singup.password) {
				formIsValid = false;
				errors.password = "*Please enter your password.";
			}
		}

		this.setState({
			errors: errors
		});

		return formIsValid;
	}

	render() {
		// const AllReg = "[a-zA-Z0-9_]+.*$";
		// const OnlyNumbersReg = "^[0-9]*$";
		// const OnlyAlphabetsReg = "^[a-zA-Z][a-zA-Z ]+$";
		// const OnlyNumCharReg = "^[a-zA-Z0-9][a-zA-Z0-9 ]+$";
		// const UserNameReg = "^[a-zA-Z][a-zA-Z]+$";
		// const EmailReg = "/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/"

		const formElements = [
			{
				label: "First Name",
				type: "text",
				autoComplete: "OFF",
				class: "form-control",
				placeholder: "Enter Fname",

				name: "Fname",
				value: this.state.singup.Fname,
				errorsBorder: this.state.errors.Fname,
				errorsSMS: this.state.errors.Fname
			},
			{
				label: "Last Name",
				type: "text",
				autoComplete: "OFF",
				class: "form-control",
				placeholder: "Enter Lname",
				name: "Lname",
				value: this.state.singup.Lname,
				errorsBorder: this.state.errors.Lname,
				errorsSMS: this.state.errors.Lname
			},
			{
				label: "Email Address",
				type: "email",
				autoComplete: "OFF",
				class: "form-control",
				placeholder: "Enter Email Address",
				name: "email",
				value: this.state.singup.email,
				errorsBorder: this.state.errors.email,
				errorsSMS: this.state.errors.email
			},
			{
				label: "Username",
				type: "text",
				autoComplete: "OFF",
				class: "form-control",
				placeholder: "Enter Username",
				name: "username",
				value: this.state.singup.username,
				errorsBorder: this.state.errors.username,
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
				value: this.state.singup.password,
				errorsSMS: this.state.errors.password
			}
		];
		const Custom_Button = [
			{
				type: "submit",
				className: "col-lg-4 mt-5 mb-5",
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
				</div>
			</React.Fragment>
		);
	}
}

export default Singup;
