import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import {
    GET_COMMENT, ADD_COMMENT
} from "../actions";

import {
    getListCommentsSuccess,
    getListCommentError,
    addCommentSuccess,
    addCommentError,
} from './actions';

import { queryListComments, addComment } from '../../repository/comment';

export function* watchGetListComment() {
    yield takeLatest(GET_COMMENT, handleGetListComment)
};

function* handleGetListComment({ payload }) {
    const selectedPageSize = payload.selectedPageSize;
    const currentPage = payload.currentPage;
    const movieId = payload.movieId;
    const userId = payload.userId;

    try {
        const listComment = yield call(queryListComments, selectedPageSize, currentPage, movieId, userId);
        // console.log(ListComment);
        if (!listComment.message) {
            yield put(getListCommentsSuccess(listComment))
        }
        else {
            yield put(getListCommentError(listComment.message))
        }
    } catch (error) {
        yield put(getListCommentError(error))
    }
}

export function* watchAddComment() {
    yield takeLatest(ADD_COMMENT, handleAddComment)
};

function* handleAddComment({ payload }) {
    const commentForm = payload;
    // console.log(commentForm)
    try {
        const newComment = yield call(addComment, commentForm);
        // console.log(newComment);
        if (newComment.success === "CREATED") {
            yield put(addCommentSuccess(newComment.message))
        }
        else {
            yield put(addCommentError(newComment.message))
        }
    } catch (error) {
        yield put(addCommentError(error))
    }
}

export default function* rootSaga() {
    yield all([
        fork(watchGetListComment),
        fork(watchAddComment),
    ]);
}