import { combineReducers } from "redux";

import genreData from "./genre/reducer";
import actorData from "./actor/reducer";
import movieData from "./movie/reducer";
import commentData from "./comment/reducer";
import reviewData from "./review/reducer";
import episodeData from "./episode/reducer";
import authUser from "./auth/reducer";

const reducers = combineReducers({
  genreData,
  actorData,
  movieData,
  commentData,
  reviewData,
  episodeData,
  authUser,
});

export default reducers;
