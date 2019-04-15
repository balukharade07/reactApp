import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default class showContact extends Component {

    constructor (props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            itemsNew: []
        };
    }
    componentDidMount() {
        const newId = this.props.match.params.id;
        fetch("https://jsonplaceholder.typicode.com/users/"+newId)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        itemsNew: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }


    render() {

        const { error, isLoaded, itemsNew } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="container mt-5 mb-5">
                    <Link to={'/Api'} className="nav-link"> <Button style={{ float: "right" }} className="" variant="contained" color="primary" >Contact List</Button></Link>
                    <div className="shadow  mb-4 bg-white">

                        <p>User Id:- {itemsNew.id}</p>
                        <p>Name:- {itemsNew.name}</p>
                        <p>Email Address:- {itemsNew.email}</p>
                        <p>User address :- {itemsNew.address.street}</p>
                        <p>City :- {itemsNew.address.city}</p>
                        <p>Phone:- {itemsNew.phone}</p>
                        <p>Website:- {itemsNew.website}</p>
                        <p>company Name:- {itemsNew.company.name}</p>
                    </div>

                </div>
            );
        }
    }
}
