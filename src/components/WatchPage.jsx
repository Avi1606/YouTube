import React, {useEffect, useState} from 'react';
    import {useDispatch} from "react-redux";
    import {closeMenu} from "../App/appSlice.js";
    import {useSearchParams} from "react-router-dom";
    import VideoCard from "./VideoCard.jsx";
    import {YOUTUBE_API} from "../utils/constants.jsx";

    const WatchPage = () => {
        const dispatch = useDispatch();
        const [params] = useSearchParams();
        const [relatedVideos, setRelatedVideos] = useState([]);
        const [videoInfo, setVideoInfo] = useState(null);

        useEffect(() => {
            dispatch(closeMenu());
            fetchRelatedVideos();
            window.scrollTo(0, 0);
        }, [params]);

        const fetchRelatedVideos = async () => {
            const data = await fetch(YOUTUBE_API);
            const json = await data.json();
            setRelatedVideos(json.items.slice(0, 15));

            // Set current video info (in a real app, this would be fetched specifically)
            const currentVideo = json.items.find(video => video.id === params.get("v"));
            setVideoInfo(currentVideo);
        };

        if (!videoInfo) return <div className="flex justify-center p-4">Loading...</div>;

        return (
            <div className="flex flex-col lg:flex-row gap-4 p-4">
                {/* Main video section */}
                <div className="lg:w-8/12">
                    <div className="sticky top-20">
                        <div className="player-wrapper">
                            <iframe
                                className="w-full aspect-video rounded-lg"
                                src={`https://www.youtube.com/embed/${params.get("v")}?autoplay=1`}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen>
                            </iframe>
                        </div>

                        {/* Video info */}
                        <div className="mt-3">
                            <h1 className="text-xl font-bold">{videoInfo?.snippet?.title}</h1>
                            <div className="flex items-center justify-between mt-2">
                                <div className="flex items-center">
                                    <img
                                        src={videoInfo?.snippet?.channelThumbnail || 'default-channel-icon.png'}
                                        alt={videoInfo?.snippet?.channelTitle}
                                        className="w-10 h-10 rounded-full mr-3"
                                    />
                                    <div>
                                        <p className="font-medium">{videoInfo?.snippet?.channelTitle}</p>
                                        <p className="text-sm text-gray-600">
                                            {videoInfo?.statistics?.subscriberCount ? `${(videoInfo.statistics.subscriberCount/1000000).toFixed(1)}M subscribers` : ""}
                                        </p>
                                    </div>
                                    <button className="ml-4 bg-black text-white px-4 py-2 rounded-full font-medium">
                                        Subscribe
                                    </button>
                                </div>
                                <div className="flex space-x-2">
                                    <button className="bg-gray-100 px-4 py-2 rounded-full flex items-center">
                                        <span>👍 {videoInfo?.statistics?.likeCount ? parseInt(videoInfo.statistics.likeCount).toLocaleString() : "0"}</span>
                                    </button>
                                    <button className="bg-gray-100 px-4 py-2 rounded-full">Share</button>
                                </div>
                            </div>

                            {/* Video description */}
                            <div className="mt-4 bg-gray-100 p-3 rounded-lg">
                                <div className="text-sm">
                                    <span className="font-medium">
                                        {videoInfo?.statistics?.viewCount ? parseInt(videoInfo.statistics.viewCount).toLocaleString() : "0"} views
                                    </span>
                                    <span className="ml-2">
                                        {new Date(videoInfo?.snippet?.publishedAt).toLocaleDateString()}
                                    </span>
                                </div>
                                <p className="mt-2 text-sm whitespace-pre-line line-clamp-3">
                                    {videoInfo?.snippet?.description || "No description available"}
                                </p>
                                <button className="text-sm font-medium mt-1">Show more</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related videos section */}
                <div className="lg:w-4/12">
                    <h2 className="font-medium mb-3">Related Videos</h2>
                    <div className="flex flex-col gap-2">
                        {relatedVideos.map(video => (
                            <div key={video.id} className="w-full" onClick={() => window.location = `/watch?v=${video.id}`}>
                                <div className="flex p-1 cursor-pointer">
                                    <img
                                        src={video.snippet.thumbnails.medium.url}
                                        alt={video.snippet.title}
                                        className="w-40 h-24 object-cover rounded-lg"
                                    />
                                    <div className="ml-2">
                                        <p className="text-sm font-medium line-clamp-2">{video.snippet.title}</p>
                                        <p className="text-xs text-gray-600 mt-1">{video.snippet.channelTitle}</p>
                                        <p className="text-xs text-gray-600">
                                            {video.statistics?.viewCount ? `${parseInt(video.statistics.viewCount).toLocaleString()} views` : ""}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    export default WatchPage;