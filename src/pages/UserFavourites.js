import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { fetchUserInfo } from "../services/api";
import "../App.css";
import FavouriteCard from '../components/FavouriteCard'

export default class UserFavourites extends React.Component {
  render() {
    const {
      users_name,
      user,
      username,
      userFavourites,
      deleteFavouriteFromServer,
      setUserFavourites
    } = this.props;

    return (
      <div>
        <h1>
          <strong>{user.username}'s Favourites</strong>
        </h1>
        <div className="restaurant-list">
        {userFavourites.map(favourite => (
            <FavouriteCard
              setUserFavourites={setUserFavourites}
              deleteFavouriteFromServer={deleteFavouriteFromServer}
              user={user}
              favourite={favourite}
            />
          ))}
      </div>

      </div>
    );
  }
}
