

/************************************ USING Redux Thunk  *************************************************/

import MovieCard from "../components/MovieCard/movieCard";
import {useEffect, useState} from "react";
import Pagination from "../components/pagination/pagination";
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../store/actions/getMovies";
import {useContext} from "react";
import LanguageContext from "../context/language";

const Movies = () => {
    const [currentPageNumber, setCurrentPageNumber] = useState(1);
    const [searchPageNumber, setSearchPageNumber] = useState(1);
    const currentLocation = useLocation();
    const [previousLocation, setPreviousLocation] = useState(currentLocation);
    const numberOfPages = useSelector(state => state.MoviesReducer.numberOfPages);
    const movies = useSelector(state => state.MoviesReducer.movies);
    const dispatch = useDispatch();
    const {language} = useContext(LanguageContext);


    useEffect(() => {
        dispatch(getMovies({
            language,
            page: currentLocation.state ?
                previousLocation.state !== currentLocation.state ? 1 : searchPageNumber
                : currentPageNumber,
        }, currentLocation.state));

        if (previousLocation.state !== currentLocation.state) {
            setPreviousLocation(currentLocation);
            setSearchPageNumber(1);
        }
    }, [language, currentPageNumber, searchPageNumber, currentLocation.state])


    /**************************************END of Redux Thunk******************************************************/


 /************************************  USING Regular Redux  **************************************************/

    /*
    import MovieCard from "../components/MovieCard/movieCard";
    import {useEffect, useState} from "react";
    import axiosInstance from "../network/axiosInstance";
    import Pagination from "../components/pagination/pagination";
    import {useLocation} from "react-router-dom";
    import {useContext} from "react";
    import LanguageContext from "../context/language";

    const Movies = () => {
        const [movies, setMovies] = useState([]);
        const [currentPageNumber, setCurrentPageNumber] = useState(1);
        const [searchPageNumber, setSearchPageNumber] = useState(1);
        const [numberOfPages, setNumberOfPages] = useState(1);
        const currentLocation = useLocation();
        const [previousLocation, setPreviousLocation] = useState(currentLocation);
        const {language} = useContext(LanguageContext);

        useEffect(() => {
            axiosInstance
                .get(`${currentLocation.state ?
                        `/search/movie?query=${currentLocation.state}` : "/movie/popular"}`,
                    {
                        params: {
                            language,
                            page: currentLocation.state ?
                                previousLocation.state !== currentLocation.state ? 1 : searchPageNumber
                                : currentPageNumber,

                        }
                    })
                .then(response => {
                    setMovies(response.data.results);
                    setNumberOfPages(response.data["total_pages"])
                })
                .catch(error => console.log(error));

            if (previousLocation.state !== currentLocation.state) {
                setPreviousLocation(currentLocation);
                setSearchPageNumber(1);
            }

        }, [language,currentPageNumber, searchPageNumber, currentLocation.state])
    */

/*****************************************End of Regular Redux******************************************/

    function setPageQueryParameter(page, searchFlag) {
        searchFlag ? setSearchPageNumber(page) : setCurrentPageNumber(page);
    }

    return (
        <main>
            <div className={"container grid xl:grid-cols-5 sm:grid-cols-2 md:grid-cols-3 gap-y-12 mt-16 gap-7"}>
                {movies.map(movie => (
                    <div key={movie.id} className={"grid grid-rows-1"}>
                        <MovieCard movie={movie}/>
                    </div>
                ))}
            </div>
            {numberOfPages > 1 &&
                <div className={"flex justify-center"}>
                    <Pagination setPage={setPageQueryParameter}
                                currentPage={currentPageNumber}
                                searchPage={searchPageNumber}
                                numberOfPages={numberOfPages}
                    />
                </div>
            }
        </main>
    );
};

export default Movies;