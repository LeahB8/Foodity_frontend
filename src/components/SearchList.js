import React, { Component } from "react";
import SearchCard from "./SearchCard";

export default class SearchList extends Component {
  getSearchTermNames = option => {
    let optionArr = [
      { type: "cuisine", name: "cuisine_name" },
      { type: "collection", name: "title" },
      { type: "establishment", name: "name" },
      { type: "categories", name: "name" }
    ];
    let firstNames = optionArr.map(singleOption => {
      if (option[singleOption.type]) {
        return option[singleOption.type][singleOption.name];
      }
    });
    return firstNames;
  };

  filterSearchTermData = () => {
    const { searchOptionData } = this.props;

    let searchTermNameArr = searchOptionData.map(option => {
      return this.getSearchTermNames(option);
    });

    let formattedArr = searchTermNameArr.sort((a, b) => {
      let nameA = a[0];
      let nameB = b[0];
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    return formattedArr;
  };

  render() {
    const {
      user,
      loggedIn,
      searchOptionData,
      selectedCityId,
      populateListWithData
    } = this.props;

    let filteredSearchTermData = this.filterSearchTermData();

    return (
      <div className="restaurant-list">
        {searchOptionData.map((option, i) => (
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
