import React, { Component } from "react";

export default class ui extends Component {
	constructor(props) {
		super(props);
		this.state = {
			display: "block",
			btnText: "Next",
			bgBox: "#fff",
			newTitle: this.props.title,
			classs: "btn btn-primary",
			textName: {
				name: "validations",
				color: "blue"
			},
			counter: 0
		};
	}

	onClick(e) {
		e.preventDefault();
		this.setState({
			counter: this.state.counter + 1,
			newTitle: "hello world"
		});

		if (this.state.display === "block") {
			this.setState({
				display: "none",
				btnText: "Back",
				classs: "btn btn-danger",
				textName: {
					name: "validations React js ",
					color: "green"
				}
			});
		} else if (this.state.display === "none") {
			this.setState({
				display: "block",
				btnText: "Next",
				classs: "btn btn-primary",
				textName: {
					name: "validations",
					color: "blue"
				}
			});
		}
	}

	render() {
		const stylebtn = {
			btnStyle: {
				color: "#fff"
			},
			h2Style: {
				color: "#fff"
			}
		};

		return (
			<React.Fragment>
				<h3 style={{ color: this.state.textName.color }}>
					{this.state.textName.name}
				</h3>
				<h2 style={{ display: this.state.display }}>Pune</h2>
				{/* <h2 style={{ color: this.state.textName.color }}>{textNew}</h2> */}
				<button
					style={stylebtn.btnStyle}
					className={this.state.classs}
					onClick={this.onClick.bind(this)}>
					{this.state.btnText}
				</button>
				<h2>{this.state.newTitle}</h2>
				<h3>{this.state.counter}</h3>
			</React.Fragment>
		);
	}
}
ui.defaultProps = {
	name: "Hello",
	message: "abcd"
};
