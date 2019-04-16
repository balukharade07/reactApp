import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import API from "./api";

export default class contactapi extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			items: []
		};
	}

	componentDidMount() {
		API.get(`users`)
			.then(res => {
				const data = res.data;
				this.setState({
					isLoaded: true,
					items: data
				});
			})
			.catch(error => {
				alert(error);
			});
	}

	render() {
		const { error, isLoaded, items } = this.state;
		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return <div>Loading...</div>;
		} else {
			return (
				<div className="container row mt-5 mb-5">
					{items.map((item, index) => (
						<div className="col-lg-4" key={index}>
							<div className="shadow  mb-4 bg-white">
								<p>{item.name}</p>
								<p>{item.email}</p>
								<Link to={"/contactnew/show/" + item.id} className="nav-link">
									{" "}
									<Button variant="contained" color="secondary">
										Contact View
									</Button>
								</Link>
								<Link to={"/contactnew/edit/" + item.id} className="nav-link">
									{" "}
									<Button variant="contained" color="primary">
										Contact Edit
									</Button>
								</Link>
							</div>
						</div>
					))}
				</div>
			);
		}
	}
}
