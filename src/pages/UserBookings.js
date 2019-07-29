import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { fetchUserInfo } from "../services/api";
import "../App.css";
import BookingCardWrapper from "../components/BookingCardWrapper";

export default class UserBookings extends React.Component {
  render() {
    const {
      users_name,
      user,
      username,
      userBookings,
      deleteBookingFromServer,
      setUserBookings,
      fetchRestaurantsFromServer,
      savedRestaurants,
      loggedIn
    } = this.props;

    return (
      <div>
        <h1>
          <strong>{user.username}'s Bookings</strong>
        </h1>
        {userBookings.map(booking => (
          <BookingCardWrapper
            booking={booking}
            time={booking.time}
            date={booking.date}
            userBookings={userBookings}
            user={user}
            deleteBookingFromServer={deleteBookingFromServer}
            setUserBookings={setUserBookings}
            fetchRestaurantsFromServer={fetchRestaurantsFromServer}
            savedRestaurants={savedRestaurants}
            loggedIn={loggedIn}

          />
        ))}

      </div>
    );
  }
}
