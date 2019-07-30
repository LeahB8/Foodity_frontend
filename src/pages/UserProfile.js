import React from "react";
import "../App.css";
import SearchComponent from "../components/SearchComponent";
import ProgressBar from "../components/ProgressBar";

export default class UserProfile extends React.Component {
  state = {
    percentage: 0
  };

  render() {
    const {
      user,
      changeCoordinatesState,
      coordinates,
      restaurantData,
      populateListWithData,
      addRestaurantToFavourites,
      addRestaurantToWishlists,
      addRestaurantToBookings,
      loggedIn,
      saveRestaurantToServer,
      savedRestaurants,
      addFave,
      addWishlist,
      populateListWithCollections,
      selectedCityId,
      assignSelectedCityId,
      assignSelectedCityName
    } = this.props;

    return (
      <>
        <div className="welcome-card-container">
          <div className="welcome-card">
            <h1>
              <strong>Welcome back, {user.username}</strong>
            </h1>
            <p>
              Search through the list of cities to find restaurants you want to
              add to your wishlist or select those you want to favourite.
            </p>
            <p>
              Explore your own city's hidden gems or plan for upcoming holidays.
            </p>
            <p>You can also book any restaurant that inspires you.</p>
          </div>
        </div>

        <ProgressBar percentage={this.state.percentage} />
        <div className="search-restaurants">
          <div>
            <SearchComponent
              {...this.props}
              changeCoordinatesState={changeCoordinatesState}
              coordinates={coordinates}
              populateListWithData={populateListWithData}
              populateListWithCollections={populateListWithCollections}
              loggedIn={loggedIn}
              user={user}
              restaurantData={restaurantData}
              addRestaurantToFavourites={addRestaurantToFavourites}
              addRestaurantToWishlists={addRestaurantToWishlists}
              addRestaurantToBookings={addRestaurantToBookings}
              saveRestaurantToServer={saveRestaurantToServer}
              savedRestaurants={savedRestaurants}
              addFave={addFave}
              addWishlist={addWishlist}
              selectedCityId={selectedCityId}
              assignSelectedCityId={assignSelectedCityId}
              assignSelectedCityName={assignSelectedCityName}
            />
          </div>
        </div>
      </>
    );
  }
}
