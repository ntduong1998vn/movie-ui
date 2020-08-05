import { GET_ACTOR,
    GET_ACTOR_SUCCESS,GET_ACTOR_ERROR,
 } from "../actions";

export const getListActors = (selectedPageSize,currentPage,selectedOrderOption, search) => ({
type: GET_ACTOR,
payload: { selectedPageSize,currentPage,selectedOrderOption, search }
});

export const getListActorsSuccess = (listActor) => ({
type: GET_ACTOR_SUCCESS,
payload: listActor
});

export const getListActorError = (message) => ({ 
type: GET_ACTOR_ERROR,
payload: message
});
