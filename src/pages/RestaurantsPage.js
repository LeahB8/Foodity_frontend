import React from "react";
import "../App.css";
import RestaurantList from "../components/RestaurantList";

export default class RestaurantsPage extends React.Component {
  render() {
    const {
      users_name,
      user,
      username,
      userFavourites,
      deleteFavouriteFromServer,
      setUserFavourites,
      savedRestaurants,
      fetchRestaurantsFromServer,
      restaurantData,
      loggedIn,
      addWishlist,
      addFave
    } = this.props;

    return (
      <div>
        <h1>
          <strong>{user.username}'s Searched Restaurants</strong>
        </h1>
        <div className="restaurant-list" />
        <RestaurantList
          restaurantData={restaurantData}
          loggedIn={loggedIn}
          addFave={addFave}
          addWishlist={addWishlist}
        />
      </div>
    );
  }
}
