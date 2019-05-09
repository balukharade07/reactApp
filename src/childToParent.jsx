import React, { Component } from "react";

export default class childToParent extends Component {
	render() {
		return (
			<div>
				<h2>Child To Parents</h2>
				<button onClick={this.props.clickHandler}>{this.props.btnName}</button>
			</div>
		);
	}
}
