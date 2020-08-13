import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  LOGIN_USER_ERROR,
  GET_CURRENT_USER,
  GET_USER_SUCCESS,
} from "../actions";

export const loginUser = (user, history) => ({
  type: LOGIN_USER,
  payload: { user, history },
});

export const loginUserSuccess = (user) => ({
  type: LOGIN_USER_SUCCESS,
  payload: user,
});

export const loginUserError = (message) => ({
  type: LOGIN_USER_ERROR,
  payload: { message },
});

export const logoutUser = (history) => ({
  type: LOGOUT_USER,
  payload: { history },
});

export const getCurrentUser = (history) => ({
  type: GET_CURRENT_USER,
  payload: history,
});
export const getUserSuccess = (user) => ({
  type: GET_USER_SUCCESS,
  payload: user,
});
