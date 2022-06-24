import React from 'react';
import {useSelector} from "react-redux";
import MovieCard from "../components/MovieCard/movieCard";

const Favourites = () => {
    const favouriteMovies = useSelector(state => state.FavouritesReducer)

    return (
        <main className={"container grid xl:grid-cols-5 sm:grid-cols-2 md:grid-cols-3 gap-y-12 mt-16 gap-7"}>
            {favouriteMovies?.map(movie => (
                <div key={movie.id}>
                    <MovieCard movie={movie}/>
                </div>
            ))}
        </main>
    );
};

export default Favourites;