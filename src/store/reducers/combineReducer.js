import {combineReducers} from "redux";
import FavouritesReducer from "./favouritesReducer";
import MoviesReducer from "./moviesReducer";

export default combineReducers({
    FavouritesReducer,
    MoviesReducer,
})