import React, { Component } from 'react'
// import Test from './test';
import AddContact from './addContact';
// import Contactlist from './contactlist';
import '../App.css';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
// import {Route, NavLink, BrowserRouter} from "react-router-dom";

export default class contacts extends Component {
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
        //  const { contacts } = this.state;



        return (
            <React.Fragment>

                <div className="container col-lg-12  mt-5 mb-5">
                    {/* <Link  to="/About/textfiles" className="nav-link"> <Button className="" variant="contained" color="secondary" >Contact Info</Button></Link> */}

                    <Link style={{ float: "right" }} to="/About/Contactlist" className="nav-link"> <Button className="" variant="contained" color="secondary" >Contact List</Button></Link>

                </div>

                <AddContact text="Add Contacts" Name="User name" Age="User age" Address="Address" />
                {/* <AddContact text="Add Product"  Name="Product name" Age="Product Prices" Address="Product Discrptions"/> */}
                {/* <AddContact text="Add List"  Name="List name" Age="Product List" Address="Product Discrptions"/> */}
                {/* <div className="container row mt-5 mb-5">
                {contacts.map( (contact,index) => (
                    <Test
                    key={contact.id}
                    contact={contact}
                    deleteClick={this.deleteContact.bind(this,contact.id)}
                    />
                ))}
            </div> */}
            </React.Fragment>
        )
    }
}
