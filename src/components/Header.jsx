import React, {useEffect, useState} from 'react';
import {HAMBURGER_ICON, USER_ICON, YOUTUBE_ICON, YOUTUBE_SERACH_API} from "../utils/constants.jsx";
import {useDispatch} from "react-redux";
import {toggleMenu} from "../App/appSlice.js";
import Body from "./Body.jsx";
import {Link, useNavigate} from "react-router-dom";

const Header = () => {
    const dispatch = useDispatch();

    const [searchQuery ,setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestion, setShowSuggestion] = useState(false);

    const handleToggleMenu = () =>{
        dispatch(toggleMenu());
    }
    useEffect(() => {
        //APICALL
        const timer = setTimeout(() => searchAPI(), 200);

        return ()=> {
            clearTimeout(timer);
        }
      searchAPI()

    }, [searchQuery]);

    const searchAPI = async () => {

        const data = await fetch(YOUTUBE_SERACH_API + searchQuery);

        const json = await data.json();
        setSuggestions(json[1]);
    }

    return (
        <div className="flex items-center justify-between shadow-md">
            <div className="flex items-center">
                <img
                    onClick={() => handleToggleMenu()}
                    className="h-10 mr-2 ml-4 cursor-pointer hover:opacity-75"
                    src={HAMBURGER_ICON}
                    alt="hamburger menu"
                />
                <img
                    className="h-25 cursor-pointer"
                    src={YOUTUBE_ICON}
                    alt="yt logo"
                />
            </div>
            <div className="flex flex-col items-center relative">
                <div className="flex">
                    <input
                        className="w-[500px] px-3 py-2 border border-gray-300 rounded-l-full focus:outline-none"
                        type="text"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setShowSuggestion(true)}
                        onBlur={() => setShowSuggestion(false)}
                    />
                    <button className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-r-full hover:bg-gray-200">
                        🔍
                    </button>
                </div>
                {suggestions.length > 0 && showSuggestion && (
                    <div className="absolute top-10 bg-white w-[550px] shadow-lg rounded-2xl z-7 mt-1 ">
                        <ul className="py-2">
                            {suggestions.map((suggestion) => (
                                <li className="px-2 py-2 hover:bg-gray-100 flex items-center cursor-pointer">
                                    <span className="mr-3">🔍</span> {suggestion}
                                </li>))}
                        </ul>
                    </div>
                )}
            </div>
            <div className="flex items-center">
                <img
                    className="h-8 w-8 mr-24 rounded-full"
                    src={USER_ICON}
                    alt="user icon"
                />
            </div>
        </div>
    );
};

export default Header;