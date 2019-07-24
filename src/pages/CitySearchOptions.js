import React from "react";
import "../App.css";
import SearchComponent from "../components/SearchComponent";
import RestaurantList from "../components/RestaurantList";
import {
  fetchCollectionsForCity,
  fetchCuisinesForCity,
  fetchEstablishmentsForCity,
  fetchCategories
} from "../services/api";

export default class CitySearchOptions extends React.Component {
  
  handleCollectionsClick = (selectedCityId) = {
    fetchCollectionsForCity(selectedCityId)
    .then(this.props.history.push('/'))
  }

  handleCusinesClick = (selectedCityId) = {
    fetchCuisinesForCity(selectedCityId)
    .then(this.props.history.push('/'))
  }

  handleEstablishmentsClick = (selectedCityId) = {
    fetchEstablishmentsForCity(selectedCityId)
    .then(this.props.history.push('/'))
  }

  handleCategoriesClick = () = {
    fetchCategories()
      .then(this.props.history.push('/'))
  }

  render() {
    const { selectedCityId } = this.props;
    return (
      <>
        <h1>
          <strong>Choose your search</strong>
        </h1>
        <div onClick={() => handleCollectionsClick(selectedCityId)}>
          <h4>Collections</h4>
        </div>

        <div onClick={() => handleCusinesClick(selectedCityId)}>
          <h4>Cuisines</h4>
        </div>

        <div onClick={() => handleEstablishmentsClick(selectedCityId)}>
          <h4>Establishments</h4>
        </div>

        <div onClick={handleCategoriesClick}>
          <h4>Categories</h4>
        </div>
      </>
    );
  }
}
