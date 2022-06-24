import axiosInstance from "../../network/axiosInstance";

export const GET_MOVIE_LIST = "GET_MOVIE_LIST";

export const getMovies = (params, searchQuery) => (dispatch) => {
    return axiosInstance
        .get(`${searchQuery ? `/search/movie?query=${searchQuery}` : "/movie/popular"}`, {params})
        .then(response => dispatch({
            type: GET_MOVIE_LIST,
            payload: {
                movies: response.data.results,
                numberOfPages: response.data["total_pages"]
            }
        }))
        .catch(error => console.log(error));
}