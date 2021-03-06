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
import SearchOptionsPage from "../pages/SearchOptionsPage";

const baseUrl = "https://foodity-app.herokuapp.com";

class ContentArea extends React.Component {
  state = {
    restaurantData: [],
    searchOptionData: [],
    savedRestaurants: [],
    selectedCityId: "",
    selectedCityName: ""
  };

  redirectToWelcomePage = () => {
    this.props.loggedIn
      ? this.props.history.push("/profile")
      : this.props.history.push("/");
  };

  populateListWithData = async data => {
    await this.setState({ restaurantData: data.restaurants });
  };

  populateListWithSearchOptionData = async data => {
    await this.setState({ searchOptionData: data });
  };

  assignSelectedCityId = id => {
    this.setState({ selectedCityId: id });
  };

  assignSelectedCityName = name => {
    this.setState({ selectedCityName: name });
  };

  addFave = async id => {
    let favourite = {
      user_id: this.props.user.id,
      restaurant_api_id: id
    };
    await this.props.addRestaurantToFavourites(favourite);
  };

  addWishlist = async id => {
    let wishlist = {
      user_id: this.props.user.id,
      restaurant_api_id: id
    };
    await this.props.addRestaurantToWishlists(wishlist);
  };

  addBooking = async booking => {
    await this.props.addRestaurantToBookings(booking);
  };

  fetchRestaurantsFromServer = () => {
    fetch(baseUrl + "/restaurants", {
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
      searchOptionData,
      selectedCityName
    } = this.state;

    return (
      <div className="content-area">
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
                assignSelectedCityName={this.assignSelectedCityName}
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
            component={props => (
              <SignUpForm signinAndSetToken={signinAndSetToken} {...props} />
            )}
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
                assignSelectedCityName={this.assignSelectedCityName}
              />
            )}
          />
          <Route
            exact
            path="/bookings"
            render={props => (
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
                addFave={this.addFave}
                addWishlist={this.addWishlist}
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
                setUserBookings={setUserBookings}
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
                setUserBookings={setUserBookings}
              />
            )}
          />
          <Route
            exact
            path="/search/:id"
            component={props => (
              <CitySearchOptions
                redirectToWelcomePage={this.redirectToWelcomePage}
                {...props}
                key={user.id}
                user={user}
                users_name={users_name}
                username={username}
                userFavourites={userFavourites}
                deleteFavouriteFromServer={deleteFavouriteFromServer}
                setUserFavourites={setUserFavourites}
                populateListWithSearchOptionData={
                  this.populateListWithSearchOptionData
                }
                collectionsData={collectionsData}
                cuisinesData={cuisinesData}
                establishmentsData={establishmentsData}
                categoriesData={categoriesData}
                selectedCityId={selectedCityId}
                assignSelectedCityId={this.assignSelectedCityId}
                assignSelectedSearchCategory={this.assignSelectedSearchCategory}
                selectedSearchCategory={selectedSearchCategory}
                selectedCityName={selectedCityName}
              />
            )}
          />
          <Route
            exact
            path="/restaurants/:id"
            component={props => (
              <RestaurantsPage
                redirectToWelcomePage={this.redirectToWelcomePage}
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
                selectedCityName={selectedCityName}
                setUserBookings={setUserBookings}
                setUserFavourites={setUserFavourites}
                setUserWishlists={setUserWishlists}
                fetchRestaurantsFromServer={this.fetchRestaurantsFromServer}
              />
            )}
          />
          <Route
            exact
            path="/options/:id"
            component={props => (
              <SearchOptionsPage
                redirectToWelcomePage={this.redirectToWelcomePage}
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
                populateListWithSearchOptionData={
                  this.populateListWithSearchOptionData
                }
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
                selectedCityName={selectedCityName}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(ContentArea);
