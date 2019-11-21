import React, { Component } from "react";
import { fetchRestaurantsByCity } from "../services/api";
import SearchCard from "./SearchCard";

export default class SearchList extends Component {
  searchTerm = option => {
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
    // if (option.cuisine) {
    //   return option.cuisine.cuisine_name;
    // } else if (option.collection) {
    //   return option.collection.title;
    // } else if (option.establishment) {
    //   return option.establishment.name;
    // } else if (option.categories) {
    //   return option.categories.name;
    // }
  };

  filterSearchTermData = () => {
    let optionArray = ["cuisine", "collection", "establishment", "categories"];

    // this.props.searchOptionData.sort((a, b) => {
    //   let nameA = a[]
    // })

    // items.sort((a, b) => {
    //   let nameA = a.name.toUpperCase(); // ignore upper and lowercase
    //   let nameB = b.name.toUpperCase(); // ignore upper and lowercase
    //   if (nameA < nameB) {
    //     return -1;
    //   }
    //   if (nameA > nameB) {
    //     return 1;
    //   }
    // });
  };

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
        {searchOptionData.map((option, i) => (
          <SearchCard
            key={i}
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
