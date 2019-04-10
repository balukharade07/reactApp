import React, { Component } from 'react'
import Test from './test';
// import AddContact from './addContact';
import Dammy from './dammy'
import '../App.css';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
// import {Route, NavLink, BrowserRouter} from "react-router-dom";

export default class contactlist extends Component {
    componentDidMount() {
        document.title = "Logic About"
    }
    constructor () {
        super();
        this.state = {
            contacts: [
                {
                    id: 1,
                    name: "Balu",
                    age: "20",
                    address: "solapur"
                },
                {
                    id: 2,
                    name: "Shri",
                    age: "25",
                    address: "Pune"
                },
                {
                    id: 3,
                    name: "Amit",
                    age: "25",
                    address: "Mohol"
                },
                {
                    id: 4,
                    name: "Sagar",
                    age: "25",
                    address: "Kamathi(B.K)"
                }

            ]
        }

    }

    deleteContact(id) {
        const { contacts } = this.state;
        const newContact = contacts.filter(contact => contact.id !== id);

        this.setState({
            contacts: newContact
        })
    }

    render() {
        const { contacts } = this.state;



        return (
            <React.Fragment>

                <div className="container col-lg-12 mt-5 mb-5">

                    <Link style={{ float: "right" }} to="/About" className="nav-link"> <Button variant="contained" color="secondary" >Add Contact</Button></Link>

                </div>
                <div className="container">
                    <Dammy />
                </div>

                <div className="container row mt-5 mb-5">

                    {contacts.map((contact, index) => (
                        <Test
                            key={contact.id}
                            contact={contact}
                            deleteClick={this.deleteContact.bind(this, contact.id)}
                        />
                    ))}
                </div>

            </React.Fragment>
        )
    }
}
