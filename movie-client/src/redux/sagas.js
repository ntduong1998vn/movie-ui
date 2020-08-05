import { all } from "redux-saga/effects";

import genreSaga from "./genre/saga";
import actorSaga from "./actor/saga";
import movieSaga from "./movie/saga";
import commentSaga from "./comment/saga";
import reviewSaga from "./review/saga";
import episodeSaga from "./episode/saga";
import authSaga from "./auth/saga";

export default function* rootSaga(getState) {
  yield all([
    genreSaga(),
    actorSaga(),
    movieSaga(),
    commentSaga(),
    reviewSaga(),
    episodeSaga(),
    authSaga(),
  ]);
}
