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
      user
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
            />
            // <div>
            //     <h3>{single.restaurant.name}</h3>
            //     <p>{single.restaurant.cuisines}</p>
            //     <p>{single.restaurant.establishment}</p>
            //     <p>Average cost for two: {single.restaurant.currency}{single.restaurant.average_cost_for_two}</p>
            //     <p>Address: {single.restaurant.location.address}</p>
            //  </div>
          ))}
        </div>
      </div>
    );
  }
}

export default RestaurantList;
