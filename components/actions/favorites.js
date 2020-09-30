import { ADD_FAVORITE, DELETE_FAVORITE } from "./types";

export const addFav = (station) => ({
  type: ADD_FAVORITE,
  data: station,
});

export const deleteFav = (station) => ({
  type: DELETE_FAVORITE,
  data: station,
});
