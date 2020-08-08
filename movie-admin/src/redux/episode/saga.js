import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import {
    GET_EPISODE, GET_EPISODE_ID, ADD_EPISODE, EDIT_EPISODE, DELETE_EPISODE,
    
} from "../actions";

import {
    getListEpisodesSuccess,
    getListEpisodeError,
    getEpisodeByIDSuccess,
    getEpisodeByIDError,
    addEpisodeSuccess,
    addEpisodeError,
    editEpisodeSuccess,
    editEpisodeError,
    deleteEpisodeSuccess,
    deleteEpisodeError
} from './actions';

import { queryListEpisodes, queryEpisodeByMovieID, addEpisode, updateEpisode, deleteEpisode } from '../../repository/episode';

export function* watchGetListEpisode() {
    yield takeLatest(GET_EPISODE, handleGetListEpisode)
};

function* handleGetListEpisode({ payload }) {
    const selectedPageSize = payload.selectedPageSize;
    const currentPage = payload.currentPage;
    const selectedOrderOption = payload.selectedOrderOption;
    const search = payload.search;

    try {
        const listEpisode = yield call(queryListEpisodes, selectedPageSize, currentPage, selectedOrderOption, search);
        // console.log(ListEpisode);
        if (!listEpisode.message) {
            yield put(getListEpisodesSuccess(listEpisode.result))
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
    const id = payload
    try {
        const episode = yield call(queryEpisodeByMovieID, id);
        if (!episode.message) {
            yield put(getEpisodeByIDSuccess(episode.result))
        }
        else {
            yield put(getEpisodeByIDError(episode.message))
        }
    } catch (error) {
        yield put(getEpisodeByIDError(error))
    }
}

export function* watchAddEpisode() {
    yield takeLatest(ADD_EPISODE, handleAddEpisode)
}

function* handleAddEpisode({ payload }) {
    const episodeForm = payload;
    // console.log(EPISODEForm)
    try {
        const newEpisode = yield call(addEpisode, episodeForm);
        console.log(newEpisode);
        if (newEpisode.success === "CREATED") {
            yield put(addEpisodeSuccess(newEpisode.message))
        }
        else {
            yield put(addEpisodeError(newEpisode.message))
        }
    } catch (error) {
        yield put(addEpisodeError(error))
    }
}

export function* watchEditEpisode() {
    yield takeLatest(EDIT_EPISODE, handleEditEpisode)
}

function* handleEditEpisode({ payload }) {
    const episodeForm = payload.EPISODEForm;
    const id = payload.id;
    console.log(payload)
    try {
        const editEpisode = yield call(updateEpisode, id, episodeForm);
        console.log(editEpisode);
        if (editEpisode.success === "OK") {
            yield put(editEpisodeSuccess(editEpisode.message))
        }
        else {
            yield put(editEpisodeError(editEpisode.message))
        }
    } catch (error) {
        yield put(editEpisodeError(error))
    }
}
export function* watchDeleteEpisode() {
    yield takeLatest(DELETE_EPISODE, handleDeleteEpisode)
}

function* handleDeleteEpisode({ payload }) {
    const id = payload;
    console.log(id)
    try {
        const deleted = yield call(deleteEpisode, id);
        console.log(deleted);
        if (deleted.success === "OK") {
            yield put(deleteEpisodeSuccess(deleted.message))
        }
        else {
            yield put(deleteEpisodeError(deleted.message))
        }
    } catch (error) {
        yield put(deleteEpisodeError(error))
    }
}
export default function* rootSaga() {
    yield all([
        fork(watchGetListEpisode),
        fork(watchGetEpisodeByID),
        fork(watchAddEpisode),
        fork(watchEditEpisode),
        fork(watchDeleteEpisode),
    ]);
}