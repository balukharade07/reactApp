import React, { Component } from "react";
import Demo from "./demo";
import Button from "@material-ui/core/Button";

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			age: "",
			email: ""
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
			password: "",
			age: "",
			email: ""
		});
	};
	render() {
		const OnlyAlphabetsReg = "^[a-zA-Z][a-zA-Z ]+$";
		const OnlyNumCharReg = "^[0-9][0-9 ]*$";
		const AllReg = "[a-zA-Z0-9_]+.*$";
		const email = "[a-z0-9._%+-]+@[a-z0-9.-]+[a-z]{2,4}$";

		const formElements = [
			{
				label: "Username",
				type: "text",
				autoComplete: "OFF",
				class: "form-control",
				placeholder: "Enter Username",
				name: "username",
				value: this.state.username,
				required: true,
				pattern: OnlyAlphabetsReg
			},
			{
				label: "Age",
				type: "text",
				autoComplete: "OFF",
				class: "form-control",
				placeholder: "Enter Age",
				name: "age",
				value: this.state.age,
				required: true,
				pattern: OnlyNumCharReg
			},
			{
				label: "Email",
				type: "text",
				autoComplete: "OFF",
				class: "form-control",
				placeholder: "Enter Email Address",
				name: "email",
				value: this.state.email,
				required: true,
				pattern: email
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

		return (
			<div>
				<h2>Homw is work</h2>

				<form onSubmit={this.onSubmitContact}>
					<div>
						<Demo formElements={formElements} onChange={this.onChange} />
						<br />
					</div>
					<div className="text-center">
						<Button
							type="submit"
							className="col-lg-4 mt-5"
							id="primary"
							variant="contained"
							color="primary">
							Submit
						</Button>
					</div>
				</form>
			</div>
		);
	}
}
