import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default class api extends Component {
    constructor (props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users/")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
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

    singleShow(id) {
    }

  render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
          return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
          return <div>Loading...</div>;
      } else {
          return (
              <div className="container row mt-5 mb-5">
                {items.map((item,index) => (
                    <div className="col-lg-4" key={index}>
                        <div className="shadow  mb-4 bg-white"  onClick={this.singleShow.bind(this, item.id)}>
                            <p>{item.name}</p>
                            <p>{item.email}</p>
                            <Link to={'/Api/show/'+ item.id} className="nav-link"> <Button className="" variant="contained" color="secondary" >Contact View</Button></Link>
                        </div>
                    </div>
                ))}
              </div>
          );
      }
    }
  }
