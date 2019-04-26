import React, { Component } from "react";
import logo from "../src/images/logo-small.png";
import "./App.css";
import Inputs from "./Component_tab/demo";
import CustomButton from "./button";

class Singup extends Component {
	componentDidMount() {
		document.title = "Logic Sing UP";
	}

	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			Fname: "",
			Lname: "",
			email: ""
		};
	}

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmitContact = e => {
		e.preventDefault();
		console.log(this.state);
		this.props.history.push("/login");
		this.setState({
			username: "",
			password: "",
			Fname: "",
			Lname: "",
			email: ""
		});
	};

	render() {
		const AllReg = "[a-zA-Z0-9_]+.*$";
		const formElements = [
			{
				label: "First Name",
				type: "text",
				autoComplete: "OFF",
				class: "form-control",
				placeholder: "Enter Fname",
				name: "Fname",
				value: this.state.Fname,
				required: true,
				pattern: AllReg
			},
			{
				label: "Last Name",
				type: "text",
				autoComplete: "OFF",
				class: "form-control",
				placeholder: "Enter Lname",
				name: "Lname",
				value: this.state.Lname,
				required: true,
				pattern: AllReg
			},
			{
				label: "Email Address",
				type: "email",
				autoComplete: "OFF",
				class: "form-control",
				placeholder: "Enter Email Address",
				name: "email",
				value: this.state.email,
				required: true,
				pattern: AllReg
			},
			{
				label: "Username",
				type: "text",
				autoComplete: "OFF",
				class: "form-control",
				placeholder: "Enter Username",
				name: "username",
				value: this.state.username,
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
				value: this.state.password,
				required: true,
				pattern: AllReg
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
