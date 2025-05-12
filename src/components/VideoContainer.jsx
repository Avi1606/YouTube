import React, {useEffect} from 'react';
import {YOUTUBE_API} from "../utils/constants.jsx";

const VideoContainer = () => {

    useEffect(() => {
        getVideos();
    },[]);

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_API);
        const json = await data.json();
        console.log(json);
    };

    return (
        <div>
            <p>video container</p>
        </div>
    );
};

export default VideoContainer;