import { apiGenre } from '../constants/const'
import axios from "axios";

export const queryListGenres = async (selectedOrderOption, search) => {
    return await axios.get(`${apiGenre}/?orderBy=${selectedOrderOption.column}&search=${search}`)
        .then(res => res.data.result)
        .catch(error => error.response)
}

