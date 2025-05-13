import React from 'react';
import {HAMBURGER_ICON, USER_ICON, YOUTUBE_ICON} from "../utils/constants.jsx";
import {useDispatch} from "react-redux";
import {toggleMenu} from "../App/appSlice.js";

const Header = () => {
    const dispatch = useDispatch();

    const handleToggleMenu = () =>{
        dispatch(toggleMenu());
    }

    return (
        <div className="flex items-center justify-between shadow-md">
            <div className="flex items-center">
                <img
                    onClick={() => handleToggleMenu()}
                    className="h-10 mr-2 ml-4 cursor-pointer hover:opacity-75"
                    src={HAMBURGER_ICON}
                    alt="hamburger menu"/>

                <img
                    className="h-25"
                    src={YOUTUBE_ICON}
                    alt="yt logo"
                />
            </div>
            <div className="flex items-center">
                <input
                    className="w-150 px-3 py-2 border border-gray-300 rounded-l-full"
                    type="text"
                    placeholder="Search"
                />
                <button className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-r-full">
                    🔍
                </button>
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