import React, {useEffect, useState} from 'react';
import {YOUTUBE_API} from "../utils/constants.jsx";
import VideoCard from "./VideoCard.jsx";

const VideoContainer = () => {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        getVideos();
    },[]);

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_API);
        const json = await data.json();
        setVideos(json.items);
    };

    return (
        <div className="flex flex-wrap">
            {videos.map(video => <VideoCard info={video} />)}
        </div>
    );
};

export default VideoContainer;