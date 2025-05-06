import React from 'react';

const Sidebar = () => {
    return (
        <div className="shadow-lg w-48 p-3 ">
            <ul className="p-3">
                <li> Home</li>
                <li> Shorts</li>
                <li> Video</li>
                <li> Live</li>
            </ul>
            <h1 className="font-bold">Subscriptions</h1>
            <ul className="p-3">
                <li> Home</li>
                <li> Shorts</li>
                <li> Gaming</li>
                <li> Movies</li>
            </ul>
            <h1 className="font-bold">Watch Later</h1>
            <ul className="p-3">
                <li> Home</li>
                <li> Shorts</li>
                <li> Gaming</li>
                <li> Movies</li>
            </ul>
        </div>
    );
};

export default Sidebar;