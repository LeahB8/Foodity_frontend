import React, { Component } from "react";
import { fetchRestaurantsByCity } from "../services/api";
import RestaurantCard from "./RestaurantCard";

class RestaurantList extends Component {
  render() {
    const {
      restaurantData,
      addRestaurantToFavourites,
      addRestaurantToWishlists,
      addRestaurantToBookings,
      user,
      loggedIn,
      saveRestaurantToServer,
      savedRestaurants,
      addFave,
      addWishlist
    } = this.props;

    return (
      <div className="restaurant-list">
        {restaurantData.map(single => (
          <RestaurantCard
            user={user}
            single={single}
            addRestaurantToFavourites={addRestaurantToFavourites}
            addRestaurantToWishlists={addRestaurantToWishlists}
            addRestaurantToBookings={addRestaurantToBookings}
            loggedIn={loggedIn}
            saveRestaurantToServer={saveRestaurantToServer}
            savedRestaurants={savedRestaurants}
            addFave={addFave}
            addWishlist={addWishlist}
          />
        ))}
      </div>
    );
  }
}

export default RestaurantList;
