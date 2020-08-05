import { all, call, fork, put, takeLatest,takeEvery } from 'redux-saga/effects';

import {
    GET_GENRE,
} from "../actions";

import {
    getListGenresSuccess,
    getListGenreError,
} from './actions';

import { queryListGenres } from '../../repository/genre';

export function* watchGetListGenre() {
    yield takeEvery(GET_GENRE, handleGetListGenre)
};

function* handleGetListGenre({ payload }) {
    const selectedOrderOption = payload.selectedOrderOption;
    const search = payload.search;

    try {
        const listGenre = yield call(queryListGenres, selectedOrderOption, search);
        // console.log(listGenre);
        if (!listGenre.message) {
            yield put(getListGenresSuccess(listGenre))
        }
        else {
            yield put(getListGenreError(listGenre.message))
        }
    } catch (error) {
        yield put(getListGenreError(error))
    }
}



export default function* rootSaga() {
    yield all([
        fork(watchGetListGenre),

    ]);
}