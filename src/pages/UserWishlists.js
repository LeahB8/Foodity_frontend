import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { fetchUserInfo } from "../services/api";
import "../App.css";
import WishlistCardWrapper from "../components/WishlistCardWrapper";

export default class UserWishlists extends React.Component {
  render() {
    const {
      user,
      userWishlists,
      deleteWishlistItemFromServer,
      setUserWishlists,
      savedRestaurants,
      addBooking,
      loggedIn,
      setUserBookings,
      fetchRestaurantsFromServer
    } = this.props;
    return (
      <div className="content-area">
        <h1>
          <strong>{user.username}'s Wishlists</strong>
        </h1>
        {userWishlists.length === 0 ? (
          <p>No restaurants have been added to your wishlist yet.</p>
        ) : (
          <div className="restaurant-list">
            {userWishlists.map(wishlist => (
              <WishlistCardWrapper
                key={wishlist.id}
                setUserWishlists={setUserWishlists}
                deleteWishlistItemFromServer={deleteWishlistItemFromServer}
                user={user}
                wishlist={wishlist}
                savedRestaurants={savedRestaurants}
                userWishlists={userWishlists}
                addBooking={addBooking}
                loggedIn={loggedIn}
                setUserBookings={setUserBookings}
                fetchRestaurantsFromServer={fetchRestaurantsFromServer}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}
