import React, { Component } from 'react';

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
        fetch("https://jsonplaceholder.typicode.com/users/1/todos")
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
        alert(id)
    }


  render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
          return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
          return <div>Loading...</div>;
      } else {
          return (
              <ul className="container mt-5">
                  {items.map((item,index) => (
                      <li key={index} onClick={this.singleShow.bind(this, item.id)}>
                         {item.id}
                          {item.title}
                      </li>
                  ))}
              </ul>
          );
      }
  }
  }
