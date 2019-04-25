import React, { Component } from "react";
import Demo from "./demo";
import Select from "./select";
import Button from "@material-ui/core/Button";

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			age: "",
			email: "",
			example_select: "",
			example_select2: "",
			exampleRadios: ""
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
			email: "",
			example_select: "",
			example_select2: "",
			exampleRadios: ""
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

		const selectformElements = [
			{
				label: "Example select",
				class: "form-control",
				id: "lang",
				name: "example_select",
				value: this.state.example_select,
				option1: "A",
				option2: "B",
				option3: "C"
			},
			{
				label: "Example Numbers",
				class: "form-control",
				id: "lang1",
				name: "example_select2",
				value: this.state.example_select2,
				option1: "1",
				option2: "2",
				option3: "3",
				option4: "4"
			}
		];

		return (
			<div>
				<h2>Homw is work</h2>

				<form onSubmit={this.onSubmitContact}>
					<Demo formElements={formElements} onChange={this.onChange} />
					<Select selectform={selectformElements} onChange={this.onChange} />

					<div className="form-check">
						<input
							className="form-check-input"
							type="radio"
							name="exampleRadios"
							id="exampleRadios1"
							value="option1"
							defaultChecked
							onChange={this.onChange}
						/>
						<label className="form-check-label" htmlFor="exampleRadios1">
							Default radio
						</label>
					</div>
					<div className="form-check">
						<input
							className="form-check-input"
							type="radio"
							name="exampleRadios"
							id="exampleRadios2"
							value="option2"
							onChange={this.onChange}
						/>
						<label className="form-check-label" htmlFor="exampleRadios2">
							Second default radio
						</label>
					</div>
					<div className="form-check">
						<input
							className="form-check-input"
							type="radio"
							name="exampleRadios"
							id="exampleRadios3"
							value="option3"
							onChange={this.onChange}
						/>
						<label className="form-check-label" htmlFor="exampleRadios3">
							Disabled radio
						</label>
					</div>
					<div className="text-center">
						<Button
							type="submit"
							className="col-lg-4 mt-5"
							id="primary"
							variant="contained"
							color="secondary">
							Submit
						</Button>
					</div>
				</form>
			</div>
		);
	}
}
