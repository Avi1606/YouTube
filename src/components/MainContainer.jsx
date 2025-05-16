import React from 'react';
import ButtonList from "./ButtonList.jsx";
import VideoContainer from "./VideoContainer.jsx";
import {Outlet} from "react-router-dom";


const MainContainer = () => {
    return (
        <div className="py-15">
            <ButtonList />
            <VideoContainer />
        </div>
    );
};

export default MainContainer;