import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addToFavourites} from "../../store/actions/addToFavourites";
import {removeFromFavourites} from "../../store/actions/removeFromFavourites";
import {useLocation} from "react-router-dom";

const Favourite = ({movie}) => {
    const [favourite, setFavourite] = useState(false)
    const favouriteMovies = useSelector(state => state.FavouritesReducer)
    const dispatch = useDispatch();
    const location = useLocation()

    const markFavourite = () => {
        if (!favourite) {
            const favouriteMovie = {
                "poster_path": movie["poster_path"],
                "vote_average": movie['vote_average'],
                "title": movie["title"],
                "id": movie["id"]
            }
            dispatch(addToFavourites(favouriteMovie));
        } else {
            dispatch(removeFromFavourites(movie["id"]));
        }
        setFavourite(!favourite);
    }

    useEffect(() => {
        if (location.pathname === "/favourites" ||
            favouriteMovies.findIndex(favMovie => favMovie.id === movie.id) !== -1) {
            setFavourite(true);
        }
    },[])

    return (
        <div className="rating">
            <input type="radio"
                   className={`mask mask-heart ${favourite ? "bg-red-700" : "bg-white"}`}
                   onClick={markFavourite}/>
        </div>
    );
};

export default Favourite;