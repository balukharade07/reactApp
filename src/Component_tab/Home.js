import React, { Component } from "react";
import Demo from "./demo";
import Button from "@material-ui/core/Button";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      age: "",
      email: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitContact = e => {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      username: "",
      password: "",
      age: "",
      email: ""
    });
  };
  render() {
    const formElements = [
      {
        label: "Username",
        type: "text",
        autoComplete: "OFF",
        className: "form-control",
        placeholder: "Username",
        name: "username",
        value: this.state.username,
        required: true
      },
      {
        label: "Age",
        type: "number",
        autoComplete: "OFF",
        className: "form-control",
        placeholder: "Age",
        name: "age",
        value: this.state.age,
        required: true
      },
      {
        label: "Email",
        type: "email",
        autoComplete: "OFF",
        className: "form-control",
        placeholder: "Email Address",
        name: "email",
        value: this.state.email,
        required: true
      },
      {
        label: "Password",
        type: "password",
        autoComplete: "OFF",
        className: "form-control",
        placeholder: "Password",
        name: "password",
        value: this.state.password,
        required: true
      }
    ];

    return (
      <div>
        <h2>Homw is work</h2>

        <form onSubmit={this.onSubmitContact}>
          <Demo formElements={formElements} onChange={this.onChange} />
          <div className="text-center">
            <Button
              type="submit"
              className="col-lg-4 mt-5"
              id="primary"
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
