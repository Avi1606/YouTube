import React from 'react';
import Sidebar from "./Sidebar.jsx";
import MainContainer from "./MainContainer.jsx";

const Body = () => {
    return (
        <div className="flex">
            <Sidebar />
            <MainContainer />
        </div>
    );
};

export default Body;