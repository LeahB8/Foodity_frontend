import React, { Component } from "react";
import {
  fetchRestaurantsByCityAndCollection,
  fetchRestaurantsByCityAndCategory,
  fetchRestaurantsByCityAndCuisine,
  fetchRestaurantsByCityAndEstablishment
} from "../services/api";

export default class SearchCard extends Component {
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
  };

  handleClick = option => {
    if (option.cuisine) {
      fetchRestaurantsByCityAndCuisine(
        this.props.selectedCityId,
        option.cuisine.cuisine_id
      ).then(data => {
        this.props.populateListWithData(data);
        this.props.history.push(`/restaurants/${this.props.selectedCityId}`);
      });
      // .then(() => {
      //   this.props.history.push(`/restaurants/${this.props.selectedCityId}`);
      // });
    } else if (option.collection) {
      fetchRestaurantsByCityAndCollection(
        this.props.selectedCityId,
        option.collection.collection_id
      ).then(data => {
        this.props.populateListWithData(data);
        this.props.history.push(`/restaurants/${this.props.selectedCityId}`);
      });
      // .then(() =>
      //   this.props.history.push(`/restaurants/${this.props.selectedCityId}`)
      // );
    } else if (option.establishment) {
      fetchRestaurantsByCityAndEstablishment(
        this.props.selectedCityId,
        option.establishment.id
      ).then(data => {
        this.props.populateListWithData(data);
        this.props.history.push(`/restaurants/${this.props.selectedCityId}`);
      });
      // .then(() =>
      //   this.props.history.push(`/restaurants/${this.props.selectedCityId}`)
      // );
    } else if (option.categories) {
      fetchRestaurantsByCityAndCategory(
        this.props.selectedCityId,
        option.categories.id
      ).then(data => {
        this.props.populateListWithData(data);
        this.props.history.push(`/restaurants/${this.props.selectedCityId}`);
      });
      // .then(() =>
      //   this.props.history.push(`/restaurants/${this.props.selectedCityId}`)
      // );
    }
  };

  render() {
    const { option } = this.props;

    return (
      <div>
        <div className="search-card" onClick={() => this.handleClick(option)}>
          <p>{this.searchTerm(option)}</p>
          {option.collection ? (
            <>
              <div className="collection-description">
                <p>{option.collection.description}</p>
              </div>
              <img
                className="option-image"
                src={option.collection.image_url}
                alt="collection"
              />
            </>
          ) : null}
        </div>
      </div>
    );
  }
}
