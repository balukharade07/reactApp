import React, { Component } from 'react';
import {Route, NavLink, BrowserRouter} from "react-router-dom";
import Home from './Component_tab/Home';
import Profile from './Component_tab/Profile';
import Messages from './Component_tab/Messages';
import Settings from './Component_tab/Settings';
import './Component_tab/tab.scss'

class ContactUs extends Component {
    componentDidMount(){
        document.title = "Logic Contact"
      }
    constructor() {
		super();
		this.state = {
			// shown: false,
			array : ['Hydrogen',
					  'Helium',
					  'Lithium',
					  'Beryllium'
					]
		};
	}	
	
	// toggle() {
	// 	this.setState({
	// 		shown: !this.state.shown
	// 	});
	// }


    render(){
        // var shown = {
		// 	display: this.state.shown ? "block" : "none"
		// };
		
		// var hidden = {
		// 	display: this.state.shown ? "none" : "block"
		// }

		
		const element = (
			<div>
			  <h1>Hello, world!</h1>
			  <h2>It is {new Date().toLocaleDateString()}.</h2>
			</div>
		  );	
			const numbers = [
				{
                    id:1,
                    name:"Balu",
                    age:"20",
                    address:"solpaur"
                },
                {
                    id:2,
                    name:"Shri",
                    age:"25",
                    address:"Pune"
				},
				{
                    id:4,
                    name:"Shri",
                    age:"25",
                    address:"Pune"
                },
			];

			// const { array } = this.state;
			
        return(
            <div className="container mt-5">
			 <div className="row" >
				{numbers.map((number,i) =>
				<div className="col-lg-4" key={number.id}>
				 <div className="shadow  mb-4 bg-white" >
					<h1>{i}</h1> <h2> { number.name } </h2> <h3>{ number.age }</h3> 
					<h3> { number.address }</h3> 
				 </div>
				 </div>
					)}
					</div>

					{/* <h2>{array.shift()}</h2>
					<h2>{array.unshift('new Item')}</h2> */}
					{/* <h2>{array.pop()}</h2>
					<h2>{array.push('last added')}</h2> */}
					{/* <h2>{array.reverse()}</h2> */}
					{/* <h2>{array.sort()}</h2> */}
					{/* <h2>{this.state.array.reduce( function(a, b) {
  					return a + b;
					}, 2)}</h2><br /> */}

					{/* <h2> {array.forEach((a,index) => console.log(index,a)) }
					</h2> */}
					<h2>{element}</h2>
					{/* <h2>It is {new Date().toLocaleDateString()}.</h2> */}
					{/* <h2>{this.state.array}</h2> */}
					

				
                {/* <h2 style={ shown }>hello</h2>
                <h2 style={ hidden }>hello World</h2>
				<button className="btn btn-primary" onClick={this.toggle.bind(this)}>Toggle</button> */}
				 <BrowserRouter>
				<section className="">
					<div className="row">

				<div className="nav flex-column nav-pills col-lg-2" id="v-pills-tab" role="tablist" aria-orientation="vertical">
					<NavLink className="tab_section mb-2" exact to="/Contact/Home">Home</NavLink>
					<NavLink className="tab_section mb-2" to="/Contact/Profile">Profile</NavLink>
					<NavLink className="tab_section mb-2" to="/Contact/Messages">Messages</NavLink>
					<NavLink className="tab_section mb-2" to="/Contact/Settings">Settings</NavLink>
				</div>

					<div className="content col-lg-6">
						<Route path="/Contact/" exact component={Home} />
						<Route path="/Contact/Home" exact component={Home} />
						<Route path="/Contact/Profile"  component={Profile} />
						<Route path="/Contact/Messages"  component={Messages} />
						<Route path="/Contact/Settings"  component={Settings} />
         			</div>
					</div>
				
				</section>

				</BrowserRouter>
            </div>
        );
    }

}

export default ContactUs;