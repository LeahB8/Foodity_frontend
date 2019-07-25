import React from "react";
import "../App.css";
import SearchList from "../components/SearchList";

export default class SearchOptionsPage extends React.Component {
    render() {
        const {
            users_name,
            user,
            username,
            userFavourites,
            deleteFavouriteFromServer,
            setUserFavourites,
            savedRestaurants,
            fetchRestaurantsFromServer,
            restaurantData,
            loggedIn,
            addWishlist,
            addFave,
            searchOptionData,
            selectedCityId,
            populateListWithData

        } = this.props;

        return (
            <div>
                <h1>
                    <strong>
                        {loggedIn
                            ? `${user.username}'s Search Options`
                            : "Search Options"}
                    </strong>
                </h1>
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
