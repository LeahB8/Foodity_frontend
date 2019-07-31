//----------------------- my rails api -------------------//

const baseUrl = "http://localhost:3001";
const signinUrl = baseUrl + "/signin";

export function signin(username, password) {
  return fetch(signinUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  }).then(resp => resp.json());
}

export function validate() {
  return fetch("http://localhost:3001/validate", {
    headers: { Authorisation: localStorage.token }
  }).then(resp => resp.json());
}

export function createUser(username, password) {
  return fetch("http://localhost:3001/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  }).then(resp => resp.json());
}

export function fetchUserInfo(user) {
  return fetch(baseUrl + `/users/${user.id}`).then(resp => resp.json());
}

export function getUserFavourites(user) {
  return fetch(`http://localhost:3001/users/${user.id}/favourites`, {
    headers: {
      "Content-Type": "application/json",
      Authorisation: localStorage.token
    }
  });
}

export function getUserWishlists(user) {
  return fetch(`http://localhost:3001/users/${user.id}/wishlists`, {
    headers: {
      "Content-Type": "application/json",
      Authorisation: localStorage.token
    }
  });
}

export function getUserBookings(user) {
  return fetch(`http://localhost:3001/users/${user.id}/bookings`, {
    headers: {
      "Content-Type": "application/json",
      Authorisation: localStorage.token
    }
  }).then(resp => resp.json());
}

//----------------------- zomato api -------------------//

export function fetchRestaurantsByCity(city_id) {
  return fetch(
    `https://developers.zomato.com/api/v2.1/search?entity_id=${city_id}&entity_type=city`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        // First API key
        "user-key": "0a30032127faff953a6589eeb89db7d5"
        // Second API key
        // "user-key": "b2175adda37400ec0c255f87343fd432"
      }
    }
  ).then(resp => resp.json());
}

export function findIndividualRestaurantInfo(restaurant_api_id) {
  return fetch(
    `https://developers.zomato.com/api/v2.1/restaurant?res_id=${restaurant_api_id}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        // First API key
        "user-key": "0a30032127faff953a6589eeb89db7d5"
        // Second API key
        // "user-key": "b2175adda37400ec0c255f87343fd432"
      }
    }
  ).then(resp => resp.json());
}

export function fetchCollectionsForCity(city_id) {
  return fetch(
    `https://developers.zomato.com/api/v2.1/collections?city_id=${city_id}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        // First API key
        "user-key": "0a30032127faff953a6589eeb89db7d5"
        // Second API key
        // "user-key": "b2175adda37400ec0c255f87343fd432"
      }
    }
  ).then(resp => resp.json());
}

export function fetchCuisinesForCity(city_id) {
  return fetch(
    `https://developers.zomato.com/api/v2.1/cuisines?city_id=${city_id}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        // First API key
        "user-key": "0a30032127faff953a6589eeb89db7d5"
        // Second API key
        // "user-key": "b2175adda37400ec0c255f87343fd432"
      }
    }
  ).then(resp => resp.json());
}

export function fetchEstablishmentsForCity(city_id) {
  return fetch(
    `https://developers.zomato.com/api/v2.1/establishments?city_id=${city_id}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        // First API key
        "user-key": "0a30032127faff953a6589eeb89db7d5"
        // Second API key
        // "user-key": "b2175adda37400ec0c255f87343fd432"
      }
    }
  ).then(resp => resp.json());
}

export function fetchCategories() {
  return fetch(`https://developers.zomato.com/api/v2.1/categories`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      // First API key
      "user-key": "0a30032127faff953a6589eeb89db7d5"
      // Second API key
      // "user-key": "b2175adda37400ec0c255f87343fd432"
    }
  }).then(resp => resp.json());
}

export function fetchRestaurantsByCityAndCollection(city_id, collection_id) {
  return fetch(
    `https://developers.zomato.com/api/v2.1/search?entity_id=${city_id}&entity_type=city&collection_id=${collection_id}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        // First API key
        "user-key": "0a30032127faff953a6589eeb89db7d5"
        // Second API key
        // "user-key": "b2175adda37400ec0c255f87343fd432"
      }
    }
  ).then(resp => resp.json());
}

export function fetchRestaurantsByCityAndCategory(city_id, category_id) {
  return fetch(
    `https://developers.zomato.com/api/v2.1/search?entity_id=${city_id}&entity_type=city&category=${category_id}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        // First API key
        "user-key": "0a30032127faff953a6589eeb89db7d5"
        // Second API key
        // "user-key": "b2175adda37400ec0c255f87343fd432"
      }
    }
  ).then(resp => resp.json());
}

export function fetchRestaurantsByCityAndCuisine(city_id, cuisine_id) {
  return fetch(
    `https://developers.zomato.com/api/v2.1/search?entity_id=${city_id}&entity_type=city&cuisines=${cuisine_id}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        // First API key
        "user-key": "0a30032127faff953a6589eeb89db7d5"
        // Second API key
        // "user-key": "b2175adda37400ec0c255f87343fd432"
      }
    }
  ).then(resp => resp.json());
}

export function fetchRestaurantsByCityAndEstablishment(
  city_id,
  establishment_id
) {
  return fetch(
    `https://developers.zomato.com/api/v2.1/search?entity_id=${city_id}&entity_type=city&establishment_type=${establishment_id}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        // First API key
        "user-key": "0a30032127faff953a6589eeb89db7d5"
        // Second API key
        // "user-key": "b2175adda37400ec0c255f87343fd432"
      }
    }
  ).then(resp => resp.json());
}

//----------------------- exporting -------------------//

export default {
  signin,
  validate,
  createUser,
  fetchUserInfo,
  fetchRestaurantsByCity,
  getUserFavourites,
  getUserWishlists,
  getUserBookings,
  fetchCollectionsForCity,
  fetchCuisinesForCity,
  fetchEstablishmentsForCity,
  fetchCategories,
  findIndividualRestaurantInfo,
  fetchRestaurantsByCityAndCollection,
  fetchRestaurantsByCityAndCategory,
  fetchRestaurantsByCityAndCuisine,
  fetchRestaurantsByCityAndEstablishment
};
