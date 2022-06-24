import {GET_MOVIE_LIST} from '../actions/getMovies'

const INITIAL_STATE = {
    movies : [],
    numberOfPages : 1,
}

export default function MoviesReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_MOVIE_LIST:
            return {
                movies: action.payload.movies,
                numberOfPages : action.payload.numberOfPages,
            };
        default:
            return state;
    }
}