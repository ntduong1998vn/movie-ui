// GET GENRE
export const GET_GENRE = "GET_GENRE";
export const GET_GENRE_SUCCESS = "GET_GENRE_SUCCESS";
export const GET_GENRE_ERROR = "GET_GENRE_ERROR";

//GET ACTOR
export const GET_ACTOR = "GET_ACTOR";
export const GET_ACTOR_SUCCESS = "GET_ACTOR_SUCCESS";
export const GET_ACTOR_ERROR = "GET_ACTOR_ERROR";

//GET MOVIE
export const GET_MOVIE = "GET_MOVIE";
export const GET_MOVIE_ID = "GET_MOVIE_ID";
export const GET_MOVIE_BY_GENRE = "GET_MOVIE_BY_GENRE";
export const GET_MOVIE_BY_KEYWORDS = "GET_MOVIE_BY_KEYWORDS";
export const STORE_KEYWORDS = "STORE_KEYWORDS";
export const GET_MOVIE_SUCCESS = "GET_MOVIE_SUCCESS";
export const GET_MOVIE_ERROR = "GET_MOVIE_ERROR";
export const GET_MOVIE_ID_SUCCESS = "GET_MOVIE_ID_SUCCESS";
export const GET_MOVIE_ID_ERROR = "GET_MOVIE_ID_ERROR";
export const GET_MOVIE_BY_GENRE_SUCCESS = "GET_MOVIE_BY_GENRE_SUCCESS";
export const GET_MOVIE_BY_GENRE_ERROR = "GET_MOVIE_BY_GENRE_ERROR";
export const GET_MOVIE_BY_KEYWORD_SUCCESS = "GET_MOVIE_BY_KEYWORD_SUCCESS";
export const GET_MOVIE_BY_KEYWORD_ERROR = "GET_MOVIE_BY_KEYWORD_ERROR";
export const STORE_KEYWORD_SUCCESS = "STORE_KEYWORD_SUCCESS";
export const STORE_KEYWORD_ERROR = "STORE_KEYWORD_ERROR";

//GET, ADD COMMENT
export const GET_COMMENT = "GET_COMMENT";
export const ADD_COMMENT = "ADD_COMMENT";
export const GET_COMMENT_SUCCESS = "GET_COMMENT_SUCCESS";
export const GET_COMMENT_ERROR = "GET_COMMENT_ERROR";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_ERROR = "ADD_COMMNET_ERROR";

//GET,ADD REVIEW
export const GET_REVIEW = "GET_REVIEW";
export const ADD_REVIEW = "ADD_REVIEW";
export const GET_REVIEW_SUCCESS = "GET_REVIEW_SUCCESS";
export const GET_REVIEW_ERROR = "GET_REVIEW_ERROR";
export const ADD_REVIEW_SUCCESS = "ADD_REVIEW_SUCCESS";
export const ADD_REVIEW_ERROR = "ADD_REVIEW_ERROR";

//GET, EPISODE
export const GET_EPISODE = "GET_EPISODE";
export const GET_EPISODE_ID = "GET_EPISODE_ID";
export const GET_EPISODE_SUCCESS = "GET_EPISODE_SUCCESS";
export const GET_EPISODE_ERROR = "GET_EPISODE_ERROR";
export const GET_EPISODE_ID_SUCCESS = "GET_EPISODE_ID_SUCCESS";
export const GET_EPISODE_ID_ERROR = "GET_EPISODE_ID_ERROR";

// GET, EDIT USER
export const GET_USER = "GET_USER";
export const GET_FAVORITE_LIST_BY_USER_ID = "GET_FAVORITE_LIST_BY_USER_ID";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_ERROR = "GET_USER_ERROR";
export const GET_FAVORITE_LIST_BY_USER_ID_SUCCESS =
  "GET_FAVORITE_LIST_BY_USER_ID_SUCCESS";
export const GET_FAVORITE_LIST_BY_USER_ID_ERROR =
  "GET_FAVORITE_LIST_BY_USER_ID_ERROR";
  
/* AUTH */
export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";
export const REGISTER_USER = "REGISTER_USER";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_ERROR = "REGISTER_USER_ERROR";
export const LOGOUT_USER = "LOGOUT_USER";
export const FORGOT_PASSWORD = "FORGOT_PASSWORD";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_ERROR = "FORGOT_PASSWORD_ERROR";
export const RESET_PASSWORD = "RESET_PASSWORD";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_ERROR = "RESET_PASSWORD_ERROR";

export * from "./genre/actions";
export * from "./actor/actions";
export * from "./movie/actions";
export * from "./comment/actions";
export * from "./review/actions";
export * from "./episode/actions";
export * from "./auth/actions";
