import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { fetchUserInfo } from "../services/api";
import "../App.css";
import WishlistCardWrapper from "../components/WishlistCardWrapper";

export default class UserWishlists extends React.Component {
  render() {
    const {
      users_name,
      user,
      username,
      userWishlists,
      deleteWishlistItemFromServer,
      setUserWishlists,
      savedRestaurants,
      addBooking,
      loggedIn
    } = this.props;
    return (
      <div>
        <h1>
          <strong>{user.username}'s Wishlists</strong>
        </h1>
        <div className="restaurant-list">
          {userWishlists.map(wishlist => (
            <WishlistCardWrapper
              setUserWishlists={setUserWishlists}
              deleteWishlistItemFromServer={deleteWishlistItemFromServer}
              user={user}
              // city={wishlist.location.city}
              wishlist={wishlist}
              savedRestaurants={savedRestaurants}
              userWishlists={userWishlists}
              addBooking={addBooking}
              loggedIn={loggedIn}
            />
          ))}
        </div>
      </div>
    );
  }
}
