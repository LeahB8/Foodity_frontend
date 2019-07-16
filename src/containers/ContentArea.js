import React from "react";
import "../App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { postUserInfoToServer } from "../services/api";

import SignInForm from "../pages/SignInForm";
import SignUpForm from "../pages/SignUpForm";
import WelcomePage from "../pages/WelcomePage";
import UserProfile from "../pages/UserProfile";

export default class ContentArea extends React.Component {

  render() {
    const {
      signinAndSetToken,
      usersName,
      user,
      userBookings,
      userWishlists,
      userFavourites,
      userReviews
    } = this.props;

    return (
      <div className="background-img">
        <Switch>
          <Route exact path="/" component={WelcomePage} />

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
                key={user.id}
                user={user}
                usersName={usersName}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}