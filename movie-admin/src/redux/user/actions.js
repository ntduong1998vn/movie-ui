import {
    GET_LIST_USER, GET_FAVORITE_LIST_BY_USER_ID, EDIT_USER, DELETE_USER,
    GET_LIST_USER_SUCCESS, GET_LIST_USER_ERROR,
    GET_FAVORITE_LIST_BY_USER_ID_SUCCESS, GET_FAVORITE_LIST_BY_USER_ID_ERROR,
    EDIT_USER_SUCCESS, EDIT_USER_ERROR,
} from "../actions";

export const getListUsers = (selectedPageSize, currentPage, selectedOrderOption, search) => ({
    type: GET_LIST_USER,
    payload: { selectedPageSize, currentPage, selectedOrderOption, search }
});

export const getListUsersSuccess = (listUser) => ({
    type: GET_LIST_USER_SUCCESS,
    payload: listUser
});

export const getListUserError = (message) => ({
    type: GET_LIST_USER_ERROR,
    payload: message
});

export const getFavoriteListByUserID = (id) => ({
    type: GET_FAVORITE_LIST_BY_USER_ID,
    payload: id
});

export const getFavoriteListByUserIDSuccess = (favorite) => ({
    type: GET_FAVORITE_LIST_BY_USER_ID_SUCCESS,
    payload: favorite
});

export const getFavoriteListByUserIDError = (message) => ({
    type: GET_FAVORITE_LIST_BY_USER_ID_ERROR,
    payload: message
});

export const editUser = (userForm) => ({
    type: EDIT_USER,
    payload: userForm 
});

export const editUserSuccess = (message) => ({
    type: EDIT_USER_SUCCESS,
    payload: message
});

export const editUserError = (message) => ({
    type: EDIT_USER_ERROR,
    payload: message
});

