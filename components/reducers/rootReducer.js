const { stat } = require("react-native-fs");
const { ADD_FAVORITE, DELETE_FAVORITE } = require("../actions/types");
import { ADD_FAVORITE, DELETE_FAVORITE } from "../actions/types";

const initialState = {
  favorite_list: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return { ...state, favorite_list: state.favorite_list.concat({}) };

    case DELETE_FAVORITE:
      return {
        ...state,
        favorite_list: state.favorite_list.filter((item) => item.name !== name),
      };
    default:
      return state;
  }
};
