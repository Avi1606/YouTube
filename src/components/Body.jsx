import React from 'react';
import Sidebar from "./Sidebar.jsx";
import {Outlet} from "react-router-dom";

const Body = () => {
    return (
        <div className="flex flex-col md:flex-row">
            <Sidebar />
            <div className="w-full overflow-x-hidden">
                <Outlet />
            </div>
        </div>
    );
};

export default Body;
