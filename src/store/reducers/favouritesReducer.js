import {ADD_FAVOURITES} from "../actions/addToFavourites";
import {REMOVE_FAVOURITES} from "../actions/removeFromFavourites";

const favouriteMovies = []

export default function FavouritesReducer(state = favouriteMovies, action) {
    switch (action.type) {
        case ADD_FAVOURITES:
            if (state.findIndex(movie => movie.id === action.payload.id) === -1) {
                return [...state,action.payload]
            }
            break;
        case REMOVE_FAVOURITES:
            const index = state.findIndex(movie => movie.id === action.payload)
            const movies = [...state]
            movies.splice(index, 1);
            return movies;
        default:
            return state;
    }
}