import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const navigate = useNavigate();

    return (
        <div className="form-control">
            <div className="input-group">
                <input type="text"
                       placeholder="Search…"
                       className="input input-bordered"
                       value={searchQuery}
                       onChange={(e) => {
                           setSearchQuery(e.target.value)
                       }}
                />
                <button className="btn btn-square"
                        onClick={() => navigate("/movies", {replace: true, state: searchQuery})}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default SearchBar;