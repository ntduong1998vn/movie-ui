import { apiMovie } from '../constants/const'
import axios from "../helpers/axios.instance";

export const queryListMovies = async (selectedPageSize, currentPage, selectedOrderOption, search) => {
    return await axios
        .get(
            `${apiMovie}/?pageSize=${selectedPageSize}&currentPage=${currentPage}&orderBy=${
            selectedOrderOption.column
            }&search=${search}`
        )
        .then(res => res.data)
        .catch(error => error.response)
}

export const queryMovieByID = async (id) => {
    return await axios
        .get(
            `${apiMovie}/${id}`
        )
        .then(res => res.data)
        .catch(error => error.response)
}

export const queryMovieByGenres = async (id,currentPage) => {
    return await axios
        .get(
            `${apiMovie}/genre?id=${id}&currentPage=${currentPage}&pageSize=4`
        )
        .then(res => res.data)
        .catch(error => error.response)
}