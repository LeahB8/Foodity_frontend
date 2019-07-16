import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { fetchUserInfo } from "../services/api";
import "../App.css";


export default class UserProfile extends React.Component {


  render() {
    const {
      usersName,
      user,
      userBookings,
      userWishlists,
      userFavourites,
      userReviews
    } = this.props;

    return (
      <div>
        <h1>
          <strong>Welcome back, {user.usersName}</strong>
        </h1>

  
        </div>
    );
  }
}