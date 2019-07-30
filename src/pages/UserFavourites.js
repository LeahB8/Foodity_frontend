import React from "react";
import "../App.css";
import FavouriteCardWrapper from "../components/FavouriteCardWrapper";

export default class UserFavourites extends React.Component {
  render() {
    const {
      user,
      userFavourites,
      deleteFavouriteFromServer,
      setUserFavourites,
      savedRestaurants,
      addBooking,
      loggedIn
    } = this.props;

    return (
      <div className="content-area">
        <h1>
          <strong>{user.username}'s Favourites</strong>
        </h1>
        {userFavourites.length === 0 ? (
          <p>No restaurants have been favourited yet.</p>
        ) : (
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
        )}
      </div>
    );
  }
}
