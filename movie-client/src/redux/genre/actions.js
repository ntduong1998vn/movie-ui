import { GET_GENRE,
         GET_GENRE_SUCCESS,GET_GENRE_ERROR,
    } from "../actions";

export const getListGenres = (selectedOrderOption, search) => ({
    type: GET_GENRE,
    payload: { selectedOrderOption, search }
  });

export const getListGenresSuccess = (listGenre) => ({
    type: GET_GENRE_SUCCESS,
    payload: listGenre
  });

export const getListGenreError = (message) => ({ 
    type: GET_GENRE_ERROR,
    payload: message
});

