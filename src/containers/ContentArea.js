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

class ContentArea extends React.Component {
  state = {
    restaurantData: [],
    collectionsData: [],
    savedRestaurants: [],
    coordinates: {
      long: "",
      lat: ""
    }
  };

  changeCoordinatesState = event => {
    this.setState({
      coordinates: {
        long: event.coordinates.lng,
        lat: event.coordinates.lat
      }
    });
  };

  populateListWithData = async data => {
    // debugger
    await this.setState({ restaurantData: data.restaurants });
  };

  populateListWithCollections = data => {
    this.setState({ collectionsData: data });
  };

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

  // saveRestaurantToServer = restaurant => {
  //   fetch("http://localhost:3001/restaurants", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(restaurant)
  //   })
  //     .then(resp => resp.json())
  //     .then(data => {
  //       this.setState({
  //         savedRestaurants: [...this.state.savedRestaurants],
  //         data
  //       });
  //     });
  // };

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
      setUserBookings
    } = this.props;

    const {
      coordinates,
      restaurantData,
      savedRestaurants,
      collectionsData
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
                user={user}
                users_name={users_name}
                username={username}
                userWishlists={userWishlists}
                deleteWishlistItemFromServer={deleteWishlistItemFromServer}
                setUserWishlists={setUserWishlists}
                fetchRestaurantsFromServer={this.fetchRestaurantsFromServer}
                savedRestaurants={savedRestaurants}
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
                users_name={users_name}
                username={username}
                userFavourites={userFavourites}
                deleteFavouriteFromServer={deleteFavouriteFromServer}
                setUserFavourites={setUserFavourites}
                fetchRestaurantsFromServer={this.fetchRestaurantsFromServer}
                savedRestaurants={savedRestaurants}
              />
            )}
          />
          <Route
            exact
            path="/search"
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
              />
            )}
          />
          <Route
            exact
            path="/restaurants"
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
                populateListWithCollections={this.populateListWithCollections}
                collectionsData={collectionsData}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(ContentArea);
