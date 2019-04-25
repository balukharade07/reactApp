import React, { Component } from "react";
import Massage from "./Messages";
import images2 from "../../src/images/BlenzCoffee.svg";
import images3 from "../../src/images/BostonPizza.svg";
import images5 from "../../src/images/ashcroft-bw.png";

export default class Profile extends Component {
	render() {
		const boxdata = [
			{
				h2: "BlenzCoffee",
				img: images2,
				text:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
			},
			{
				h2: "BostonPizza",
				img: images3,
				text:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
			},
			{
				h2: "ashcroft-bw",
				img: images5,
				text:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
			}
		];

		return (
			<div className="row">
				<Massage boxdata={boxdata} />
			</div>
		);
	}
}
