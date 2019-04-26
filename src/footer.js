import React, { Component } from "react";
import "./App.css";
import logo2 from "../src/images/logo-small-footer.png";

export default class footer extends Component {
	render() {
		return (
			<React.Fragment>
				<footer className="row">
					<div className="container">
						<div className="row">
							<div className="col-md-4">
								<img src={logo2} alt="Logo2" />
							</div>
							<div className="col-md-4 text-center">
								<p> © 2019 Logic Hotspot All Rights Reserved.</p>
							</div>
							<div className="col-md-4 text-right">
								<p>
									Kelowna, British Columbia, V1P Contact No: 1.250.469.9632,
									Email: info@logichotspot.com
								</p>
							</div>
						</div>
					</div>
				</footer>
			</React.Fragment>
		);
	}
}
