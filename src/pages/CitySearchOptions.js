import React from "react";
import "../App.css";
import {
  fetchCollectionsForCity,
  fetchCuisinesForCity,
  fetchEstablishmentsForCity,
  fetchCategories
} from "../services/api";
import ProgressBar from "../components/ProgressBar";

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
      redirectToWelcomePage
    } = this.props;
    const {
      handleCollectionsClick,
      handleCusinesClick,
      handleEstablishmentsClick,
      handleCategoriesClick
    } = this;
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

        <div className="search-cards">
          <div
            className="card"
            onClick={() => handleCollectionsClick(selectedCityId)}
          >
            <h4 className="collections-card">Collections</h4>
            <div className="image-div">
              <p>Browse Foodity's carefully curated collections</p>

              <img
                src="https://images.unsplash.com/photo-1549332409-c2580d165674?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt="collections"
              />
            </div>
          </div>

          <div
            className="card"
            onClick={() => handleCusinesClick(selectedCityId)}
          >
            <div className="cuisine-card">
              <h4>Cuisines</h4>
              <p>Choose from your favourite cuisines</p>
              <div className="image-div">
                <img
                  src="https://images.unsplash.com/photo-1542528180-0c79567c66de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1339&q=80"
                  alt="cuisines"
                />
              </div>
            </div>
          </div>

          <div
            className="card"
            onClick={() => handleEstablishmentsClick(selectedCityId)}
          >
            <h4>Establishments</h4>
            <p>Select your favourite type of establishment</p>

            <div className="image-div">
              <img
                src="https://images.unsplash.com/photo-1546983620-53cb1c496917?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                alt="establishments"
              />
            </div>
          </div>

          <div
            className="card"
            onClick={() => handleCategoriesClick(selectedCityId)}
          >
            <h4>Categories</h4>
            <p>Choose from breakfast, lunch, dinner, or maybe a delivery</p>

            <div className="image-div">
              <img
                src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                alt="categories"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
