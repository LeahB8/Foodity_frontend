import React from "react";
import "../App.css";
import SearchComponent from "../components/SearchComponent";
import ProgressBar from "../components/ProgressBar";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";

export default class UserProfile extends React.Component {
  state = {
    percentage: 0
  };

  render() {
    const {
      user,
      restaurantData,
      populateListWithData,
      addRestaurantToFavourites,
      addRestaurantToWishlists,
      addRestaurantToBookings,
      loggedIn,
      saveRestaurantToServer,
      savedRestaurants,
      addFave,
      addWishlist,
      populateListWithCollections,
      selectedCityId,
      assignSelectedCityId,
      assignSelectedCityName
    } = this.props;

    return (
      <div className="content-area">
        <div className="welcome-card-container">
          <div className="welcome-card">
            <h1>
              <strong>Welcome back, {user.username}</strong>
            </h1>

            {/* <div className="welcome-paragraph-div"> */}
            <div>
              <IconButton className="icons">
                <Icon>search</Icon>
              </IconButton>
              <IconButton className="icons">
                <Icon>location_on</Icon>
              </IconButton>
              <IconButton className="icons">
                <Icon>restaurant</Icon>
              </IconButton>
            </div>
            <p className="welcome-paragraph">
              <br />
              Search through the list of cities to find restaurants that inspire
              you
              <br />
              <br />
              Explore your own city's hidden gems or plan for upcoming holidays
              <br />
              <br />
            </p>
            {/* </div> */}
          </div>
        </div>
        <br />

        <div>
          <h2>Select a city to discover restaurants</h2>
        </div>
        {/* <ProgressBar percentage={this.state.percentage} /> */}

        <div className="search-restaurants">
          <div>
            <SearchComponent
              {...this.props}
              populateListWithData={populateListWithData}
              populateListWithCollections={populateListWithCollections}
              loggedIn={loggedIn}
              user={user}
              restaurantData={restaurantData}
              addRestaurantToFavourites={addRestaurantToFavourites}
              addRestaurantToWishlists={addRestaurantToWishlists}
              addRestaurantToBookings={addRestaurantToBookings}
              saveRestaurantToServer={saveRestaurantToServer}
              savedRestaurants={savedRestaurants}
              addFave={addFave}
              addWishlist={addWishlist}
              selectedCityId={selectedCityId}
              assignSelectedCityId={assignSelectedCityId}
              assignSelectedCityName={assignSelectedCityName}
            />
          </div>
        </div>
      </div>
    );
  }
}
