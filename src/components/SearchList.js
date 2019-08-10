import React, { Component } from "react";
import SearchCard from "./SearchCard";

export default class SearchList extends Component {
  render() {
    const {
      user,
      loggedIn,
      searchOptionData,
      selectedCityId,
      populateListWithData
    } = this.props;

    return (
      <div className="restaurant-list">
        {searchOptionData.map(option => (
          <SearchCard
            key={option.id}
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
