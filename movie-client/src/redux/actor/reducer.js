import {
    GET_ACTOR,
    GET_ACTOR_SUCCESS, GET_ACTOR_ERROR,
} from "../actions";

const INIT_STATE = {
    items: [],
    isLoading: true,
    error: '',
    totalPages: 1,
    totalItemCount: 0,
};

export default (state = INIT_STATE, action) =>{
    switch (action.type){
        case GET_ACTOR:
            return { ...state, isLoading: true, error: '', items:[]};
        case GET_ACTOR_SUCCESS:
            // console.log(action)
            return { ...state, isLoading: false,items: action.payload.content,
                totalPages:action.payload.totalPages, totalItemCount: action.payload.totalElements, error: ''}
        case GET_ACTOR_ERROR:
            return { ...state, isLoading: false,items:[], error: action.payload.message}
        default:
            return { ...state };
    }
}