import React from 'react';
const VideoCard = ({info}) => {
    if (!info) return null;

    const { snippet, statistics } = info;

    return (
        <div className="p-2 m-2 w-72 shadow-sm">
            <img
                className="rounded-lg w-full"
                src={snippet.thumbnails.medium.url}
                alt={snippet.title}
            />
            <div className="p-2">
                <h3 className="font-medium text-sm">{snippet.title}</h3>
                <p className="text-gray-600 text-xs mt-1">{snippet.channelTitle}</p>
                <p className="text-gray-600 text-xs">{statistics?.viewCount} views</p>
            </div>
        </div>
    );
};

export default VideoCard;