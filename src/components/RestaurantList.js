import React, { Component } from "react";
import { fetchRestaurantsByCity } from "../services/api";
import RestaurantCard from "./RestaurantCard";

class RestaurantList extends Component {

  // state = {
  //   location: {},
  //   featured_image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
  // };

  // componentDidMount() {
  //   this.setState(this.props.restaurantData)
  // }


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
            single={single.restaurant}
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
