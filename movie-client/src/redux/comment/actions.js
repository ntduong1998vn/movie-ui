import { GET_COMMENT,ADD_COMMENT,
    GET_COMMENT_SUCCESS,GET_COMMENT_ERROR,
    ADD_COMMENT_SUCCESS,ADD_COMMENT_ERROR,
} from "../actions";

export const getListComments = (selectedPageSize, currentPage, movieId, userId) => ({
type: GET_COMMENT,
payload: { selectedPageSize, currentPage, movieId, userId}
});

export const getListCommentsSuccess = (listComment) => ({
type: GET_COMMENT_SUCCESS,
payload: listComment
});

export const getListCommentError = (message) => ({ 
type: GET_COMMENT_ERROR,
payload: message
});

export const addComment = (commentForm) =>({
    type: ADD_COMMENT,
    payload: commentForm
});

export const addCommentSuccess = (message) => ({
    type: ADD_COMMENT_SUCCESS,
    payload: message
});

export const addCommentError = (message) => ({
    type: ADD_COMMENT_ERROR,
    payload: message
});

