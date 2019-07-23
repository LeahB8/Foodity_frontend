import React, { Component } from 'react'

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { createUser } from '../services/api'
import '../App.css'

 
export default class SignUpForm extends Component {

  state = {
    username: '',
    password: ''
  }

  handleSubmit = event => {
  event.preventDefault()
  if (event.target.password.value.length >= 6) {
  createUser(event.target.username.value, event.target.password.value)
    .then(() => alert("User added"))
  this.props.history.push('/signin')
  } else {
    alert("Please choose a password with 6 or more characters.")
  }
  }

  render () {
    // const { username, password } = this.state
    const { handleSubmit } = this

    return (
      <div className="signup-container">
      <div className="signup-card" >
        <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>

            <TextField
                label="Choose a Username"
                margin="normal"
                name='username'
            />
            <br></br>
            <TextField
                label="Choose a Password"
                margin="normal"
                name='password'
                type='password'
            />

            <br/><br/>
            <Button type="submit" variant='contained' color='primary'>
            SUBMIT
            </Button>

        </form>
    </div>
  </div>
    )
  }
}