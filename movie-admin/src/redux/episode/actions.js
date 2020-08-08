import {
    GET_EPISODE, GET_EPISODE_ID, ADD_EPISODE, EDIT_EPISODE, DELETE_EPISODE,
    GET_LINK, ADD_LINK, EDIT_LINK, DELETE_LINK,
    GET_EPISODE_SUCCESS, GET_EPISODE_ERROR,
    GET_LINK_SUCCESS, GET_LINK_ERROR,
    GET_EPISODE_ID_SUCCESS, GET_EPISODE_ID_ERROR,
    ADD_EPISODE_SUCCESS, ADD_EPISODE_ERROR,
    ADD_LINK_SUCCESS, ADD_LINK_ERROR,
    EDIT_EPISODE_SUCCESS, EDIT_EPISODE_ERROR,
    EDIT_LINK_SUCCESS, EDIT_LINK_ERROR,
    DELETE_EPISODE_SUCCESS, DELETE_EPISODE_ERROR, DELETE_EPISODE_QUESTION,
    DELETE_LINK_SUCCESS, DELETE_LINK_ERROR,

} from "../actions";

export const getListEpisodes = (selectedPageSize, currentPage, selectedOrderOption, search) => ({
    type: GET_EPISODE,
    payload: { selectedPageSize, currentPage, selectedOrderOption, search }
});

export const getListEpisodesSuccess = (listEpisode) => ({
    type: GET_EPISODE_SUCCESS,
    payload: listEpisode
});

export const getListEpisodeError = (message) => ({
    type: GET_EPISODE_ERROR,
    payload: message
});

export const getEpisodeByID = (id) => ({
    type: GET_EPISODE_ID,
    payload: id
});

export const getEpisodeByIDSuccess = (EPISODE) => ({
    type: GET_EPISODE_ID_SUCCESS,
    payload: EPISODE
});

export const getEpisodeByIDError = (message) => ({
    type: GET_EPISODE_ID_ERROR,
    payload: message
});

export const addEpisode = (episodeForm) => ({
    type: ADD_EPISODE,
    payload: episodeForm
});

export const addEpisodeSuccess = (message) => ({
    type: ADD_EPISODE_SUCCESS,
    payload: message
});

export const addEpisodeError = (message) => ({
    type: ADD_EPISODE_ERROR,
    payload: message
});

export const editEpisode = (episodeForm) => ({
    type: EDIT_EPISODE,
    payload: episodeForm
});

export const editEpisodeSuccess = (message) => ({
    type: EDIT_EPISODE_SUCCESS,
    payload: message
});

export const editEpisodeError = (message) => ({
    type: EDIT_EPISODE_ERROR,
    payload: message
});

export const deleteEpisode = (id) => ({ 
    type: DELETE_EPISODE, 
    payload: id
});

export const deleteEpisodeSuccess = (message) => ({
    type: DELETE_EPISODE_SUCCESS,
    payload: message
});

export const deleteEpisodeError = (message) => ({
    type: DELETE_EPISODE_ERROR,
    payload: message
});

export const getLink = (id) => ({
    type: GET_LINK,
    payload: id
})

export const getLinkSuccess = (message) => ({
    type: GET_LINK_SUCCESS,
    payload: message
})

export const getLinkError = (message) => ({
    type: GET_LINK_ERROR,
    payload: message
})

export const addLink = (episodeId, linkForm) => ({
    type: ADD_LINK,
    payload: { episodeId, linkForm }
})

export const addLinkSuccess = (message) => ({
    type: ADD_LINK_SUCCESS,
    payload: message
})

export const addLinkError = (message) => ({
    type: ADD_LINK_ERROR,
    payload: message
})

export const editLink = (episodeId, linkId ,linkForm) => ({
    type: EDIT_LINK,
    payload: { episodeId, linkId, linkForm }
})

export const editLinkSuccess = (message) => ({
    type: EDIT_LINK_SUCCESS,
    payload: message
})

export const editLinkError = (message) => ({
    type: EDIT_LINK_ERROR,
    payload: message
})

export const deleteLink = (episodeId, linkId) => ({
    type: DELETE_LINK,
    payload: { episodeId, linkId}
})

export const deleteLinkSuccess = (message) => ({
    type: DELETE_LINK_SUCCESS,
    payload: message
})

export const deleteLinkError = (message) => ({
    type: DELETE_LINK_ERROR,
    payload: message
})
