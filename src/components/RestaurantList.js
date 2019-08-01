import React, { Component } from "react";
import { fetchRestaurantsByCity } from "../services/api";
import RestaurantCard from "./RestaurantCard";

class RestaurantList extends Component {
  state = {
    location: {},
    highlights: [],
    user_rating: {},
    all_reviews: {
      reviews: []
    },
    photos: [],
    featured_image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NCAgHDQ0HBwcHDQ8IDQgNFREWFhURExMYKCgsGBolGxMVIT0hJSkrLi4uFx82RDNAOzQtODcBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMIBAwMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAAAQIDBAf/xAArEAEBAAEBBgMJAQEAAAAAAAAAAQIRAxMhMVGRMmFxBBIUQUJTobHRUsH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+nSNSEakAka0SNQCRSKAoAAoIoAAoIKAgoCCgIACCoAigIlaSgwlaqUGLGbG6lBz0GtAGpGokagLIsSNAKACgACgigAAAAAAAAAACCoAigIACVmtJQYqWN1mgwLoA1GokagEaRQFRQAUAAAAAAAAAAAAAAAAEFQBFARFKDNZrVSgzoADUWJGgWAAoAEUAAAAAAAAAAAAAAAAAAAQAECgIlVKDIUBqKkagAKACgAAAAAAA55bXGXTnZz0+QOg576ef4N9PP8AAOg576ef4N9PP8A6Dnvp5x0AAAAAAARUARUASqgMioCxploBUUBUUAAAAAABw2MmuWsl0t58fnXdw2PG5zrbL3oJvcf8T3flbpr2dpjj0nHyjhuMvLT/AE9GM0knTgCe5Ok7Q9ydJ2jjttt9ON8s8p+obHa6cLy5S9Ab2+MmN0kl4cZJ1b2fhnox7R4L64/uNbLwz0BsAAAAABFQBFSgIqAgADUZjUAVFAVFAAAAAAAcPZ/Fn63913ebZc9p1vvSd6Bt9t9ON5cMs5+oxlt8rNOV+rKc7Cez59J3huM+k7wHMdNxn0neG4z6TvAa112V8rJO8d9l4cfRxywuOzyl4XWXnL847bHw4+gNgAAAAAIqAIqUBFQEAAixIsBVQBVRQAAAAAAHDPYcbZlcPe42TWO4Dz/D5fcy75f0+Hy+5l3y/r0APP8AD5fcy75f0+Hy+5l3y/r0APPfZreeds6XW/8AXfGaSScpwigAAAAAACVUAQAEVKCCALFZjUBQAUAFAAAAAAAAAAAAAAAAAAABAoCAAlSqlBBACNRhqA0qRQFRQFQBQAAAAAAAAAAAAAAAEVAEAAEArNWs0ATUAixiNQG4rMWA0IoKIoCoAoAAAAAAAAAAACAAgAAAhRKCVlazaArICRqMStQG1jEaBuDMaBRFBRAFABRAFE1AUTUBUAFQABAAABBKBWaVAKzS1LQBlAI3ABY0oCqAKsAAAAAAAAAAUBAAAAEAFQARABKzVAZrNQBmgA//2Q=="
  };

  // componentDidMount() {
  //   this.setState(this.props.restaurantData);
  // }

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
      addFave,
      addWishlist,
      addBooking,
      setUserBookings,
      setUserFavourites,
      setUserWishlists
    } = this.props;

    return (
      <div className="restaurant-list">
        {restaurantData.map(single => (
          <RestaurantCard
            key={single.id}
            user={user}
            single={single.restaurant}
            addRestaurantToFavourites={addRestaurantToFavourites}
            addRestaurantToWishlists={addRestaurantToWishlists}
            addRestaurantToBookings={addRestaurantToBookings}
            loggedIn={loggedIn}
            saveRestaurantToServer={saveRestaurantToServer}
            savedRestaurants={savedRestaurants}
            addFave={addFave}
            addWishlist={addWishlist}
            addBooking={addBooking}
            setUserBookings={setUserBookings}
            setUserFavourites={setUserFavourites}
            setUserWishlists={setUserWishlists}
          />
        ))}
      </div>
    );
  }
}

export default RestaurantList;
