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
      savedRestaurants
    } = this.props;

    return (
      <div>
        <h2>Restaurants</h2>
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
            />
          ))}
        </div>
      </div>
    );
  }
}

export default RestaurantList;
