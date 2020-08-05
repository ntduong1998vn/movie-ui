import { apiComment} from '../constants/const';
import axios from "axios";

export const queryListComments = async (selectedPageSize, currentPage, movieId, userId) => {
    return await axios
        .get(
            `${apiComment}/search?pageSize=${selectedPageSize}&currentPage=${currentPage}&movieId=${
                movieId}&userId=${userId}`
        )
        .then(res => res.data)
        .catch(error => error.response)
}

export const addComment = async (commentForm) => {
    return await axios.post(`${apiComment}/`, commentForm)
     .then(res => res.data)
     .catch(error => error.response)
 }