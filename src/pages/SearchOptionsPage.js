import React from "react";
import "../App.css";
import SearchList from "../components/SearchList";
import ProgressBar from "../components/ProgressBar";

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
      selectedCityName
    } = this.props;

    return (
      <div className="content-area">
        <h1>
          <strong>
            {loggedIn ? `${user.username}'s Search Options` : "Search Options"}
          </strong>
        </h1>
        <h3>for {selectedCityName}</h3>

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
