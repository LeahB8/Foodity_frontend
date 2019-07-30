import React from "react";
import "../App.css";
import FavouriteCardWrapper from "../components/FavouriteCardWrapper";

export default class UserFavourites extends React.Component {
  render() {
    const {
      users_name,
      user,
      username,
      userFavourites,
      deleteFavouriteFromServer,
      setUserFavourites,
      savedRestaurants,
      fetchRestaurantsFromServer,
      addBooking,
      loggedIn
    } = this.props;

    return (
      <div className="content-area">
        <h1>
          <strong>{user.username}'s Favourites</strong>
        </h1>
        <div className="restaurant-list">
          {userFavourites.map(favourite => (
            <FavouriteCardWrapper
              setUserFavourites={setUserFavourites}
              deleteFavouriteFromServer={deleteFavouriteFromServer}
              user={user}
              favourite={favourite}
              savedRestaurants={savedRestaurants}
              userFavourites={userFavourites}
              addBooking={addBooking}
              loggedIn={loggedIn}
            />
          ))}
        </div>
      </div>
    );
  }
}
