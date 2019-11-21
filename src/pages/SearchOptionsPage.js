import React from "react";
import "../App.css";
import SearchList from "../components/SearchList";
import ProgressBar from "../components/ProgressBar";
import Loading from "react-loading-animation";

export default class SearchOptionsPage extends React.Component {
  state = {
    percentage: 66
  };

  render() {
    const {
      user,
      loggedIn,
      addWishlist,
      addFave,
      searchOptionData,
      selectedCityId,
      populateListWithData,
      selectedCityName,
      redirectToWelcomePage
    } = this.props;

    if (!searchOptionData) {
      return <Loading />;
    }

    return (
      <div className="content-area">
        <h1>
          <strong>Select an individual search option</strong>
        </h1>
        <h2>
          for{" "}
          {selectedCityName === "" ? redirectToWelcomePage() : selectedCityName}
        </h2>

        <ProgressBar percentage={this.state.percentage} />

        <div className="restaurant-list" />
        <SearchList
          searchOptionData={searchOptionData}
          loggedIn={loggedIn}
          addFave={addFave}
          addWishlist={addWishlist}
          selectedCityId={selectedCityId}
          populateListWithData={populateListWithData}
          {...this.props}
        />
      </div>
    );
  }
}
