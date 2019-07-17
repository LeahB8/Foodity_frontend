import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { fetchUserInfo } from "../services/api";
import "../App.css";
import LocationSearchComponent from "../components/LocationSearchComponent";
import MapBox from "../components/MapBox";
import SearchComponent from "../components/SearchComponent";
import RestaurantList from '../components/RestaurantList'

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
      populateListWithData
    } = this.props;

    return (
      <div>
        <h1>
          <strong>Welcome back, {user.username}</strong>
        </h1>
        {/* <MapBox
        changeCoordinatesState={changeCoordinatesState}
        coordinates={coordinates}
      /> */}
      <SearchComponent
        changeCoordinatesState={changeCoordinatesState}
        coordinates={coordinates}
        populateListWithData={populateListWithData}

      />
     <RestaurantList restaurantData={restaurantData}/>
      {/* <LocationSearchComponent
        changeCoordinatesState={changeCoordinatesState}
        coordinates={coordinates}
      /> */}
      </div>
    );
  }
}
