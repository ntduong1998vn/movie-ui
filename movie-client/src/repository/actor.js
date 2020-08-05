import { apiActor } from '../constants/const'
import axios from "axios";

export const queryListActors = async (selectedPageSize,currentPage,selectedOrderOption, search) => {
    return await axios
    .get(
      `${apiActor}/?pageSize=${selectedPageSize}&currentPage=${currentPage-1}&orderBy=${
      selectedOrderOption.column
      }&search=${search}`
    )
        .then(res => res.data)
        .catch(error => error.response)
}
