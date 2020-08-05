import {
    GET_MOVIE, GET_MOVIE_ID,GET_MOVIE_BY_GENRE,
    GET_MOVIE_SUCCESS, GET_MOVIE_ERROR,
    GET_MOVIE_ID_SUCCESS, GET_MOVIE_ID_ERROR,
    GET_MOVIE_BY_GENRE_SUCCESS,GET_MOVIE_BY_GENRE_ERROR
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

export const getMovieByGenre= (id, currentPage) => ({
    type: GET_MOVIE_BY_GENRE,
    payload: {id,currentPage}
});

export const getMovieByGenreSuccess = (listMovie) => ({
    type: GET_MOVIE_BY_GENRE_SUCCESS,
    payload: listMovie
});

export const getMovieByGenreError = (message) => ({
    type: GET_MOVIE_BY_GENRE_ERROR,
    payload: message
});

