import {
  all,
  call,
  fork,
  put,
  takeEvery,
  takeLatest,
  take,
} from "redux-saga/effects";
import {
  loginWithEmailPasswordAsync,
  getCurrentUser,
} from "./../../repository/AuthAPI";
import { ACCESS_TOKEN } from "./../../constants/auth";
import {
  LOGIN_USER,
  REGISTER_USER,
  LOGOUT_USER,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  GET_USER,
  GET_USER_SUCCESS,
} from "../actions";

import {
  loginUserSuccess,
  loginUserError,
  registerUserSuccess,
  registerUserError,
  forgotPasswordSuccess,
  forgotPasswordError,
  resetPasswordSuccess,
  resetPasswordError,
  getUserSuccess,
} from "./actions";

export function* watchLoginUser() {
  yield takeLatest(LOGIN_USER, loginWithEmailPassword);
}

export function* watchLogoutUser() {
  yield takeEvery(LOGOUT_USER, logout);
}

export function* watchRegisterUser() {
  yield takeEvery(REGISTER_USER, registerWithEmailPassword);
}

export function* watchForgotPassword() {
  yield takeEvery(FORGOT_PASSWORD, forgotPassword);
}

export function* watchResetPassword() {
  yield takeEvery(RESET_PASSWORD, resetPassword);
}

export function* watchGetUserInfor() {
  yield takeEvery(GET_USER, getUserInfor);
}

function* loginWithEmailPassword({ payload }) {
  const { username, password } = payload.user;
  const { history } = payload;
  try {
    const response = yield call(
      loginWithEmailPasswordAsync,
      username,
      password
    );
    if (!response.message) {
      yield put({ type: GET_USER, payload: null });
      const { payload: user } = yield take(GET_USER_SUCCESS);
      console.log(user);
      yield put(loginUserSuccess(user));
      history.push("/");
    } else {
      yield put(loginUserError(response.message));
    }
  } catch (error) {
    console.log(error);
    yield put(loginUserError(error));
  }
}

function* getUserInfor() {
  try {
    const user = yield call(getCurrentUser);
    if (user !== null) {
      yield put(getUserSuccess(user));
    } else {
      console.log("Load user error");
    }
  } catch (error) {
    console.log(error);
  }
}
const registerWithEmailPasswordAsync = async (email, password) => {};

function* registerWithEmailPassword({ payload }) {
  const { email, password } = payload.user;
  const { history } = payload;
  try {
    const registerUser = yield call(
      registerWithEmailPasswordAsync,
      email,
      password
    );
    if (!registerUser.message) {
      localStorage.setItem("user_id", registerUser.user.uid);
      yield put(registerUserSuccess(registerUser));
      history.push("/");
    } else {
      yield put(registerUserError(registerUser.message));
    }
  } catch (error) {
    yield put(registerUserError(error));
  }
}

function* logout({ payload }) {
  const { history } = payload;
  try {
    localStorage.removeItem(ACCESS_TOKEN);
  } catch (error) {}
}

const forgotPasswordAsync = async (email) => {};

function* forgotPassword({ payload }) {
  const { email } = payload.forgotUserMail;
  try {
    const forgotPasswordStatus = yield call(forgotPasswordAsync, email);
    if (!forgotPasswordStatus) {
      yield put(forgotPasswordSuccess("success"));
    } else {
      yield put(forgotPasswordError(forgotPasswordStatus.message));
    }
  } catch (error) {
    yield put(forgotPasswordError(error));
  }
}

const resetPasswordAsync = async (resetPasswordCode, newPassword) => {};

function* resetPassword({ payload }) {
  const { newPassword, resetPasswordCode } = payload;
  try {
    const resetPasswordStatus = yield call(
      resetPasswordAsync,
      resetPasswordCode,
      newPassword
    );
    if (!resetPasswordStatus) {
      yield put(resetPasswordSuccess("success"));
    } else {
      yield put(resetPasswordError(resetPasswordStatus.message));
    }
  } catch (error) {
    yield put(resetPasswordError(error));
  }
}

export default function* rootSaga() {
  yield all([
    fork(watchLoginUser),
    fork(watchLogoutUser),
    fork(watchRegisterUser),
    fork(watchForgotPassword),
    fork(watchResetPassword),
    fork(watchGetUserInfor),
  ]);
}

// export function* loginFlow() {
//   while (true) {
//     const { user, history } = yield take(LOGIN_USER);
//     const token = yield call(authorize, user.email, user.password);
//     if (token) {
//       yield call(Api.storeItem, { token });
//       yield take("LOGOUT");
//       yield call(Api.clearItem, "token");
//     }
//   }
// }

// function* authorize(user, password) {
//   try {
//     const token = yield call(loginWithEmailPasswordAsync, user, password)
//     yield put({type: 'LOGIN_SUCCESS', token})
//     return token
//   } catch(error) {
//     yield put({type: 'LOGIN_ERROR', error})
//   }
// }
