import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import API from "./api";

import Editinput from "./editinput";

export default class editContact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			uaddress: "",
			city: "",
			phone: "",
			website: ""
		};
	}

	componentDidMount() {
		const newId = this.props.match.params.id;
		API.get(`users/${newId}`)
			.then(res => {
				const data = res.data;
				this.setState({
					name: data.name,
					email: data.email,
					uaddress: data.address.street,
					city: data.address.city,
					phone: data.phone,
					website: data.website
				});
			})
			.catch(error => {
				alert(error);
			});
	}
	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};
	onSubmitContact = e => {
		e.preventDefault();
		const newIdedit = this.props.match.params.id;
		// const myFrom = {
		// 	name: this.state.name,
		// 	email: this.state.email,
		// 	uaddress: this.state.uaddress,
		// 	city: this.state.city,
		// 	phone: this.state.phone,
		// 	website: this.state.website
		// };
		API.put(`users/${newIdedit}`, this.state)
			.then(res => {
				alert("Updated Successfully");
				this.props.history.push("/contactnew");
				console.log(res.data);
			})
			.catch(error => {
				alert(error);
			});
	};

	render() {
		const { name, email, uaddress, city, phone, website } = this.state;
		const AllReg = "[a-zA-Z0-9_]+.*$";
		const formElements = [
			{
				label: "Name",
				type: "text",
				autoComplete: "OFF",
				class: "form-control",
				placeholder: "Enter name",
				name: "name",
				defaultValue: name,
				value: name,
				required: true,
				pattern: AllReg
			},
			{
				label: "email",
				type: "email",
				autoComplete: "OFF",
				class: "form-control",
				placeholder: "Enter email",
				name: "email",
				defaultValue: email,
				value: email,
				required: true,
				pattern: AllReg
			},
			{
				label: "User address",
				type: "text",
				autoComplete: "OFF12",
				class: "form-control",
				placeholder: "Enter uaddress",
				name: "uaddress",
				defaultValue: uaddress,
				value: uaddress,
				required: true,
				pattern: AllReg
			},
			{
				label: "User City",
				type: "text",
				autoComplete: "OFF3",
				class: "form-control",
				placeholder: "Enter city",
				name: "city",
				defaultValue: city,
				value: city,
				required: true,
				pattern: AllReg
			},
			{
				label: "User Phone",
				type: "text",
				autoComplete: "OFF2",
				class: "form-control",
				placeholder: "Enter phone",
				name: "phone",
				defaultValue: phone,
				value: phone,
				required: true,
				pattern: AllReg
			},
			{
				label: "User WebSite",
				type: "text",
				autoComplete: "OFF1",
				class: "form-control",
				placeholder: "Enter website",
				name: "website",
				defaultValue: website,
				value: website,
				required: true,
				pattern: AllReg
			}
		];
		return (
			<React.Fragment>
				<div className="container mt-5 mb-5">
					<Link to={"/contactnew"} className="nav-link">
						<Button
							style={{ float: "right" }}
							className=""
							variant="contained"
							color="primary">
							Contact List
						</Button>
					</Link>
					<div className="shadow  mb-4 bg-white">
						<h3 style={{ textAlign: "center" }}>Edit Contact</h3>
						<form onSubmit={this.onSubmitContact}>
							<div className="row">
								<div className="col-lg-12">
									<Editinput
										formElements={formElements}
										onChange={this.onChange}
									/>
								</div>
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
				</div>
			</React.Fragment>
		);
	}
}
