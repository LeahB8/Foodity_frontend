import React, { Component } from "react";
import {
  fetchRestaurantsByCity,
  fetchRestaurantsByCityAndCollection,
  fetchRestaurantsByCityAndCategory,
  fetchRestaurantsByCityAndCuisine,
  fetchRestaurantsByCityAndEstablishment
} from "../services/api";

export default class SearchCard extends Component {
  searchTerm = option => {
    if (option.cuisine) {
      return option.cuisine.cuisine_name;
    } else if (option.collection) {
      return option.collection.title;
    } else if (option.establishment) {
      return option.establishment.name;
    } else if (option.categories) {
      return option.categories.name;
    }
  };

  handleClick = option => {
    if (option.cuisine) {
      fetchRestaurantsByCityAndCuisine(
        this.props.selectedCityId,
        option.cuisine.cuisine_id
      )
        .then(data => {
          this.props.populateListWithData(data);
        })
        .then(() => {
          this.props.history.push(`/restaurants/${this.props.selectedCityId}`);
        });
    } else if (option.collection) {
      fetchRestaurantsByCityAndCollection(
        this.props.selectedCityId,
        option.collection.collection_id
      )
        .then(data => this.props.populateListWithData(data))
        .then(() =>
          this.props.history.push(`/restaurants/${this.props.selectedCityId}`)
        );
    } else if (option.establishment) {
      fetchRestaurantsByCityAndEstablishment(
        this.props.selectedCityId,
        option.establishment.id
      )
        .then(data => this.props.populateListWithData(data))
        .then(() =>
          this.props.history.push(`/restaurants/${this.props.selectedCityId}`)
        );
    } else if (option.categories) {
      fetchRestaurantsByCityAndCategory(
        this.props.selectedCityId,
        option.categories.id
      )
        .then(data => this.props.populateListWithData(data))
        .then(() =>
          this.props.history.push(`/restaurants/${this.props.selectedCityId}`)
        );
    }
  };

  render() {
    const { option, selectedCityId } = this.props;

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
