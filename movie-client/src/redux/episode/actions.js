import {
    GET_EPISODE, GET_EPISODE_ID,
    GET_EPISODE_SUCCESS, GET_EPISODE_ERROR,
    GET_EPISODE_ID_SUCCESS, GET_EPISODE_ID_ERROR,

} from "../actions";

export const getListEpisodes = (id) => ({
    type: GET_EPISODE,
    payload: id
});

export const getListEpisodesSuccess = (listEpisode) => ({
    type: GET_EPISODE_SUCCESS,
    payload: listEpisode
});

export const getListEpisodeError = (message) => ({
    type: GET_EPISODE_ERROR,
    payload: message
});

export const getEpisodeByID = (episodeId,movieId) => ({
    type: GET_EPISODE_ID,
    payload: {episodeId,movieId}
});

export const getEpisodeByIDSuccess = (EPISODE) => ({
    type: GET_EPISODE_ID_SUCCESS,
    payload: EPISODE
});

export const getEpisodeByIDError = (message) => ({
    type: GET_EPISODE_ID_ERROR,
    payload: message
});

