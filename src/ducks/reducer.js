import axios from "axios";
let initial_state = {
  title: "",
  Synopsis: "",
  cover_art: "",
  user: {},
};
const update_title = "update_title";
const update_Synopsis = "update_Synopsis";
const update_cover_art = "update_cover_art";
const SET_USER = "SET_USER";
const SET_REGISTER = "SET_REGISTER";
const GET_USER = "GET_USER";
const LOGOUT = "LOGOUT";

export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case update_title:
      return { ...state, title: action.payload };
    case update_Synopsis:
      return { ...state, Synopsis: action.payload };
    case update_cover_art:
      return { ...state, cover_art: action.payload };
    case SET_USER:
      return { ...state, user: action.payload };
      case SET_REGISTER + "_FULFILLED":
      if (typeof action.payload == "string") {
        return { ...state, message: action.payload }; 
      }
        case GET_USER + "_FULFILLED":
        if (action.payload.username === "guest") {
          return { ...state, guest: action.payload };
        }
        case LOGOUT + "_FULFILLED":
      return { ...state, user: {} };
    default:
      return state;
  }
}

export function updateTitle(name) {
  return {
    type: update_title,
    payload: name
  };
}
export function updateSynopsis(body) {
  return {
    type: update_Synopsis,
    payload: body
  };
}
export function updateCover_art(img) {
  return {
    type: update_cover_art,
    payload: img
  };
}
export function setUser(user) {
  return {
    type: SET_USER,
    payload: user
  };
}
export function requestRegister(
  email,
  password,
  first_name,
  last_name,
  history
) {

  let register = axios
    .post("/auth/register", { email, password, first_name, last_name })
    .then(res => {
      if (typeof res.data !== "string") {
        history.push("/products");
      }
      return res.data;
    });
  return {
    type: SET_REGISTER,
    payload: register
  };
}
export function requestUserData(email, password, history) {
  console.log("inside of request user data function", email, password);
  let data = axios.post("/auth/login", { email, password }).then(res => {
    if (typeof res.data !== "string") {
      history.push("/products");
    }
    return res.data;
  });
  return {
    type: SET_USER,
    payload: data
  };
}

export function requestUser(user) {
  let userdata = axios.get("/auth/guest").then(res => res.data);

  return {
    type: GET_USER,
    payload: userdata
  };
}

export function logout() {
  let userLogout = axios.get("/auth/logout").then(res => res.data);
  return {
    type: LOGOUT,
    payload: userLogout
  };
}
