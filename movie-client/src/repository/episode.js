import { apiEpisode } from '../constants/const'
import axios from "axios";

export const queryListEpisodes = async (movieId) => {
    return await axios
        .get(
            `${apiEpisode}/${movieId}`
        )
        .then(res => res.data)
        .catch(error => error.response)
}

export const queryEpisodeByID = async (episodeId, movieId) => {
    return await axios
        .get(
            `${apiEpisode}/?episodeId=${episodeId}&movieId=${movieId}`
        )
        .then(res => res.data)
        .catch(error => error.response)
}
