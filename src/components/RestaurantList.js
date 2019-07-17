import React, { Component } from 'react';
import { fetchRestaurantsByCity } from '../services/api'

 
class RestaurantList extends Component {
  

  render() {
    const { restaurantData } = this.props

    return (
      <div >
       <h2>Restaurants</h2>
      {restaurantData.map(restaurant => (
          <div>
                <h3>{restaurant.name}</h3>
                <p>{restaurant.cuisines}</p>
                <p>Average cost for two: {restaurant.currency}{restaurant.average_cost_for_two}</p>
                <p>Address: {restaurant.location.address}</p>

          </div>
      ))}
      </div>
 
    )
  } 
}
 
export default RestaurantList;








 