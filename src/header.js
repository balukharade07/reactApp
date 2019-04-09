import React, { Component } from 'react'
import LandingPage from './landing-page';
import login from "./login";
import Contact from './contact';
import About from './Component/contacts';
import {Route, NavLink, BrowserRouter} from "react-router-dom";
import './App.css';
import logo from '../src/images/logo-small.png';
import Text from './Component/textfiles';
import Contactlist from './Component/contactlist';

 class header extends Component {
  render() {
    return (
      <header className="App-header ">
      <BrowserRouter>
          <div>
          <nav className="navbar navbar-expand-lg bg-blue navbar-dark">
              <NavLink className="navbar-brand ml-5"to="/Home-page"> <img style={{width: '55px'}} src={logo} alt="Logo"></img></NavLink>
              <button onClick={this.handleClick} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span  className="navbar-toggler-icon"></span>
              </button>
              <div  className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav header ">
             
                    <li className="nav-item">
                    <NavLink className="nav-link" exact to="/Home-page">Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link"  to="/About">About Us</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link"  to="/Contact">Contact Us</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link"  to="/login">User login</NavLink>
                    </li>

                  </ul>
              </div>
        </nav>
          <div className="content">
            <Route path="/" exact  component={LandingPage} />
            <Route path="/Home-page" exact  component={LandingPage} />
            <Route  path='/About'>
                <Route path="/About" exact component={About} />
                {/* <Route path='/About/textfiles:topicId' component={Topic} /> */}
                <Route path="/About/textfiles" component={Text} />
                <Route path="/About/Contactlist" component={Contactlist} />
            </Route>
            
            <Route path="/login" component={login} />
            <Route path="/Contact" component={Contact} />
           
          </div>
          </div>
          </BrowserRouter>
       </header>
    )
  }
}
export default header;