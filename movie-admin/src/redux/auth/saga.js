import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { auth } from "../../helpers/Firebase";
import { loginWithEmailPasswordAsync } from "./../../repository/AuthAPI";
import { ACCESS_TOKEN } from "./../../constants/auth";
import {
  LOGIN_USER,
  REGISTER_USER,
  LOGOUT_USER,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
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
} from "./actions";

export function* watchLoginUser() {
  yield takeEvery(LOGIN_USER, loginWithEmailPassword);
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

function* loginWithEmailPassword({ payload }) {
  const { email, password } = payload.user;
  const { history } = payload;
  try {
    const response = yield call(loginWithEmailPasswordAsync, email, password);

    if (!response.message) {
      localStorage.setItem(ACCESS_TOKEN, response.accessToken);
      yield put(loginUserSuccess({ uid: 1 }));
      history.push("/");
    } else {
      yield put(loginUserError(response.message));
    }
  } catch (error) {
    yield put(loginUserError(error));
  }
}

const registerWithEmailPasswordAsync = async (email, password) =>
  await auth
    .createUserWithEmailAndPassword(email, password)
    .then((authUser) => authUser)
    .catch((error) => error);

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

const forgotPasswordAsync = async (email) => {
  return await auth
    .sendPasswordResetEmail(email)
    .then((user) => user)
    .catch((error) => error);
};

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

const resetPasswordAsync = async (resetPasswordCode, newPassword) => {
  return await auth
    .confirmPasswordReset(resetPasswordCode, newPassword)
    .then((user) => user)
    .catch((error) => error);
};

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
  ]);
}
