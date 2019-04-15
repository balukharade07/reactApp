import React, { Component } from 'react'
import LandingPage from './landing-page';
import login from "./login";
import Contact from './contact';
import About from './Component/contacts';
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import './App.css';
import logo from '../src/images/logo-small.png';
import Text from './Component/textfiles';
import Contactlist from './Component/contactlist';
import { Navbar, Nav } from 'react-bootstrap';
import Api from './api';
import Show from './showContact';



class header extends Component {


  render() {
    return (
      <header className="App-header ">
        <BrowserRouter>
          <Navbar collapseOnSelect expand="lg" bg="blue" variant="dark">
            <NavLink className="navbar-brand ml-5" to="/Home-page"> <img style={{ width: '55px' }} src={logo} alt="Logo"></img></NavLink>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <NavLink className="nav-link" exact to="/Home-page">Home</NavLink>
                <NavLink className="nav-link" to="/About">About Us</NavLink>
                <NavLink className="nav-link" to="/Contact">Contact Us</NavLink>
                <NavLink className="nav-link" to="/Api">List Component</NavLink>
              </Nav>
              <Nav className="mr-5">
                <NavLink className="nav-link" to="/login">User login</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <div className="content">
            <Route path="/" exact component={LandingPage} />
            <Route path="/Home-page" component={LandingPage} />

            <Route path="/Api">
              <Route path="/Api" exact component={Api} />
              <Route path="/Api/show/:id" component={Show} />
            </Route>

            <Route path='/About'>
              <Route path="/About" exact component={About} />
              <Route path="/About/textfiles" component={Text} />
              <Route path="/About/Contactlist" component={Contactlist} />
            </Route>
            <Route path="/login" component={login} />
            <Route path="/Contact" component={Contact} />

          </div>

        </BrowserRouter>
      </header>
    )
  }
}
export default header;