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
  return fetch(baseUrl + `/users/${user.id}`);
}

  //----------------------- zomato api -------------------//



  export function fetchRestaurantsByCity(city_id) {
      return fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=${city_id}&entity_type=city`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'user-key': '0a30032127faff953a6589eeb89db7d5'
            }
      }).then(resp => resp.json());
  }

  //----------------------- exporting -------------------//


export default {
  signin,
  validate,
  createUser,
  fetchUserInfo,
  fetchRestaurantsByCity
};