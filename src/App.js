import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  withRouter
} from "react-router-dom";
import "./App.css";
import NavBar from "./containers/NavBar";
import ContentArea from "./containers/ContentArea";
import {
  validate,
  getUserFavourites,
  getUserWishlists,
  getUserBookings,
  fetchUserInfo
} from "./services/api";

const baseUrl = "https://foodity-app.herokuapp.com";

class App extends Component {
  state = {
    user: {},
    username: "",
    users_name: "",
    userBookings: [],
    bookingTimes: [],
    userWishlists: [],
    userFavourites: [],
    userReviews: [],
    loggedIn: false
  };

  componentDidMount() {
    if (localStorage.token) {
      validate().then(data => {
        if (data.error) {
          alert(data.error);
        } else {
          this.signinAndSetToken(data);
        }
      });
    }
  }

  //----------------------- signin and signout -------------------//

  signinAndSetToken = (userObj, redirectToProfile = false) => {
    this.setState({
      user: { ...userObj.user },
      username: userObj.username,
      users_name: userObj.users_name,
      userBookings: [...userObj.user_bookings],
      bookingTimes: [...userObj.bookings],
      userWishlists: [...userObj.user_wishlists],
      userFavourites: [...userObj.user_favourites],
      userReviews: [...userObj.user_reviews],
      loggedIn: true
    });
    if (redirectToProfile) {
      this.props.history.push("/profile");
    }
    localStorage.setItem("token", userObj.token);
  };

  signout = () => {
    this.setState({
      user: {},
      username: "",
      users_name: "",
      userBookings: [],
      bookingTimes: [],
      userWishlists: [],
      userFavourites: [],
      userReviews: [],
      loggedIn: false
    });
    localStorage.removeItem("token");
  };

  //-------------------------- server methods -----------------------//

  //---------------- Favourites -------------------//

  addRestaurantToFavourites = favourite => {
    fetch(baseUrl + "/favourites", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(favourite)
    })
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          userFavourites: [...this.state.userFavourites, data]
        })
      );
  };

  setUserFavourites = user => {
    getUserFavourites(user)
      .then(resp => resp.json())
      .then(data => this.setState({ userFavourites: data }));
  };

  deleteFavouriteFromServer = (user_id, restaurant_id) => {
    return fetch(baseUrl + `/users/favourites/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user_id: user_id, restaurant_id: restaurant_id })
    });
  };

  //---------------- Wishlists -------------------//

  addRestaurantToWishlists = wishlist => {
    fetch(baseUrl + "/wishlists", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(wishlist)
    })
      .then(resp => resp.json())
      .then(data =>
        this.setState({ userWishlists: [...this.state.userWishlists, data] })
      );
  };

  setUserWishlists = user => {
    getUserWishlists(user)
      .then(resp => resp.json())
      .then(data => this.setState({ userWishlists: data }));
  };

  deleteWishlistItemFromServer = (user_id, restaurant_id) => {
    return fetch(baseUrl + `/users/wishlists/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user_id: user_id, restaurant_id: restaurant_id })
    });
  };

  //---------------- Bookings -------------------//

  addRestaurantToBookings = booking => {
    return fetch(baseUrl + "/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(booking)
    });
    // .then(resp => resp.json())
    // .then(data => {
    //   debugger;
    //   this.setState({
    //     userBookings: [...this.state.userBookings, data],
    //     bookingTimes: [this.state.bookingTimes, data]
    //   });
    // });
  };

  setUserBookings = async user => {
    // location.reload();
    let dateTimes = null;
    let booked_restaurants = null;

    dateTimes = await getUserBookings(user);
    booked_restaurants = await validate(user);

    this.setState({
      bookingTimes: dateTimes,
      userBookings: booked_restaurants.user_bookings
    });
  };

  deleteBookingFromServer = (user_id, restaurant_id) => {
    return fetch(baseUrl + `/users/bookings/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user_id: user_id, restaurant_id: restaurant_id })
    });
  };

  //----------------------- render -------------------//

  render() {
    const {
      user,
      users_name,
      username,
      userBookings,
      userWishlists,
      userFavourites,
      userReviews,
      loggedIn,
      bookingTimes
    } = this.state;

    const { history } = this.props;

    return (
      <div className="App">
        <NavBar
          history={history}
          signout={this.signout}
          user={user}
          loggedIn={loggedIn}
          signinAndSetToken={user => this.signinAndSetToken(user, true)}
        />
        <ContentArea
          history={history}
          user={user}
          username={username}
          users_name={users_name}
          userBookings={userBookings}
          userWishlists={userWishlists}
          userFavourites={userFavourites}
          userReviews={userReviews}
          loggedIn={loggedIn}
          bookingTimes={bookingTimes}
          signinAndSetToken={user => this.signinAndSetToken(user, true)}
          changeCoordinatesState={this.changeCoordinatesState}
          addRestaurantToFavourites={this.addRestaurantToFavourites}
          addRestaurantToWishlists={this.addRestaurantToWishlists}
          addRestaurantToBookings={this.addRestaurantToBookings}
          deleteFavouriteFromServer={this.deleteFavouriteFromServer}
          deleteWishlistItemFromServer={this.deleteWishlistItemFromServer}
          deleteBookingFromServer={this.deleteBookingFromServer}
          setUserFavourites={this.setUserFavourites}
          setUserWishlists={this.setUserWishlists}
          setUserBookings={this.setUserBookings}
        />
      </div>
    );
  }
}

export default withRouter(App);
