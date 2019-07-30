import React, { Component } from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { createUser, signin } from "../services/api";
import "../App.css";
import swal from "sweetalert";

export default class SignUpForm extends Component {
  state = {
    username: "",
    password: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    if (event.target.password.value.length >= 6) {
      createUser(this.state.username, this.state.password)
        .then(() =>
          swal({
            title: "User added",
            icon: "success",
            timer: 1500,
            showConfirmationButton: false
          })
        )
        .then(() => {
          return signin(this.state.username, this.state.password).then(data => {
            if (data.error) {
              swal(data.error);
            } else {
              this.props.signinAndSetToken(data);
              this.setState({ username: "", password: "" });
              this.props.history.push("/profile");
            }
          });
        });
    } else {
      swal({
        title: "Please choose a password with 6 or more characters.",
        icon: "warning"
      });
    }
  };

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  render() {
    const { username, password } = this.state;
    const { handleChange, handleSubmit } = this;

    return (
      <div className="content-area">
      <div className="signup-container">
        <div className="signup-card">
          <form onSubmit={handleSubmit}>
            <h3>Sign Up</h3>

            <TextField
              label="Choose a Username"
              margin="normal"
              name="username"
              value={username}
              onChange={handleChange}
            />
            <br />
            <TextField
              label="Choose a Password"
              margin="normal"
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
            />

            <br />
            <br />
            <Button type="submit" variant="contained" color="primary">
              SUBMIT
            </Button>
          </form>
        </div>
      </div>
      </div>
    );
  }
}
