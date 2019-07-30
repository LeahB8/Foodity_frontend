import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import swal from 'sweetalert';
import { signin } from "../services/api";

export default class SignInForm extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleSubmit = (e) => {
    e.preventDefault()
    signin(this.state.username, this.state.password)
      .then(data => {
        if (data.error) {
          swal(data.error);
        } else {
          this.props.signinAndSetToken(data);
          this.setState({ username: "", password: "" });
        }
      });
  };

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  render() {
    const { username, password } = this.state;
    const { handleChange, handleSubmit } = this;

    return (
      <div className="signup-container">
        <div className="signup-card">
          <form onSubmit={handleSubmit}>
            <h3>Sign In</h3>

            <TextField
              id="usernameInput"
              label="Username"
              value={username}
              onChange={handleChange}
              margin="normal"
              name="username"
            />
            <br />
            <TextField
              id="passwordInput"
              label="Password"
              value={password}
              onChange={handleChange}
              margin="normal"
              name="password"
              type="password"
            />
            <br />
            <br />
            <Button type="submit" variant="contained" color="primary">
              SUBMIT
          </Button>
          </form>
        </div>
      </div>
    );
  }
}
