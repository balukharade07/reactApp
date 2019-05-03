import React, { Component } from "react";
import Footer from "./footer";
import Header from "./header";
import UI from "./ui";
// import RegisterForm from "./RegisterForm";
// import UI2 from "./ui2";

import "./App.css";

class App extends Component {
	componentDidMount() {
		document.title = "Logic Hotspot";
	}

	render() {
		return (
			<div className="App">
				{/* <Header />
				<Footer /> */}
				<UI title="Send To Parent" />
				{/* <UI2 /> */}
				{/* <RegisterForm /> */}
			</div>
		);
	}
}

export default App;
