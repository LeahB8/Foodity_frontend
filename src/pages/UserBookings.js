import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { fetchUserInfo } from "../services/api";
import "../App.css";

export default class UserProfile extends React.Component {
  render() {
    const {
      users_name,
      user,
      username,
      userBookings,
      userWishlists,
      userFavourites,
      userReviews
    } = this.props;

    return (
      <div>
        <h1>
          <strong>{user.username}'s Bookings</strong>
        </h1>


      </div>
    );
  }
}
