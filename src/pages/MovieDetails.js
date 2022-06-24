import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../network/axiosInstance";
import {useContext} from "react";
import LanguageContext from "../context/language";

const MovieDetails = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [movieDetails, setMovieDetails]= useState({})
    const {language} = useContext(LanguageContext);
    const backgroundImage = {
        backgroundImage:`url(https://image.tmdb.org/t/p/w500${movieDetails["backdrop_path"]})`
    }

    useEffect(()=>{
        axiosInstance
            .get(`/movie/${params["movieId"]}`,{params:{language}})
            .then(response => setMovieDetails(response.data))
            .catch(error => console.log(error))
    },[language])

    return (
        <div>
            {Object.keys(movieDetails).length ?
                (
                    <div className="hero min-h-screen text-white" style={backgroundImage}>
                        <div className="hero-overlay bg-opacity-60"/>
                        <div className="hero-content flex-col lg:flex-row">
                            <img className="max-w-sm rounded-lg shadow-2xl"
                                 src={`https://image.tmdb.org/t/p/w500${movieDetails["poster_path"]}`}
                                 alt="moviePoster"/>
                            <div className={"ml-2"}>
                                <h1 className="text-5xl font-bold">{movieDetails["title"]}</h1>
                                <p className="py-6">{movieDetails["overview"]}</p>
                                <p className={"mb-2"}>Release Date : {movieDetails["release_date"]}</p>
                                <p className={"mb-2"}>Rating : {movieDetails["vote_average"]}</p>
                                {movieDetails["genres"]?.map(genre =>
                                    <div key={genre["id"]}
                                         className="badge badge-primary mr-2">
                                        {genre["name"]}
                                    </div>)}
                                <p className={"mt-2"}>{movieDetails["runtime"]}m</p>
                                <button className="btn btn-primary mt-3" onClick={()=>navigate(-1)}>Back</button>
                            </div>
                        </div>
                    </div>
                )
                : <button className="btn btn-square loading hero min-h-screen"/>}
        </div>
    );
};

export default MovieDetails;