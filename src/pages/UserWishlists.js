import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { fetchUserInfo } from "../services/api";
import "../App.css";
import WishlistCard from '../components/WishlistCard'


export default class UserWishlists extends React.Component {
  render() {
    const {
      users_name,
      user,
      username,
      userBookings,
      userWishlists,
      userFavourites,
      userReviews,
      deleteWishlistFromServer,
      setUserWishlists
    } = this.props;

    return (
      <div>
        <h1>
          <strong>{user.username}'s Wishlists</strong>
        </h1>
        {userWishlists.map(wishlist => (
            <WishlistCard
              setUserWishlists={setUserWishlists}
              deleteWishlistFromServer={deleteWishlistFromServer}
              user={user}
              wishlist={wishlist}
            />
          ))}
      </div>
    );
  }
}
