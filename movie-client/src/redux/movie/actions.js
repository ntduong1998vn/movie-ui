import {
    GET_MOVIE, GET_MOVIE_ID, GET_MOVIE_BY_GENRE, GET_MOVIE_BY_KEYWORDS, STORE_KEYWORDS,
    GET_MOVIE_SUCCESS, GET_MOVIE_ERROR,
    GET_MOVIE_ID_SUCCESS, GET_MOVIE_ID_ERROR,
    GET_MOVIE_BY_GENRE_SUCCESS, GET_MOVIE_BY_GENRE_ERROR,
    GET_MOVIE_BY_KEYWORD_SUCCESS, GET_MOVIE_BY_KEYWORD_ERROR,
    STORE_KEYWORD_SUCCESS, STORE_KEYWORD_ERROR
} from "../actions";

export const getListMovies = (selectedPageSize, currentPage, selectedOrderOption, search) => ({
    type: GET_MOVIE,
    payload: { selectedPageSize, currentPage, selectedOrderOption, search }
});

export const getListMoviesSuccess = (listMovie) => ({
    type: GET_MOVIE_SUCCESS,
    payload: listMovie
});

export const getListMovieError = (message) => ({
    type: GET_MOVIE_ERROR,
    payload: message
});

export const getMovieByID = (id) => ({
    type: GET_MOVIE_ID,
    payload: id
});

export const getMovieByIDSuccess = (movie) => ({
    type: GET_MOVIE_ID_SUCCESS,
    payload: movie
});

export const getMovieByIDError = (message) => ({
    type: GET_MOVIE_ID_ERROR,
    payload: message
});

export const getMovieByGenre = (id, currentPage) => ({
    type: GET_MOVIE_BY_GENRE,
    payload: { id, currentPage }
});

export const getMovieByGenreSuccess = (listMovie) => ({
    type: GET_MOVIE_BY_GENRE_SUCCESS,
    payload: listMovie
});

export const getMovieByGenreError = (message) => ({
    type: GET_MOVIE_BY_GENRE_ERROR,
    payload: message
});

export const getMovieByKeyword = (currentPage,keyword) => ({
    type: GET_MOVIE_BY_KEYWORDS,
    payload: {keyword, currentPage }
});

export const getMovieByKeywordSuccess = (listMovie) => ({
    type: GET_MOVIE_BY_KEYWORD_SUCCESS,
    payload: listMovie
});

export const getMovieByKeywordError = (message) => ({
    type: GET_MOVIE_BY_KEYWORD_ERROR,
    payload: message
});

export const storeKeywords = (keyword) =>({
    type: STORE_KEYWORDS,
    payload: keyword
})

export const storeKeywordSuccess = (keyword) => ({
    type: STORE_KEYWORD_SUCCESS,
    payload: keyword
})

export const storeKeywordError = (message) => ({
    type: STORE_KEYWORD_ERROR,
    payload: message
});