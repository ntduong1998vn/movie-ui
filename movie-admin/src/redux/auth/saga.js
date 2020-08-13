import {
  all,
  call,
  fork,
  put,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";

import {
  loginWithEmailPasswordAsync,
  getCurrentUser,
} from "./../../repository/AuthAPI";
import { ACCESS_TOKEN } from "./../../constants/auth";
import { LOGIN_USER, LOGOUT_USER, GET_CURRENT_USER } from "../actions";

import { loginUserSuccess, loginUserError, getUserSuccess } from "./actions";

export function* watchLoginUser() {
  yield takeEvery(LOGIN_USER, loginWithEmailPassword);
}

export function* watchLogoutUser() {
  yield takeEvery(LOGOUT_USER, logout);
}

export function* watchGetCurrentUser() {
  yield takeLatest(GET_CURRENT_USER, getUserInfor);
}
function* getUserInfor(action) {
  const history = action.payload;
  try {
    const user = yield call(getCurrentUser);
    console.log(user.error);
    if (user.id !== undefined) {
      yield put(getUserSuccess(user));
      history.push("/app/manager/genres");
    } else {
      console.log("Load user error");
    }
  } catch (error) {
    console.log(error);
  }
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

function* logout({ payload }) {
  const { history } = payload;
  try {
    localStorage.removeItem(ACCESS_TOKEN);
    history.push("/");
  } catch (error) { }
}

export default function* rootSaga() {
  yield all([
    fork(watchLoginUser),
    fork(watchLogoutUser),
    fork(watchGetCurrentUser),
  ]);
}
