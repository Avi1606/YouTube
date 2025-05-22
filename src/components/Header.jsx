import React, {useEffect, useState, useRef} from 'react';
import {HAMBURGER_ICON, USER_ICON, YOUTUBE_ICON, YOUTUBE_SEARCH_API} from "../utils/constants.jsx";
import {useDispatch} from "react-redux";
import {toggleMenu} from "../App/appSlice.js";
import {useNavigate, useLocation, useSearchParams} from "react-router-dom";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams] = useSearchParams();

    const [searchQuery ,setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestion, setShowSuggestion] = useState(false);
    const searchContainerRef = useRef(null);

    const handleToggleMenu = () =>{
        dispatch(toggleMenu());
    }

    const handleSearch = () => {
        if (searchQuery.trim()) {
            navigate(`/results?q=${encodeURIComponent(searchQuery)}`);
            setShowSuggestion(false);
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    }

    // Sync search input with URL query parameter when location changes
    useEffect(() => {
        if (location.pathname === '/results') {
            const queryParam = searchParams.get('q');
            if (queryParam) {
                setSearchQuery(queryParam);
            }
        }
    }, [location.pathname, searchParams]);

    useEffect(() => {
        //APICALL
        if (searchQuery.trim()) {
            const timer = setTimeout(() => searchAPI(), 200);

            return () => {
                clearTimeout(timer);
            }
        }
    }, [searchQuery]);

    const searchAPI = async () => {
        try {
            const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
            const json = await data.json();
            // The API returns an array where the second element contains the suggestions
            setSuggestions(json[1] || []);
        } catch (error) {
            console.error("Error fetching search suggestions:", error);
            setSuggestions([]);
        }
    }

    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-white flex flex-col md:flex-row items-center justify-between shadow-md p-2">
            <div className="flex items-center w-full md:w-auto justify-between md:justify-start">
                <div className="flex items-center">
                    <img
                        onClick={() => handleToggleMenu()}
                        className="h-8 md:h-10 mr-2 ml-2 md:ml-4 cursor-pointer hover:opacity-75"
                        src={HAMBURGER_ICON}
                        alt="hamburger menu"
                    />
                    <img
                        className="h-16 md:h-25 cursor-pointer"
                        src={YOUTUBE_ICON}
                        alt="yt logo"
                        onClick={() => navigate('/')}
                    />
                </div>
                <div className="md:hidden">
                    <img
                        className="h-8 w-8 mx-2 rounded-full"
                        src={USER_ICON}
                        alt="user icon"
                    />
                </div>
            </div>
            <div className="flex flex-col items-center relative w-full md:w-auto my-2 md:my-0" ref={searchContainerRef}>
                <div className="flex w-full max-w-[500px]">
                    <input
                        className="w-full md:w-[500px] px-3 py-2 border border-gray-300 rounded-l-full focus:outline-none"
                        type="text"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setShowSuggestion(true)}
                        onBlur={(e) => {
                            // Only hide suggestions if click is outside the search container
                            if (!searchContainerRef.current.contains(e.relatedTarget)) {
                                setShowSuggestion(false);
                            }
                        }}
                        onKeyPress={handleKeyPress}
                        onPaste={(e) => {
                            // Get pasted text and update search query
                            const pastedText = e.clipboardData.getData('text');

                            // If text is selected, replace only the selected portion
                            const start = e.target.selectionStart;
                            const end = e.target.selectionEnd;

                            if (start !== end) {
                                // Text is selected, replace only that portion
                                const newValue = searchQuery.substring(0, start) + pastedText + searchQuery.substring(end);
                                setSearchQuery(newValue);
                            } else {
                                // No text selected, insert at cursor position
                                const newValue = searchQuery.substring(0, start) + pastedText + searchQuery.substring(start);
                                setSearchQuery(newValue);
                            }
                            e.preventDefault();
                        }}
                    />
                    <button 
                        className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-r-full hover:bg-gray-200"
                        onClick={handleSearch}
                    >
                        🔍
                    </button>
                </div>
                {suggestions.length > 0 && showSuggestion && (
                    <div className="absolute top-10 bg-white w-full max-w-[500px] md:w-[500px] shadow-lg rounded-2xl z-10 mt-1">
                        <ul className="py-2">
                            {suggestions.map((suggestion, index) => (
                                <li 
                                    key={index}
                                    className="px-2 py-2 hover:bg-gray-100 flex items-center cursor-pointer"
                                    onClick={(e) => {
                                        e.preventDefault(); // Prevent default to avoid losing focus
                                        setSearchQuery(suggestion);
                                        navigate(`/results?q=${encodeURIComponent(suggestion)}`);
                                        setShowSuggestion(false);
                                    }}
                                    tabIndex="0"
                                >
                                    <span className="mr-3">🔍</span> {suggestion}
                                </li>))}
                        </ul>
                    </div>
                )}
            </div>
            <div className="hidden md:flex items-center">
                <img
                    className="h-8 w-8 mr-4 md:mr-24 rounded-full"
                    src={USER_ICON}
                    alt="user icon"
                />
            </div>
        </div>
    );
};

export default Header;
