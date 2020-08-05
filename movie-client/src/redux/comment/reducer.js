import {
    GET_COMMENT, ADD_COMMENT,
    GET_COMMENT_SUCCESS, GET_COMMENT_ERROR,
    ADD_COMMENT_SUCCESS, ADD_COMMENT_ERROR,
} from "../actions";

const INIT_STATE = {
    comments: [],
    isLoading: true,
    error: '',
    totalElements: 0,
    totalPages: 1,
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_COMMENT:
            return { ...state, isLoading: true, error: '', comments: [] };
        case GET_COMMENT_SUCCESS:
            // console.log(action)
            return {
                ...state, isLoading: false, comments: action.payload.content,
                totalPages: action.payload.totalPages, totalItemCount: action.payload.totalElements, error: ''

            }
        case GET_COMMENT_ERROR:
            return {
                ...state, isLoading: false, comments: [], error: action.payload.message
            }
        case ADD_COMMENT:
            // console.log(action)
            return { ...state, isLoading: false, error: '' }
        case ADD_COMMENT_SUCCESS:
            // console.log(action)
            return { ...state, isLoading: false, error: '' };
        case ADD_COMMENT_ERROR:
            return { ...state, isLoading: false, error: action.payload.message }
        default:
            return { ...state };
    }
}