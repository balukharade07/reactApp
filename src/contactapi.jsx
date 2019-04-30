import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "./api";
import CustomButton from "./button";

export default class contactapi extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			items: [],
			search: ""
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
	onChange = e => {
		this.setState({ search: e.target.value });

		console.log(this.state.search);
	};

	render() {
		const { error, isLoaded, items } = this.state;

		const Custom_Button = [
			{
				type: "submit",
				variant: "contained",
				color: "secondary",
				btnText: "Contact View"
			}
		];
		const Custom_ButtonPri = [
			{
				type: "submit",
				variant: "contained",
				color: "primary",
				btnText: "Contact Edit"
			}
		];
		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return <div>Loading...</div>;
		} else {
			return (
				<React.Fragment>
					<div className="mt-5 mb-5 offset-lg-4 col-lg-4">
						<form>
							<input
								type="text"
								style={{ textAlign: "center" }}
								className="form-control"
								placeholder="Search Users"
								onChange={this.onChange.bind(this)}
								name="search"
								value={this.state.search}
							/>
						</form>
					</div>
					<div className="container row mt-5 mb-5">
						{items.map((item, index) => (
							<div className="col-lg-4" key={index}>
								<div className="shadow  mb-4 bg-white">
									<p>{item.name}</p>
									<p>{item.email}</p>
									<Link to={"/contactnew/show/" + item.id} className="nav-link">
										<CustomButton Custom_Button={Custom_Button} />
									</Link>
									<Link to={"/contactnew/edit/" + item.id} className="nav-link">
										<CustomButton Custom_Button={Custom_ButtonPri} />
									</Link>
								</div>
							</div>
						))}
					</div>
				</React.Fragment>
			);
		}
	}
}
