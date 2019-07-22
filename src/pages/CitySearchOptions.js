import React from "react";
import "../App.css";
import SearchComponent from "../components/SearchComponent";
import RestaurantList from "../components/RestaurantList";
import fetchCollectionsForCity from '../services/api'

export default class CitySearchOptions extends React.Component {
  render() {
    const { selectedCityId } = this.props
    return (
      <>
        <h1>
          <strong>Choose your search</strong>
        </h1>
        <h4>Collections</h4>
        {fetchCollectionsForCity(selectedCityId)}
        <h4>Cuisines</h4>
        
      </>
    );
  }
}
