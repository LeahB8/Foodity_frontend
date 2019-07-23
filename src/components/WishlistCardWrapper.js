import React from "react";
import { fetchUserInfo, findIndividualRestaurantInfo } from "../services/api";
import "../App.css";
import SingleCard from "./SingleCard";

export default class WishlistCardWrapper extends React.Component {
  state = {
    name: "",
    featured_image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NCAgHDQ0HBwcHDQ8IDQgNFREWFhURExMYKCgsGBolGxMVIT0hJSkrLi4uFx82RDNAOzQtODcBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMIBAwMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAAAQIDBAf/xAArEAEBAAEBBgMJAQEAAAAAAAAAAQIRAxMhMVGRMmFxBBIUQUJTobHRUsH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+nSNSEakAka0SNQCRSKAoAAoIoAAoIKAgoCCgIACCoAigIlaSgwlaqUGLGbG6lBz0GtAGpGokagLIsSNAKACgACgigAAAAAAAAAACCoAigIACVmtJQYqWN1mgwLoA1GokagEaRQFRQAUAAAAAAAAAAAAAAAAEFQBFARFKDNZrVSgzoADUWJGgWAAoAEUAAAAAAAAAAAAAAAAAAAQAECgIlVKDIUBqKkagAKACgAAAAAAA55bXGXTnZz0+QOg576ef4N9PP8AAOg576ef4N9PP8A6Dnvp5x0AAAAAAARUARUASqgMioCxploBUUBUUAAAAAABw2MmuWsl0t58fnXdw2PG5zrbL3oJvcf8T3flbpr2dpjj0nHyjhuMvLT/AE9GM0knTgCe5Ok7Q9ydJ2jjttt9ON8s8p+obHa6cLy5S9Ab2+MmN0kl4cZJ1b2fhnox7R4L64/uNbLwz0BsAAAAABFQBFSgIqAgADUZjUAVFAVFAAAAAAAcPZ/Fn63913ebZc9p1vvSd6Bt9t9ON5cMs5+oxlt8rNOV+rKc7Cez59J3huM+k7wHMdNxn0neG4z6TvAa112V8rJO8d9l4cfRxywuOzyl4XWXnL847bHw4+gNgAAAAAIqAIqUBFQEAAixIsBVQBVRQAAAAAAHDPYcbZlcPe42TWO4Dz/D5fcy75f0+Hy+5l3y/r0APP8AD5fcy75f0+Hy+5l3y/r0APPfZreeds6XW/8AXfGaSScpwigAAAAAACVUAQAEVKCCALFZjUBQAUAFAAAAAAAAAAAAAAAAAAABAoCAAlSqlBBACNRhqA0qRQFRQFQBQAAAAAAAAAAAAAAAEVAEAAEArNWs0ATUAixiNQG4rMWA0IoKIoCoAoAAAAAAAAAAACAAgAAAhRKCVlazaArICRqMStQG1jEaBuDMaBRFBRAFABRAFE1AUTUBUAFQABAAABBKBWaVAKzS1LQBlAI3ABY0oCqAKsAAAAAAAAAAUBAAAAEAFQARABKzVAZrNQBmgA//2Q=="
  };

  componentDidMount() {
    findIndividualRestaurantInfo(this.props.wishlist.restaurant_api_id).then(
      data => this.setState(data)
    );
  }

  render() {
    const {
      user,
      deleteWishlistItemFromServer,
      setUserWishlists,
      savedRestaurants,
      userWishlists
    } = this.props;

    // const { restaurantInfo } = this.state;
    return (
      <div className="restaurant-list">
        <SingleCard
          //   setUserWishlists={setUserWishlists}
          secondCallback={setUserWishlists}
          //   deleteWishlistItemFromServer={deleteWishlistItemFromServer}
          deleteCallback={deleteWishlistItemFromServer}
          user={user}
          single={this.state}
          savedRestaurants={savedRestaurants}
          userInfo={userWishlists}
        />
      </div>
    );
  }
}
