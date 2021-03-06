import axios from "axios";
import { API_BASE_URL, ACCESS_TOKEN } from "../constants/auth";

// Create instance
const instance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(function (config) {
  let token = localStorage.getItem(ACCESS_TOKEN);
  config.headers.common["Authorization"] = `Bearer ${token}`;
  // console.log(config.headers.common["Authorization"]);
  console.log(config.url)
  return config;
});

export const setAuthToken = (token) => {
  if (token) {
    //applying token
    console.log(token);
    localStorage.setItem(ACCESS_TOKEN, token);
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    //deleting the token from header
    delete instance.defaults.headers.common["Authorization"];
  }
};

export default instance;

// instance.interceptors.request.use(
//   (req) => {
//     if (axios.defaults.headers.common["Authorization"]) return req;
//     throw { message: "the token is not available" };
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// //on successful response
// instance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     const fallbackValue = [
//       {
//         userId: "Not authorized",
//         id: "aerw15311sq",
//         title: "Please try     again",
//         completed: false,
//       },
//     ];
//     return Promise.reject(fallbackValue);
//   }
// );
