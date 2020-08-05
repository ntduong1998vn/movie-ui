import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import {
    GET_ACTOR
} from "../actions";

import {
    getListActorsSuccess,
    getListActorError,
} from './actions';

import { queryListActors } from '../../repository/actor';

export function* watchGetListActor() {
    yield takeLatest(GET_ACTOR, handleGetListActor)
};

function* handleGetListActor({ payload }) {
    const selectedPageSize = payload.selectedPageSize;
    const currentPage = payload.currentPage;
    const selectedOrderOption = payload.selectedOrderOption;
    const search = payload.search;

    try {
        const listActor = yield call(queryListActors, selectedPageSize, currentPage, selectedOrderOption, search);
        // console.log(listActor);
        if (listActor !== undefined) {
            yield put(getListActorsSuccess(listActor))
        }
        else {
            yield put(getListActorError("Lõi rồi"))
        }
    } catch (error) {
        yield put(getListActorError(error))
    }
}


export default function* rootSaga() {
    yield all([
        fork(watchGetListActor),
    ]);
}