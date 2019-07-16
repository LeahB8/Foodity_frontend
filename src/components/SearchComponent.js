import React, { Component } from 'react';
 
class SearchComponent extends Component {
  
 handleSubmit = (e) => {
     e.preventDefault()

 }


  render() {


    const cities = [
        {
            name: "London",
            country: "United Kingdom",
            country_id: 215,
            id: 61
        },
        {
            name: "Birmingham",
            country: "United Kingdom",
            country_id: 215,
            id: 69
        },
        {
            name: "Liverpool",
            country: "United Kingdom",
            country_id: 215,
            id: 323
        },
        {
            name: "Glasgow",
            country: "United Kingdom",
            country_id: 215,
            id: 77
        },
        {
            name: "Manchester",
            country: "United Kingdom",
            country_id: 215,
            id: 68
        },
        {
            name: "Rome",
            country: "Italy",
            country_id: 99,
            id: 257
        },
        {
            name: "Milan",
            country: "Italy",
            country_id: 99,
            id: 258
        },
        {
            name: "Istanbul",
            country: "Turkey",
            country_id: 208,
            id: 59
        },
        {
            name: "Sydney",
            country: "Australia",
            country_id: 14,
            id: 260
        },
        {
            name: "Melbourne",
            country: "Australia",
            country_id: 14,
            id: 259
        },
        {
            name: "Toronto",
            country: "Canada",
            country_id: 37,
            id: 89
        },
        {
            name: "Vancouver",
            country: "Canada",
            country_id: 37,
            id: 256
        },
        {
            name: "Montreal",
            country: "Canada",
            country_id: 37,
            id: 294
        },
        {
            name: "New York City",
            country: "United States",
            country_id: 216,
            id: 280
        },
        {
            name: "Los Angeles",
            country: "United States",
            country_id: 216,
            id: 281
        },
        {
            name: "New Orleans",
            country: "United States",
            country_id: 216,
            id: 290
        },
        {
            name: "Chicago",
            country: "United States",
            country_id: 216,
            id: 292
        },
        {
            name: "San Francisco",
            country: "United States",
            country_id: 216,
            id: 306
        },
        {
            name: "Miami",
            country: "United States",
            country_id: 216,
            id: 260
        },
        {
            name: "Philadelphia",
            country: "United States",
            country_id: 216,
            id: 287
        }
    ]


    return (
      <div >
       <h2>Select Top Cities</h2>
            <form onSubmit={this.handleSubmit}>
                <select name="city">
                <option>Select City</option>
                    {cities.map(city => (
                        <option value={city.id}>{city.name}</option>
                    ))}
                </select>
                <button type="submit">Select</button>
            </form>
      </div>
 
    )
  } 
}
 
export default SearchComponent;








 