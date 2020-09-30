import { createStore, combineReducers } from "redux";
import rootReducer1 from "./reducers/rootReducer";

const rootReducer = combineReducers({
  favorites: rootReducer1,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
