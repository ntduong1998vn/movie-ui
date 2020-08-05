import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import {
    GET_MOVIE, GET_MOVIE_ID, GET_MOVIE_BY_GENRE,
} from "../actions";

import {
    getListMoviesSuccess,
    getListMovieError,
    getMovieByIDSuccess,
    getMovieByIDError,
    getMovieByGenreSuccess,
    getMovieByGenreError
} from './actions';

import { queryListMovies, queryMovieByID, queryMovieByGenres} from '../../repository/movie';

export function* watchGetListMovie() {
    yield takeLatest(GET_MOVIE, handleGetListMovie)
};

function* handleGetListMovie({ payload }) {
    const selectedPageSize = payload.selectedPageSize;
    const currentPage = payload.currentPage;
    const selectedOrderOption = payload.selectedOrderOption;
    const search = payload.search;

    try {
        const listMovie = yield call(queryListMovies, selectedPageSize, currentPage, selectedOrderOption, search);
        // console.log(ListMovie);
        if (!listMovie.message) {
            yield put(getListMoviesSuccess(listMovie.result))
        }
        else {
            yield put(getListMovieError(listMovie.message))
        }
    } catch (error) {
        yield put(getListMovieError(error))
    }
}

export function* watchGetMovieByID() {
    yield takeLatest(GET_MOVIE_ID, handleGetMovieByID)
};

function* handleGetMovieByID({ payload }) {
    const id = payload
    try {
        const movie = yield call(queryMovieByID, id);
        if (!movie.message) {
            yield put(getMovieByIDSuccess(movie.result))
        }
        else {
            yield put(getMovieByIDError(movie.message))
        }
    } catch (error) {
        yield put(getMovieByIDError(error))
    }
}

export function* watchGetMovieByGenre() {
    yield takeLatest(GET_MOVIE_BY_GENRE, handleGetMovieByGenre)
};

function* handleGetMovieByGenre({ payload }) {
    const id = payload.id;
    const currentPage = payload.currentPage;
    try {
        const movie = yield call(queryMovieByGenres, id,currentPage);
        // console.log(movie)
        if (!movie.message) {
            yield put(getMovieByGenreSuccess(movie))
        }
        else {
            yield put(getMovieByGenreError(movie.message))
        }
    } catch (error) {
        yield put(getMovieByGenreError(error))
    }
}

export default function* rootSaga() {
    yield all([
        fork(watchGetListMovie),
        fork(watchGetMovieByID),
        fork(watchGetMovieByGenre)
    ]);
}