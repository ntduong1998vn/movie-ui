import {
    GET_EPISODE, GET_EPISODE_ID,
    GET_EPISODE_SUCCESS, GET_EPISODE_ERROR,
    GET_EPISODE_ID_SUCCESS, GET_EPISODE_ID_ERROR,

} from "../actions";

const INIT_STATE = {
    episodes: [],
    isLoading: true,
    error: '',
    totalPages: 1,
    totalepisodeCount: 0,
    sources: [],
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_EPISODE:
            return { ...state, isLoading: true, error: '', episodes: [] };
        case GET_EPISODE_SUCCESS:
            // console.log(action)
            return {
                ...state, isLoading: false, episodes: action.payload,
                totalPages: action.payload.totalPages, totalepisodeCount: action.payload.totalElements, error: ''
            }
        case GET_EPISODE_ERROR:
            return {
                ...state, isLoading: false, episodes: [], error: action.payload.message
            }
        case GET_EPISODE_ID:
            // console.log(action)
            return { ...state, isLoading: true, error: '', episode: {} };
        case GET_EPISODE_ID_SUCCESS:
            // console.log(action)
            return {
                ...state, isLoading: false, sources: action.payload.sources, error: ''
            }
        case GET_EPISODE_ID_ERROR:
            // console.log(action)
            return { ...state, isLoading: false, sources: [], error: action.payload.message }

        default:
            return { ...state };
    }
}