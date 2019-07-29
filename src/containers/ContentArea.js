import React from "react";
import "../App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  withRouter
} from "react-router-dom";
import { postUserInfoToServer } from "../services/api";

import SignInForm from "../pages/SignInForm";
import SignUpForm from "../pages/SignUpForm";
import WelcomePage from "../pages/WelcomePage";
import UserProfile from "../pages/UserProfile";
import UserBookings from "../pages/UserBookings";
import UserWishlists from "../pages/UserWishlists";
import UserFavourites from "../pages/UserFavourites";
import CitySearchOptions from "../pages/CitySearchOptions";
import RestaurantsPage from "../pages/RestaurantsPage";
import SearchOptionsPage from "../pages/SearchOptionsPage"


class ContentArea extends React.Component {
  state = {
    restaurantData: [],
    searchOptionData: [],
    // collectionsData: [],
    // cuisinesData: [],
    // establishmentsData: [],
    // categoriesData: [],
    savedRestaurants: [],
    selectedCityId: '',
    // selectedSearchCategory: ''
  };

 

  populateListWithData = async data => {
    await this.setState({ restaurantData: data.restaurants });
  };

  populateListWithSearchOptionData = async data => {
    await this.setState({ searchOptionData: data });
  };

  assignSelectedCityId = id => {
    this.setState({ selectedCityId: id })
  }

  addFave = id => {
    let favourite = {
      user_id: this.props.user.id,
      restaurant_api_id: id
    };
    // if (this.props.userFavourites.filter(faverestaurant => faverestaurant.id !== favourite.restaurant_id  ))
    this.props.addRestaurantToFavourites(favourite);
    // .then(alert("Restaurant Favourited"));
  };

  addWishlist = id => {
    let wishlist = {
      user_id: this.props.user.id,
      restaurant_api_id: id
    };
    // if (this.props.userFavourites.filter(faverestaurant => faverestaurant.id !== favourite.restaurant_id  ))
    this.props.addRestaurantToWishlists(wishlist);
    // .then(alert("Restaurant Favourited"));
  };

  addBooking = booking => {
    this.props.addRestaurantToBookings(booking)
  }

  fetchRestaurantsFromServer = () => {
    fetch("http://localhost:3001/restaurants", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          savedRestaurants: data
        });
      });
  };

  componentDidMount() {
    this.fetchRestaurantsFromServer();
  }

  render() {
    const {
      signinAndSetToken,
      users_name,
      username,
      user,
      userBookings,
      userWishlists,
      userFavourites,
      userReviews,
      addRestaurantToFavourites,
      addRestaurantToWishlists,
      addRestaurantToBookings,
      loggedIn,
      deleteFavouriteFromServer,
      deleteWishlistItemFromServer,
      deleteBookingFromServer,
      setUserFavourites,
      setUserWishlists,
      setUserBookings,
      bookingTimes

    } = this.props;

    const {
      coordinates,
      restaurantData,
      savedRestaurants,
      collectionsData,
      cuisinesData,
      establishmentsData,
      categoriesData,
      selectedCityId,
      selectedSearchCategory,
      searchOptionData
    } = this.state;

    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            component={props => (
              <WelcomePage
                {...props}
                loggedIn={loggedIn}
                coordinates={coordinates}
                changeCoordinatesState={this.changeCoordinatesState}
                restaurantData={restaurantData}
                populateListWithData={this.populateListWithData}
                populateListWithCollections={this.populateListWithCollections}
                collectionsData={collectionsData}
                selectedCityId={selectedCityId}
                assignSelectedCityId={this.assignSelectedCityId}
              />
            )}
          />

          <Route
            exact
            path="/signin"
            component={props => (
              <SignInForm signinAndSetToken={signinAndSetToken} {...props} />
            )}
          />
          <Route
            exact
            path="/signup"
            component={props => <SignUpForm {...props} />}
          />
          <Route
            exact
            path="/profile"
            component={props => (
              <UserProfile
                {...props}
                loggedIn={loggedIn}
                key={user.id}
                user={user}
                users_name={users_name}
                username={username}
                changeCoordinatesState={this.changeCoordinatesState}
                coordinates={coordinates}
                restaurantData={restaurantData}
                populateListWithData={this.populateListWithData}
                addRestaurantToFavourites={addRestaurantToFavourites}
                addRestaurantToWishlists={addRestaurantToWishlists}
                addRestaurantToBookings={addRestaurantToBookings}
                saveRestaurantToServer={this.saveRestaurantToServer}
                savedRestaurants={savedRestaurants}
                addFave={this.addFave}
                addWishlist={this.addWishlist}
                populateListWithCollections={this.populateListWithCollections}
                collectionsData={collectionsData}
                selectedCityId={selectedCityId}
                assignSelectedCityId={this.assignSelectedCityId}
                addBooking={this.addBooking}
                bookingTimes={bookingTimes}

              />
            )}
          />
          <Route
            exact
            path="/bookings"
            component={props => (
              <UserBookings
                {...props}
                key={user.id}
                loggedIn={loggedIn}
                bookingTimes={bookingTimes}
                user={user}
                users_name={users_name}
                username={username}
                userBookings={userBookings}
                deleteBookingFromServer={deleteBookingFromServer}
                setUserBookings={setUserBookings}
                fetchRestaurantsFromServer={this.fetchRestaurantsFromServer}
                savedRestaurants={savedRestaurants}
              />
            )}
          />
          <Route
            exact
            path="/wishlists"
            component={props => (
              <UserWishlists
                {...props}
                key={user.id}
                loggedIn={loggedIn}

                user={user}
                users_name={users_name}
                username={username}
                userWishlists={userWishlists}
                deleteWishlistItemFromServer={deleteWishlistItemFromServer}
                setUserWishlists={setUserWishlists}
                fetchRestaurantsFromServer={this.fetchRestaurantsFromServer}
                savedRestaurants={savedRestaurants}
                addBooking={this.addBooking}

              />
            )}
          />
          <Route
            exact
            path="/favourites"
            component={props => (
              <UserFavourites
                {...props}
                key={user.id}
                user={user}
                loggedIn={loggedIn}

                users_name={users_name}
                username={username}
                userFavourites={userFavourites}
                deleteFavouriteFromServer={deleteFavouriteFromServer}
                setUserFavourites={setUserFavourites}
                fetchRestaurantsFromServer={this.fetchRestaurantsFromServer}
                savedRestaurants={savedRestaurants}
                addBooking={this.addBooking}

              />
            )}
          />
          <Route
            exact
            path="/search/:id"
            component={props => (
              <CitySearchOptions
                {...props}
                key={user.id}
                user={user}
                users_name={users_name}
                username={username}
                userFavourites={userFavourites}
                deleteFavouriteFromServer={deleteFavouriteFromServer}
                setUserFavourites={setUserFavourites}
                populateListWithSearchOptionData={this.populateListWithSearchOptionData}
                collectionsData={collectionsData}
                cuisinesData={cuisinesData}
                establishmentsData={establishmentsData}
                categoriesData={categoriesData}
                selectedCityId={selectedCityId}
                assignSelectedCityId={this.assignSelectedCityId}
                assignSelectedSearchCategory={this.assignSelectedSearchCategory}
                selectedSearchCategory={selectedSearchCategory}
              />
            )}
          />
          <Route
            exact
            path="/restaurants/:id"
            component={props => (
              <RestaurantsPage
                {...props}
                loggedIn={loggedIn}
                key={user.id}
                user={user}
                users_name={users_name}
                username={username}
                changeCoordinatesState={this.changeCoordinatesState}
                coordinates={coordinates}
                restaurantData={restaurantData}
                populateListWithData={this.populateListWithData}
                addRestaurantToFavourites={addRestaurantToFavourites}
                addRestaurantToWishlists={addRestaurantToWishlists}
                addRestaurantToBookings={addRestaurantToBookings}
                saveRestaurantToServer={this.saveRestaurantToServer}
                savedRestaurants={savedRestaurants}
                addFave={this.addFave}
                addWishlist={this.addWishlist}
                addBooking={this.addBooking}
                populateListWithCollections={this.populateListWithCollections}
                collectionsData={collectionsData}
                cuisinesData={cuisinesData}
                establishmentsData={establishmentsData}
                categoriesData={categoriesData}
                selectedCityId={selectedCityId}
                assignSelectedCityId={this.assignSelectedCityId}

              />
            )}
          />
          <Route
            exact
            path="/options/:id"
            component={props => (
              <SearchOptionsPage
                {...props}
                loggedIn={loggedIn}
                key={user.id}
                user={user}
                users_name={users_name}
                username={username}
                changeCoordinatesState={this.changeCoordinatesState}
                coordinates={coordinates}
                restaurantData={restaurantData}
                populateListWithData={this.populateListWithData}
                populateListWithSearchOptionData={this.populateListWithSearchOptionData}
                addRestaurantToFavourites={addRestaurantToFavourites}
                addRestaurantToWishlists={addRestaurantToWishlists}
                addRestaurantToBookings={addRestaurantToBookings}
                saveRestaurantToServer={this.saveRestaurantToServer}
                savedRestaurants={savedRestaurants}
                addFave={this.addFave}
                addWishlist={this.addWishlist}
                populateListWithCollections={this.populateListWithCollections}
                collectionsData={collectionsData}
                cuisinesData={cuisinesData}
                establishmentsData={establishmentsData}
                categoriesData={categoriesData}
                selectedCityId={selectedCityId}
                searchOptionData={searchOptionData}
                assignSelectedCityId={this.assignSelectedCityId}
                assignSelectedSearchCategory={this.assignSelectedSearchCategory}
                selectedSearchCategory={selectedSearchCategory}

              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(ContentArea);
