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
      loggedIn,
      bookingTimes

    } = this.props;

    return (
      <div>
        <h1>
          <strong>{user.username}'s Bookings</strong>
        </h1>
        <div className="restaurant-list">
          {userBookings.map(booking => (
            <BookingCardWrapper
              booking={booking}
              bookingTimes={bookingTimes}
              userBookings={userBookings}
              user={user}
              deleteBookingFromServer={deleteBookingFromServer}
              setUserBookings={setUserBookings}
              fetchRestaurantsFromServer={fetchRestaurantsFromServer}
              savedRestaurants={savedRestaurants}
              loggedIn={loggedIn}
            />
          ))}
          {/* {bookingTimes.map(bookingTime => (
            <BookingCardWrapper
              bookingTime={bookingTime}
            />
          ))} */}
        </div>

      </div>
    );
  }
}
