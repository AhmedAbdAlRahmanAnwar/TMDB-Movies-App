import {Link, useLocation} from "react-router-dom";
import SearchBar from "../search/searchBar";
import {useSelector} from "react-redux";
import LanguageSwitcher from "../languageSwitcher/languageSwitcher";
import {useContext} from "react";
import LanguageContext from "../../context/language";

const NavigationBar = () => {
    const favouriteMovies = useSelector(state => state.FavouritesReducer.length);
    const location = useLocation();
    const {language} = useContext(LanguageContext);

    return (
        <div className="navbar bg-zinc-800 px-28 pt-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn  lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                    </label>
                    <ul tabIndex="0"
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/movies">Movies</Link></li>
                        <li><Link to="/favourites">Favourites</Link></li>
                    </ul>
                </div>
                <Link to="/">
                    <img className="btn btn-ghost sm:hidden md:block text-xl" src="./assets/movie_icon.png" alt="logo"/>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal ">
                    <li className={"text-white hover:bg-gray-700"}><Link to="/movies">
                        {language === "en-US" ? "Movies" : "الأفلام"}
                    </Link></li>
                    <div className="indicator">
                        <span className="indicator-item badge badge-secondary">{favouriteMovies}</span>
                        <li className={`btn text-white hover:bg-gray-700 ${location.pathname === "/favourites" &&
                        "btn-primary"}`}><Link
                            to="/favourites">
                            {language === "en-US" ? "Favourites" : "الأفلام المفضلة"}
                            </Link></li>
                    </div>
                </ul>
            </div>
            <div className="navbar-end">
                <SearchBar/>
            </div>
            <LanguageSwitcher/>
        </div>
    )
}

export default NavigationBar