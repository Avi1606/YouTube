import React from 'react';
import {useSelector} from "react-redux";

const Sidebar = () => {
    const showSidebar = useSelector(store => store.app.showMenu);

    return (
        <div className="py-4 md:py-8">
            {showSidebar &&
                <div className="shadow-lg w-full md:w-48 p-3 mb-4 md:mb-0">
                    <ul className="p-2 md:p-3 flex flex-row md:flex-col overflow-x-auto md:overflow-visible">
                        <li className="mr-4 md:mr-0 whitespace-nowrap"> Home</li>
                        <li className="mr-4 md:mr-0 whitespace-nowrap"> Shorts</li>
                        <li className="mr-4 md:mr-0 whitespace-nowrap"> Video</li>
                        <li className="mr-4 md:mr-0 whitespace-nowrap"> Live</li>
                    </ul>
                    <h1 className="font-bold hidden md:block">Subscriptions</h1>
                    <ul className="p-2 md:p-3 hidden md:block">
                        <li> Home</li>
                        <li> Shorts</li>
                        <li> Gaming</li>
                        <li> Movies</li>
                    </ul>
                    <h1 className="font-bold hidden md:block">Watch Later</h1>
                    <ul className="p-2 md:p-3 hidden md:block">
                        <li> Home</li>
                        <li> Shorts</li>
                        <li> Gaming</li>
                        <li> Movies</li>
                    </ul>
                </div>}
        </div>
    );
};

export default Sidebar;
