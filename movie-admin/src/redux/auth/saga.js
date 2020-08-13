import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { auth } from "../../helpers/Firebase";
import { loginWithEmailPasswordAsync } from "./../../repository/AuthAPI";
import { ACCESS_TOKEN } from "./../../constants/auth";
import { LOGIN_USER, LOGOUT_USER } from "../actions";

import { loginUserSuccess, loginUserError } from "./actions";

export function* watchLoginUser() {
  yield takeEvery(LOGIN_USER, loginWithEmailPassword);
}

export function* watchLogoutUser() {
  yield takeEvery(LOGOUT_USER, logout);
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

function* logout({ payload }) {
  const { history } = payload;
  try {
    localStorage.removeItem(ACCESS_TOKEN);
  } catch (error) {}
}

export default function* rootSaga() {
  yield all([fork(watchLoginUser), fork(watchLogoutUser)]);
}
