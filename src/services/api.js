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

export default {
  signin,
  validate,
  createUser,
  fetchUserInfo,
};