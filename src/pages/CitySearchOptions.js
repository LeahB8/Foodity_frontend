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
  handleCollectionsClick = id => {
    fetchCollectionsForCity(id).then(data => {
      this.props
        .populateListWithCollections(data)
        .then(() => this.props.history.push("/restaurants"));
    });
  };

  handleCusinesClick = id => {
    fetchCuisinesForCity(id).then(data => {
      this.props
        .populateListWithCuisines(data)
        .then(() => this.props.history.push("/restaurants"));
    });
  };

  handleEstablishmentsClick = id => {
    fetchEstablishmentsForCity(id).then(data => {
      this.props
        .populateListWithEstablishments(data)
        .then(() => this.props.history.push("/restaurants"));
    });
  };

  handleCategoriesClick = () => {
    fetchCategories().then(data => {
      this.props
        .populateListWithCategories(data)
        .then(() => this.props.history.push("/restaurants"));
    });
  };

  render() {
    const { id } = this.props;
    const {
      handleCollectionsClick,
      handleCusinesClick,
      handleEstablishmentsClick,
      handleCategoriesClick
    } = this;
    return (
      <>
        <h1>
          <strong>Choose your search</strong>
        </h1>
        <div className="card" onClick={() => handleCollectionsClick(id)}>
          <h4>Collections</h4>
          <img src="https://images.unsplash.com/photo-1549332409-c2580d165674?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
        </div>

        <div className="card" onClick={() => handleCusinesClick(id)}>
          <h4>Cuisines</h4>
        </div>

        <div className="card" onClick={() => handleEstablishmentsClick(id)}>
          <h4>Establishments</h4>
        </div>

        <div className="card" onClick={handleCategoriesClick}>
          <h4>Categories</h4>
        </div>
      </>
    );
  }
}
