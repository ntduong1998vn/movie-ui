import {
    GET_MOVIE, GET_MOVIE_ID, GET_MOVIE_BY_GENRE, GET_MOVIE_BY_KEYWORDS, STORE_KEYWORDS,
    GET_MOVIE_SUCCESS, GET_MOVIE_ERROR,
    GET_MOVIE_ID_SUCCESS, GET_MOVIE_ID_ERROR,
    GET_MOVIE_BY_GENRE_SUCCESS, GET_MOVIE_BY_GENRE_ERROR,
    GET_MOVIE_BY_KEYWORD_SUCCESS, GET_MOVIE_BY_KEYWORD_ERROR,
    STORE_KEYWORD_SUCCESS, STORE_KEYWORD_ERROR
} from "../actions";

const INIT_STATE = {
    movies: [],
    isLoading: true,
    error: '',
    totalPages: 1,
    totalmovieCount: 0,
    movie: {
        id: 0,
        title: "",
        quality: "",
        imdb: 0,
        runtime: 0,
        release_date: null,
        overview: "",
        popularity: 0,
        language: "",
        poster: null,
        view: 0,
        nation: "",
        adult: 0,
        visible: false,
        genres: [{
            id: 0,
            name: "",
        },
        {
            id: 1,
            name: "",
        },
        ],
        characters: [],
        episodes: []
    },
    movieByGenre: [],
    keyword: '',
    movieBySearches: [],
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_MOVIE:
            return { ...state, isLoading: true, error: '', movies: [] };
        case GET_MOVIE_SUCCESS:
            // console.log(action)
            return {
                ...state, isLoading: false, movies: action.payload.content,
                totalPages: action.payload.totalPages, totalmovieCount: action.payload.totalElements, error: ''
            }
        case GET_MOVIE_ERROR:
            return {
                ...state, isLoading: false, movies: [], error: action.payload.message
            }
        case GET_MOVIE_ID:
            // console.log(action)
            return { ...state, isLoading: true, error: '', movie: {} };
        case GET_MOVIE_ID_SUCCESS:
            // console.log(action)
            return {
                ...state, isLoading: false, movie: action.payload, error: ''
            }
        case GET_MOVIE_ID_ERROR:
            // console.log(action)
            return { ...state, isLoading: false, movie: {}, error: action.payload.message }
        case GET_MOVIE_BY_GENRE:
            // console.log(action)
            return { ...state, isLoading: true, error: '', movieByGenre: [] };
        case GET_MOVIE_BY_GENRE_SUCCESS:
            console.log(action)
            return {
                ...state, isLoading: false, movieByGenre: action.payload.content, error: '',
                totalPages: action.payload.totalPages, totalmovieCount: action.payload.totalElements
            }
        case GET_MOVIE_BY_GENRE_ERROR:
            // console.log(action)
            return { ...state, isLoading: false, movieByGenre: [], error: action.payload.message }
        case GET_MOVIE_BY_KEYWORDS:
            // console.log(action)
            return { ...state, isLoading: true, error: '', movieBySearches: [] };
        case GET_MOVIE_BY_KEYWORD_SUCCESS:
            console.log(action)
            return {
                ...state, isLoading: false, movieBySearches: action.payload.content, error: '',
                totalPages: action.payload.totalPages, totalmovieCount: action.payload.totalElements
            }
        case GET_MOVIE_BY_KEYWORD_ERROR:
            // console.log(action)
            return { ...state, isLoading: false, movieBySearches: [], error: action.payload.message }
        case STORE_KEYWORDS:
            console.log(action)
            return { ...state, isLoading: true, error: '', keyword:'' };
        case STORE_KEYWORD_SUCCESS:
            console.log(action)
            return {
                ...state, isLoading: false, keyword: action.payload
            }
        case STORE_KEYWORD_ERROR:
            console.log(action)
            return { ...state, isLoading: false, keyword:'', error: action.payload }
        default:
            return { ...state };
    }
}