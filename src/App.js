import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  withRouter
} from "react-router-dom";
import "./App.css";
import ReactDOM from "react-dom";
import NavBar from "./containers/NavBar";
import ContentArea from "./containers/ContentArea";
import { validate } from "./services/api";

class App extends Component {
  state = {
    user: {},
    username: "",
    users_name: "",
    userBookings: [],
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

  signinAndSetToken = userObj => {
    this.setState({
      user: { ...userObj.user },
      username: userObj.username,
      users_name: userObj.users_name,
      userBookings: [...userObj.user_bookings],
      userWishlists: [...userObj.user_wishlists],
      userFavourites: [...userObj.user_favourites],
      userReviews: [...userObj.user_reviews],
      loggedIn: true,
    });
    this.props.history.push("/profile");
    localStorage.setItem("token", userObj.token);
  };

  signout = () => {
    this.setState({ user: {}, username: "", loggedIn: false });
    localStorage.removeItem("token");
  };

    //----------------------- server methods -------------------//


  addRestaurantToFavourites

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
    } = this.state;

    return (
      <div className="App">
        <NavBar
          signout={this.signout}
          user={user}
          loggedIn={loggedIn}
          signinAndSetToken={this.signinAndSetToken}
        />
        <ContentArea
          user={user}
          username={username}
          users_name={users_name}
          userBookings={userBookings}
          userWishlists={userWishlists}
          userFavourites={userFavourites}
          userReviews={userReviews}
          loggedIn={loggedIn}
          signinAndSetToken={this.signinAndSetToken}
          changeCoordinatesState={this.changeCoordinatesState}
        />
      </div>
    );
  }
}

export default withRouter(App);
