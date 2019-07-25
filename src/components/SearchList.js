import React, { Component } from "react";
import { fetchRestaurantsByCity } from "../services/api";
import SearchCard from "./SearchCard";

class SearchList extends Component {
    render() {
        const {
            restaurantData,
            addRestaurantToFavourites,
            addRestaurantToWishlists,
            addRestaurantToBookings,
            user,
            loggedIn,
            saveRestaurantToServer,
            savedRestaurants,
            collectionsData,
            cuisinesData,
            establishmentsData,
            categoriesData
        } = this.props;

        return (
            <div className="restaurant-list">
                {restaurantData.map(single => (
                    <SearchCard
                        user={user}
                        single={single}
                        addRestaurantToFavourites={addRestaurantToFavourites}
                        addRestaurantToWishlists={addRestaurantToWishlists}
                        addRestaurantToBookings={addRestaurantToBookings}
                        loggedIn={loggedIn}
                        saveRestaurantToServer={saveRestaurantToServer}
                        savedRestaurants={savedRestaurants}
                        collectionsData={collectionsData}
                        cuisinesData={cuisinesData}
                        establishmentsData={establishmentsData}
                        categoriesData={categoriesData}
                    />
                ))}
            </div>
        );
    }
}

export default RestaurantList;
