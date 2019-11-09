import React from "react";
import "../App.css";
import RestaurantList from "../components/RestaurantList";
import ProgressBar from "../components/ProgressBar";
import Loading from "react-loading-animation";

export default class RestaurantsPage extends React.Component {
  state = {
    percentage: 100
  };

  render() {
    const {
      user,
      restaurantData,
      loggedIn,
      addWishlist,
      addFave,
      addBooking,
      selectedCityName,
      setUserBookings,
      setUserFavourites,
      setUserWishlists,
      redirectToWelcomePage,
      fetchRestaurantsFromServer
    } = this.props;

    if (!restaurantData) {
      return <Loading />;
    }

    return (
      <div className="content-area">
        <h1>
          <strong>
            {loggedIn
              ? `${user.username}'s Searched Restaurants`
              : "Searched Restaurants"}
          </strong>
        </h1>
        <h2>
          for{" "}
          {selectedCityName === "" ? redirectToWelcomePage() : selectedCityName}
        </h2>

        <ProgressBar percentage={this.state.percentage} />

        <div className="restaurant-list" />
        <RestaurantList
          restaurantData={restaurantData}
          loggedIn={loggedIn}
          addFave={addFave}
          addWishlist={addWishlist}
          addBooking={addBooking}
          user={user}
          setUserBookings={setUserBookings}
          setUserFavourites={setUserFavourites}
          setUserWishlists={setUserWishlists}
          fetchRestaurantsFromServer={fetchRestaurantsFromServer}
        />
      </div>
    );
  }
}
