import React from 'react';
import {HAMBURGER_ICON, USER_ICON, YOUTUBE_ICON} from "../utils/constants.jsx";

const Header = () => {
    return (
        <div className="flex items-center justify-between p-2 m-2 -mt-5">
            <div className="flex items-center">
                <img
                    className="h-10 mr-2"
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
                    className="px-3 py-2 border border-gray-300 rounded-l-full"
                    type="text"
                    placeholder="Search"
                />
                <button className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-r-full">
                    Search
                </button>
            </div>
            <div className="flex items-center">
                <img
                    className="h-8 w-8"
                    src={USER_ICON}
                    alt="user icon"
                />
            </div>
        </div>
    );
};

export default Header;