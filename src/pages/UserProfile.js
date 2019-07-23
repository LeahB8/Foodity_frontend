import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { fetchUserInfo } from "../services/api";
import "../App.css";
import LocationSearchComponent from "../components/LocationSearchComponent";
import MapBox from "../components/MapBox";
import SearchComponent from "../components/SearchComponent";

export default class UserProfile extends React.Component {
  render() {
    const {
      users_name,
      user,
      username,
      userBookings,
      userWishlists,
      userFavourites,
      userReviews,
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
      populateListWithCollections
    } = this.props;

    return (
      <>
        <h1>
          <strong>Welcome back, {user.username}</strong>
        </h1>
        <p>
          Search through the list of cities to find restaurants you want to add
          to your wishlist or select those you want to favourite.
        </p>
        <p>You can also book any restaurant that inspires you.</p>
        <div className="search-restaurants">
          {/*           
          <div>
               
                <MapBox
                changeCoordinatesState={changeCoordinatesState}
                coordinates={coordinates}
            />
                <LocationSearchComponent
                changeCoordinatesState={changeCoordinatesState}
                coordinates={coordinates}
            />
        </div> */}
          <div>
            <SearchComponent
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
            />
          </div>
        </div>
      </>
    );
  }
}
