import React from "react";
import ShimmerUI from "./SimmerUI.jsx";

const VideoCard = ({info}) => {

    if (!info) return <ShimmerUI/>;

    const {snippet, statistics} = info;

    const formatViews = (count) => {
        if (count >= 1000000) {
            return `${(count / 1000000).toFixed(1)}M`;
        } else if (count >= 1000) {
            return `${(count / 1000).toFixed(1)}K`;
        }
        return count;
    };

    const getTimeAgo = (publishedAt) => {
        const now = new Date();
        const published = new Date(publishedAt);
        const seconds = Math.floor((now - published) / 1000);

        const intervals = {
            year: 31536000,
            month: 2592000,
            week: 604800,
            day: 86400,
            hour: 3600,
            minute: 60
        };

        for (let [unit, secondsInUnit] of Object.entries(intervals)) {
            const interval = Math.floor(seconds / secondsInUnit);
            if (interval >= 1) {
                return `${interval} ${unit}${interval === 1 ? '' : 's'} ago`;
            }
        }
        return 'Just now';
    };

    return (
        <div className="p-2 m-2 w-72 hover:scale-105 transition-transform duration-200">
            <div className="relative">
                <img
                    className="rounded-lg w-full aspect-video object-cover"
                    src={snippet.thumbnails.medium.url}
                    alt={snippet.title}
                    loading="lazy"
                />
                <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
                    {snippet?.duration || '0:00'}
                </div>
            </div>
            <div className="p-2 flex">
                <img
                    src={snippet?.channelThumbnail || 'default-channel-icon.png'}
                    alt={snippet.channelTitle}
                    className="w-9 h-9 rounded-full mr-3"
                />
                <div>
                    <h3 className="font-medium text-sm line-clamp-2 mb-1">{snippet.title}</h3>
                    <p className="text-gray-600 text-xs hover:text-black">{snippet.channelTitle}</p>
                    <div className="text-gray-600 text-xs flex items-center">
                        <span>{formatViews(statistics?.viewCount)} views</span>
                        <span className="mx-1">•</span>
                        <span>{getTimeAgo(snippet.publishedAt)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;