import React from "react";
import "../App.css";
import RestaurantList from "../components/RestaurantList";
import ProgressBar from "../components/ProgressBar";

export default class RestaurantsPage extends React.Component {
  state = {
    percentage: 100
  };

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
      addFave,
      collectionsData,
      cuisinesData,
      establishmentsData,
      categoriesData,
      addBooking,
      selectedCityName
    } = this.props;

    return (
      <div className="content-area">
        <h1>
          <strong>
            {loggedIn
              ? `${user.username}'s Searched Restaurants`
              : "Searched Restaurants"}
          </strong>
        </h1>
        <h3>for {selectedCityName}</h3>

        <ProgressBar percentage={this.state.percentage} />

        <div className="restaurant-list" />
        <RestaurantList
          restaurantData={restaurantData}
          loggedIn={loggedIn}
          addFave={addFave}
          addWishlist={addWishlist}
          addBooking={addBooking}
          user={user}
        />
      </div>
    );
  }
}
