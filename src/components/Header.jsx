import React, {useEffect, useState} from 'react';
import {HAMBURGER_ICON, USER_ICON, YOUTUBE_ICON, YOUTUBE_SERACH_API} from "../utils/constants.jsx";
import {useDispatch} from "react-redux";
import {toggleMenu} from "../App/appSlice.js";
import Body from "./Body.jsx";
import {Link, useNavigate} from "react-router-dom";

const Header = () => {
    const dispatch = useDispatch();

    const [searchQuery ,setSearchQuery] = useState("");

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
        console.log(json);
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
            <div className="flex items-center">
                <input
                    className="w-150 px-3 py-2 border border-gray-300 rounded-l-full"
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e)=>setSearchQuery(e.target.value)}
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