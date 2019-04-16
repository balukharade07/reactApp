import React, { Component } from "react";
import Test from "./test";
import "../App.css";
import API from "../api";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export default class contactlist extends Component {
	constructor() {
		super();
		this.state = {
			contacts: []
		};
	}

	componentDidMount() {
		API.get(`users`)
			.then(res => {
				const data = res.data;
				this.setState({
					isLoaded: true,
					contacts: data
				});
			})
			.catch(error => {
				alert(error);
			});
	}

	deleteContact(id) {
		API.delete(`users/${id}`)
			.then(res => {
				console.log(res.data);
				alert("Delete Successfully");
			})
			.catch(error => {
				alert(error);
			});
	}

	render() {
		const { contacts } = this.state;

		return (
			<React.Fragment>
				<div className="mt-5 mb-5" style={{ float: "right" }}>
					<Link to="/About" className="nav-link">
						{" "}
						<Button className="" variant="contained" color="secondary">
							Contact Info
						</Button>
					</Link>
				</div>
				<div className="container row mt-5 mb-5">
					{contacts.map((contact, index) => (
						<Test
							key={contact.id}
							contact={contact}
							deleteClick={this.deleteContact.bind(this, contact.id)}
						/>
					))}
				</div>
			</React.Fragment>
		);
	}
}
