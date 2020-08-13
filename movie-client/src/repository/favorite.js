import { apiFavorite } from '../constants/const'
import axios from "./../helpers/axios.instance";

export const queryListFavorites = async (id) => {
  return await axios
    .get(`${apiFavorite}/${id}`)
    .then((res) => res.data)
    .catch((error) => error.response);
};

export const addFavorite = async (favoriteForm) => {
  return await axios
    .post(`${apiFavorite}/`, favoriteForm)
}

export const updateCurrentTime = async (favoriteForm) => {
  return await axios
    .put(`${apiFavorite}/0`, favoriteForm)
}

export const removeFavorite = async (id) => {
  return await axios
    .delete(`${apiFavorite}/remove/${id}`)
}

export const getCurrentTimeByMovieId = async (id) => {
  return await axios
    .get(`${apiFavorite}/${id}/current-time`)
}

export const checkExistsFavorite = async (id) => {
  return await axios
    .get(`${apiFavorite}/check-exist/${id}`)
}
export default { addFavorite, updateCurrentTime, removeFavorite, getCurrentTimeByMovieId, checkExistsFavorite };