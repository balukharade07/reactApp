import React, { Component } from "react";
import Messages from "./Messages";
import images4 from "../../src/images/Travelodge.svg";
import images5 from "../../src/images/ashcroft-bw.png";
import images3 from "../../src/images/BostonPizza.svg";

export default class Settings extends Component {
	componentDidMount() {
		console.log("componentDidMount");
	}

	componentWillMount() {
		console.log("componentWillMount");
	}

	render() {
		const settingdata = [
			{
				h2: "BostonPizza",
				img: images3,
				text:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
				name: "BostonPizza"
			},
			{
				h2: "ashcroft-bw",
				img: images5,
				text:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
				name: "ashcroft-bw"
			},
			{
				h2: "Travelodge",
				img: images4,
				text:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
				name: "Travelodge"
			},
			{
				h2: "Travelodge",
				img: images4,
				text:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
				name: "Travelodge"
			},
			{
				h2: "Travelodge",
				img: images4,
				text:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
				name: "Travelodge"
			},
			{
				h2: "ashcroft-bw",
				img: images5,
				text:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
				name: "ashcroft-bw"
			}
		];
		return (
			<div className="row">
				<Messages boxdata={settingdata} />
			</div>
		);
	}
}
