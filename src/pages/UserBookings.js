import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { fetchUserInfo } from "../services/api";
import "../App.css";
import BookingCardWrapper from "../components/BookingCardWrapper";

export default class UserBookings extends React.Component {
  render() {
    const {
      user,
      userBookings,
      deleteBookingFromServer,
      setUserBookings,
      fetchRestaurantsFromServer,
      savedRestaurants,
      loggedIn,
      bookingTimes,
      addFave,
      addWishlist
    } = this.props;

    return (
      <div className="content-area">
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
              addFave={addFave}
              addWishlist={addWishlist}
            />
          ))}
        </div>
      </div>
    );
  }
}
