import {
    GET_GENRE, 
    GET_GENRE_SUCCESS, GET_GENRE_ERROR,

} from "../actions";

const INIT_STATE = {
    genres: [],
    isLoading: true,
    error: '',
};

export default (state = INIT_STATE, action) =>{
    switch (action.type){
        case GET_GENRE:
            return { ...state, isLoading: true, error: '', items:[]};
        case GET_GENRE_SUCCESS:
            // console.log(action)
            return { ...state, isLoading: false,genres: action.payload, error: ''}
        case GET_GENRE_ERROR:
            return { ...state, isLoading: false,genres:[], error: action.payload.message}
        default:
            return { ...state };
    }
}