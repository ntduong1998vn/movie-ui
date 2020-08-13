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
  register,
} from "./../../repository/AuthAPI";

import {queryListFavorites} from "./../../repository/favorite";

import {
  LOGIN_USER,
  REGISTER_USER,
  FORGOT_PASSWORD,
  GET_USER,
  GET_USER_SUCCESS,  
  GET_FAVORITE_LIST_BY_USER_ID,
  GET_FAVORITE_LIST_BY_USER_ID_SUCCESS,
  GET_FAVORITE_LIST_BY_USER_ID_ERROR
} from "../actions";

import {
  loginUserSuccess,
  loginUserError,
  registerUserSuccess,
  registerUserError, 
  getFavoriteListByUserIDSuccess,
  getFavoriteListByUserIDError,
  forgotPasswordSuccess,
  forgotPasswordError,
  getUserSuccess,
} from "./actions";

export function* watchLoginUser() {
  yield takeLatest(LOGIN_USER, loginWithEmailPassword);
}

// export function* watchRegisterUser() {
//   yield takeEvery(REGISTER_USER, registerWithEmailPassword);
// }

export function* watchForgotPassword() {
  yield takeEvery(FORGOT_PASSWORD, forgotPassword);
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
      history.push("/user");
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

// function* registerWithEmailPassword({ payload }) {
//   const { email, password } = payload.user;
//   const { history } = payload;
//   try {
//     const registerUser = yield call(
//       registerWithEmailPasswordAsync,
//       email,
//       password
//     );
//     if (!registerUser.message) {
//       localStorage.setItem("user_id", registerUser.user.uid);
//       yield put(registerUserSuccess(registerUser));
//       history.push("/");
//     } else {
//       yield put(registerUserError(registerUser.message));
//     }
//   } catch (error) {
//     yield put(registerUserError(error));
//   }
// }

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

/**
 * Register saga
 * Very similar to log in saga!
 */
export function* registerFlow() {
  while (true) {
    // We always listen to `REGISTER_REQUEST` actions
    const request = yield take(REGISTER_USER);
    const { user, history } = request.payload;

    // We call the `authorize` task with the data, telling it that we are registering a user
    // This returns `true` if the registering was successful, `false` if not
    const wasSuccessful = yield call(register, {
      name: user.name,
      username: user.username,
      password: user.password,
      email: user.email,
    });
    // If we could register a user, we send the appropiate actions
    if (wasSuccessful) {
      history.push("/user");
    }
  }
}

export function* watchFavoriteListByUserID() {
  yield takeLatest(GET_FAVORITE_LIST_BY_USER_ID, handleGetFavoriteListByUserID);
}

function* handleGetFavoriteListByUserID({ payload }) {
  const id = payload;
  try {
    const user = yield call(queryListFavorites, id);
    if (!user.message) {
      yield put(getFavoriteListByUserIDSuccess(user.result));
    } else {
      yield put(getFavoriteListByUserIDError(user.message));
    }
  } catch (error) {
    yield put(getFavoriteListByUserIDError(error));
  }
}

export function* watchLoginSocial() {
  yield takeEvery(LOGIN_USER, handleLoginSocial);
}

function* handleLoginSocial({ payload }) {
  const { history } = payload;
  yield put({ type: GET_USER, payload: null });
      const { payload: user } = yield take(GET_USER_SUCCESS);
      console.log(user);
      yield put(loginUserSuccess(user));
      history.push("/user");
}

export default function* rootSaga() {
  yield all([
    fork(watchLoginUser),
    // fork(watchRegisterUser),
    fork(watchForgotPassword),
    fork(watchGetUserInfor),
    fork(watchFavoriteListByUserID),
    fork(registerFlow),
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
