import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import {
    GET_EPISODE, GET_EPISODE_ID,

} from "../actions";

import {
    getListEpisodesSuccess,
    getListEpisodeError,
    getEpisodeByIDSuccess,
    getEpisodeByIDError,

} from './actions';

import { queryListEpisodes, queryEpisodeByID } from '../../repository/episode';

export function* watchGetListEpisode() {
    yield takeLatest(GET_EPISODE, handleGetListEpisode)
};

function* handleGetListEpisode( {payload} ) {
    const movieId = payload
    // console.log(movieId)
    try {
        const listEpisode = yield call(queryListEpisodes,movieId);
        if (listEpisode !== undefined) {
            yield put(getListEpisodesSuccess(listEpisode))
        }
        else {
            yield put(getListEpisodeError(listEpisode.message))
        }
    } catch (error) {
        yield put(getListEpisodeError(error))
    }
}

export function* watchGetEpisodeByID() {
    yield takeLatest(GET_EPISODE_ID, handleGetEpisodeByID)
};

function* handleGetEpisodeByID({ payload }) {
    const episodeId = payload.episodeId
    const movieId = payload.movieId
    try {
        const episode = yield call(queryEpisodeByID, episodeId,movieId);
        if (episode !== undefined) {
            yield put(getEpisodeByIDSuccess(episode))
        }
        else {
            yield put(getEpisodeByIDError(episode.message))
        }
    } catch (error) {
        yield put(getEpisodeByIDError(error))
    }
}

export default function* rootSaga() {
    yield all([
        fork(watchGetListEpisode),
        fork(watchGetEpisodeByID),
    ]);
}