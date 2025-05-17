import React, {useEffect, useState} from 'react';
import {YOUTUBE_API} from "../utils/constants.jsx";
import VideoCard from "./VideoCard.jsx";
import {Link} from "react-router-dom";
import ShimmerUI from "./SimmerUI.jsx"; // Note the file is SimmerUI but component is ShimmerUI

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getVideos();
    },[]);

    const getVideos = async () => {
        try {
            setIsLoading(true);
            const data = await fetch(YOUTUBE_API);
            const json = await data.json();
            setVideos(json.items);
        } catch (error) {
            console.error("Error fetching videos:", error);
        } finally {
            setIsLoading(false);
        }
    };


    const renderShimmerCards = () => {
        return Array(12).fill(null).map((_, index) => (
            <ShimmerUI key={index} />
        ));
    };

    return (
        <div className="flex flex-wrap">
            {isLoading
                ? renderShimmerCards()
                : videos.map(video => (
                    <Link key={video.id} to={"/watch?v=" + video.id}>
                        <VideoCard info={video} />
                    </Link>
                ))
            }
        </div>
    );
};

export default VideoContainer;