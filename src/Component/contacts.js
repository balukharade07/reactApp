import React, { Component } from 'react'
import Test from './test';
import AddContact from './addContact';
import '../App.css';

export default class contacts extends Component {
    componentDidMount(){
        document.title = "Logic About"
      } 
    constructor(){
        super();
        this.state ={
            contacts:[
                {
                    id:1,
                    name:"Balu",
                    age:"20",
                    address:"solapur"
                },
                {
                    id:2,
                    name:"Shri",
                    age:"25",
                    address:"Pune"
                },
                {
                    id:3,
                    name:"Amit",
                    age:"25",
                    address:"Mohol"
                },
                {
                    id:4,
                    name:"Sagar",
                    age:"25",
                    address:"Kamathi(B.K)"
                }
    
            ]
        }
       
    }

    deleteContact(id){
        const { contacts } = this.state;
        const newContact = contacts.filter(contact => contact.id !== id);

        this.setState({
            contacts:newContact
        })
    }

  render() {
     const { contacts } = this.state;
     let adminBar;
     let adminBar1;
     let isAdmin = true;
     if(isAdmin)
     {
         adminBar =  <AddContact text="Add Contacts"  Name="User name" Age="User age" Address="Address"/>;
         adminBar1 =  <AddContact text="Add Product"  Name="Product name" Age="Product Prices" Address="Product Discrptions"/>;
     }
     return (
            <React.Fragment>
                {adminBar}
                {adminBar1}
                <div className="container row mt-5 mb-5">
                 {contacts.map( (contact,index) => (
                    <Test 
                    key={contact.id} 
                    contact={contact} 
                    deleteClick={this.deleteContact.bind(this,contact.id)}
                    />               
                ))}
            </div>
            </React.Fragment>
    )
  }
}
