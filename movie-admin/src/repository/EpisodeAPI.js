import { apiEpisode } from "../constants/defaultValues";
import axios from "../helpers/axios.instance";

export const queryListEpisodes = async (movieId) => {
  return await axios
    .get(`${apiEpisode}/${movieId}`)
    .then((res) => res.data)
    .catch((error) => error.response);
};

export const queryEpisodeByMovieID = async (episodeId, movieId) => {
  return await axios
    .get(`${apiEpisode}/?episodeId=${episodeId}&movieId=${movieId}`)
    .then((res) => res.data)
    .catch((error) => error.response);
};
export const addEpisode = async (episodeForm) => {
  return await axios.post(`${apiEpisode}/`, episodeForm);
};
export const updateEpisode = async (episodeId, episodeForm) => {};

export const deleteEpisode = async (episodeId) => {};
export const getAllEpisodes = async (movieId) => {
  return await axios.get(`/api/episode/getAll/${movieId}`);
};
export default {
  getAllEpisodes,
};
