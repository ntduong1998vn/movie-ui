import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  LOGIN_USER_ERROR,
  REGISTER_USER_ERROR,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
  GET_USER,
  GET_USER_SUCCESS,
  GET_FAVORITE_LIST_BY_USER_ID,
  GET_FAVORITE_LIST_BY_USER_ID_SUCCESS,
  GET_FAVORITE_LIST_BY_USER_ID_ERROR
} from "../actions";
import { ACCESS_TOKEN } from "../../constants/auth";

const INIT_STATE = {
  user: localStorage.getItem("user_id"),
  forgotUserMail: "",
  newPassword: "",
  resetPasswordCode: "",
  loading: false,
  error: "",
  isAuth: false,
  favorite: []
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loading: true, error: "" };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: "",
        isAuth: true,
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        loading: false,
        user: "",
        error: action.payload.message,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuth: true,
      };
    case FORGOT_PASSWORD:
      return { ...state, loading: true, error: "" };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        forgotUserMail: action.payload,
        error: "",
      };
    case FORGOT_PASSWORD_ERROR:
      return {
        ...state,
        loading: false,
        forgotUserMail: "",
        error: action.payload.message,
      };
    case RESET_PASSWORD:
      return { ...state, loading: true, error: "" };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        newPassword: action.payload,
        resetPasswordCode: "",
        error: "",
      };
    case RESET_PASSWORD_ERROR:
      return {
        ...state,
        loading: false,
        newPassword: "",
        resetPasswordCode: "",
        error: action.payload.message,
      };
    case REGISTER_USER:
      return { ...state, loading: true, error: "" };
    case REGISTER_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload.uid, error: "" };
    case REGISTER_USER_ERROR:
      return {
        ...state,
        loading: false,
        user: "",
        error: action.payload.message,
      };
    case LOGOUT_USER:
      localStorage.removeItem(ACCESS_TOKEN);
      return { ...state, user: null, error: "", isAuth: false };
    case GET_FAVORITE_LIST_BY_USER_ID:
      // console.log(action)
      return { ...state, isLoading: true, error: '', favorite: [] };
    case GET_FAVORITE_LIST_BY_USER_ID_SUCCESS:
      // console.log(action)
      return {
        ...state, isLoading: false, favorite: action.payload, error: ''
      }
    case GET_FAVORITE_LIST_BY_USER_ID_ERROR:
      // console.log(action)
      return { ...state, isLoading: false, favorite: [], error: action.payload.message }
    default:
      return { ...state };
  }
};
