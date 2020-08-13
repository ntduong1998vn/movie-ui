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
  console.log(config.headers.common["Authorization"]);
  return config;
});

export const setAuthToken = (token) => {
  if (token) {
    //applying token
    localStorage.setItem(ACCESS_TOKEN, token);
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    //deleting the token from header
    delete instance.defaults.headers.common["Authorization"];
  }
};

export default instance;
