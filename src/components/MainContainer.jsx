import React from 'react';
import ButtonList from "./ButtonList.jsx";
import VideoContainer from "./VideoContainer.jsx";
import Sidebar from "./Sidebar.jsx";

const MainContainer = () => {
    return (
        <div>
            <VideoContainer />
            <Sidebar />
        </div>
    );
};

export default MainContainer;