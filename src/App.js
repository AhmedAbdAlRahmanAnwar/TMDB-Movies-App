import {BrowserRouter, Routes, Route} from "react-router-dom";

import NavigationBar from "./components/NavBar/navigationBar";
import Movies from "./pages/Movies";
import Favourites from "./pages/Favourites";
import MovieDetails from "./pages/MovieDetails";
import NotFound from "./pages/NotFound";
import LanguageContext from "./context/language";
import {useState} from "react";

function App() {
    const [language, setLanguage] = useState("en-US")

    return (
        <BrowserRouter>
            <LanguageContext.Provider value={{language, setLanguage}}>
                <NavigationBar/>
                <Routes>
                    <Route path="/" element={<Movies/>}/>
                    <Route path="/movies" element={<Movies/>}/>
                    <Route path="/movies/:movieId" element={<MovieDetails/>}/>
                    <Route path="/favourites" element={<Favourites/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </LanguageContext.Provider>
        </BrowserRouter>
    );
}

export default App;
