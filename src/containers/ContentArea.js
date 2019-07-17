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


class ContentArea extends React.Component {

    state = {
        restaurantData: [],
        coordinates: {
            long: '',
            lat: ''
          }
    }


    changeCoordinatesState = (event) => {
        this.setState({ 
            coordinates: {
                long: event.coordinates.lng,
                lat: event.coordinates.lat
        }})
      }

      populateListWithData = (data) => {
          debugger
        this.setState({ restaurantData: data.restaurants })
      }

    //   componentDidUpdate(){
    //     this.populateListWithData()
    //   }


  render() {
    const {
      signinAndSetToken,
      users_name,
      username,
      user,
      userBookings,
      userWishlists,
      userFavourites,
      userReviews
    } = this.props;

    const { coordinates, restaurantData } = this.state

    return (
      <div className="background-img">
        <Switch>
          <Route
            exact
            path="/"
            component={props => (
            <WelcomePage {...props} coordinates={coordinates} 
            changeCoordinatesState={this.changeCoordinatesState}
            restaurantData={restaurantData}
            populateListWithData={this.populateListWithData}
            />)}
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
                key={user.id}
                user={user}
                users_name={users_name}
                username={username}
                changeCoordinatesState={this.changeCoordinatesState}
                coordinates={coordinates}
                restaurantData={restaurantData}
                populateListWithData={this.populateListWithData}

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
                />
              )}
              />
        </Switch>
      </div>
    );
  }
}

export default withRouter(ContentArea);
