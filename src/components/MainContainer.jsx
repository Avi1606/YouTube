import React from 'react';
import ButtonList from "./ButtonList.jsx";
import VideoContainer from "./VideoContainer.jsx";
import {Outlet} from "react-router-dom";


const MainContainer = () => {
    return (
        <div className="py-16 md:py-20 w-full">
            <ButtonList />
            <VideoContainer />
        </div>
    );
};

export default MainContainer;
