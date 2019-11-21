import React from "react";
import "../App.css";
import {
  fetchCollectionsForCity,
  fetchCuisinesForCity,
  fetchEstablishmentsForCity,
  fetchCategories
} from "../services/api";
import ProgressBar from "../components/ProgressBar";
import SearchSelectorCard from "../components/SearchSelectorCard";

export default class CitySearchOptions extends React.Component {
  state = {
    percentage: 33
  };

  handleCollectionsClick = id => {
    fetchCollectionsForCity(id).then(data => {
      this.props
        .populateListWithSearchOptionData(data.collections)
        .then(() => this.props.history.push(`/options/${id}`));
    });
  };

  handleCusinesClick = id => {
    fetchCuisinesForCity(id).then(data => {
      this.props
        .populateListWithSearchOptionData(data.cuisines)
        .then(() => this.props.history.push(`/options/${id}`));
    });
  };

  handleEstablishmentsClick = id => {
    fetchEstablishmentsForCity(id).then(data => {
      this.props
        .populateListWithSearchOptionData(data.establishments)
        .then(() => this.props.history.push(`/options/${id}`));
    });
  };

  handleCategoriesClick = id => {
    fetchCategories().then(data => {
      this.props
        .populateListWithSearchOptionData(data.categories)
        .then(() => this.props.history.push(`/options/${id}`));
    });
  };

  render() {
    const {
      selectedCityId,
      selectedCityName,
      redirectToWelcomePage,
      populateListWithSearchOptionData
    } = this.props;

    return (
      <div className="content-area">
        <h1>
          <strong>Choose your search</strong>
        </h1>
        <h2>
          for{" "}
          {selectedCityName === "" ? redirectToWelcomePage() : selectedCityName}
        </h2>
        <ProgressBar percentage={this.state.percentage} />

        <SearchSelectorCard
          selectedCityId={selectedCityId}
          populateListWithSearchOptionData={populateListWithSearchOptionData}
          {...this.props}
        />
      </div>
    );
  }
}
