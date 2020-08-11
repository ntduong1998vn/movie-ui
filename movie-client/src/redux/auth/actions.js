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

export const forgotPassword = (forgotUserMail, history) => ({
  type: FORGOT_PASSWORD,
  payload: { forgotUserMail, history },
});
export const forgotPasswordSuccess = (forgotUserMail) => ({
  type: FORGOT_PASSWORD_SUCCESS,
  payload: forgotUserMail,
});
export const forgotPasswordError = (message) => ({
  type: FORGOT_PASSWORD_ERROR,
  payload: { message },
});

export const resetPassword = ({ resetPasswordCode, newPassword, history }) => ({
  type: RESET_PASSWORD,
  payload: { resetPasswordCode, newPassword, history },
});
export const resetPasswordSuccess = (newPassword) => ({
  type: RESET_PASSWORD_SUCCESS,
  payload: newPassword,
});
export const resetPasswordError = (message) => ({
  type: RESET_PASSWORD_ERROR,
  payload: { message },
});

export const registerUser = (user, history) => ({
  type: REGISTER_USER,
  payload: { user, history },
});

export const registerUserSuccess = (user) => ({
  type: REGISTER_USER_SUCCESS,
  payload: user,
});
export const registerUserError = (message) => ({
  type: REGISTER_USER_ERROR,
  payload: { message },
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const getUserInfor = () => ({
  type: GET_USER,
  payload: {},
});

export const getUserSuccess = (user) => ({
  type: GET_USER_SUCCESS,
  payload: user,
});

export const getFavoriteListByUserID = (id) => ({
  type: GET_FAVORITE_LIST_BY_USER_ID,
  payload: id
});

export const getFavoriteListByUserIDSuccess = (favorite) => ({
  type: GET_FAVORITE_LIST_BY_USER_ID_SUCCESS,
  payload: favorite
});

export const getFavoriteListByUserIDError = (message) => ({
  type: GET_FAVORITE_LIST_BY_USER_ID_ERROR,
  payload: message
});