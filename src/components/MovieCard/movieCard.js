import {Link} from "react-router-dom";
import Favourite from "../favourite/favourite";

const MovieCard = ({movie}) => {

    return (
        <div className={`card bg-zinc-800 text-white shadow-xl relative`}>
            <div className="text-center bg-yellow-500">{movie['vote_average']}</div>
            <div className={"absolute right-3 top-9"}>
                <Favourite movie={movie}/>
            </div>
            <figure >
                <img src={movie["poster_path"]? `https://image.tmdb.org/t/p/w500${movie["poster_path"]}` :
                "https://via.placeholder.com/500x750.png"} alt="moviePoster"/>
            </figure>
            <div className="card-body p-4 justify-center">
                <Link className="font-bold hover:text-primary" to={`/movies/${movie.id}`}>
                    {movie.title}
                </Link>
            </div>
        </div>
    );
};

export default MovieCard;