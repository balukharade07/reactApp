import React, { Component } from "react";

import "./App.css";
import Footer from "./footer";
import Header from "./header";
// import UI from "./ui";
// import RegisterForm from "./RegisterForm";
// import Child from "./childToParent";

class App extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		count: 0,
	// 		name: "Add One More"
	// 	};
	// 	this.outputEvent = this.outputEvent.bind(this);
	// }

	// outputEvent() {
	// 	// the event context comes from the Child
	// 	if (this.state.count === 10) {
	// 		alert("Max 10 count");
	// 		this.setState({
	// 			count: 0
	// 		});
	// 		return false;
	// 	} else {
	// 		this.setState({
	// 			count: this.state.count + 1
	// 		});
	// 	}
	// }

	componentDidMount() {
		document.title = "Logic Hotspot";
	}
	render() {
		return (
			<div className="App">
				<Header />
				<Footer
					site="© 2019 Logic Hotspot All Rights Reserved."
					email="Email: info@logichotspot.com"
					address="Kelowna, British Columbia, V1P Contact No: 1.250.469.9632,"
				/>
				{/* <UI title="Send To Parent" /> */}
				{/* count:{this.state.count}
				<Child clickHandler={this.outputEvent} btnName={this.state.name} /> */}
				{/* <RegisterForm /> */}
				{/* <Child /> */}
			</div>
		);
	}
}

export default App;
