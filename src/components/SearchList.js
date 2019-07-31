import React, { Component } from "react";
import { fetchRestaurantsByCity } from "../services/api";
import SearchCard from "./SearchCard";

export default class SearchList extends Component {
  render() {
    // // debugger
    const {
      user,
      loggedIn,
      saveRestaurantToServer,
      savedRestaurants,
      searchOptionData,
      selectedCityId,
      populateListWithData
    } = this.props;

    return (
      <div className="restaurant-list">
        {searchOptionData.map(option => (
          <SearchCard
            user={user}
            option={option}
            loggedIn={loggedIn}
            populateListWithData={populateListWithData}
            selectedCityId={selectedCityId}
            {...this.props}
          />
        ))}
      </div>
    );
  }
}
