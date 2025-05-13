import React from 'react';

const ShimmerUI = () => {
    return (
        <div className="p-2 m-2 w-72 shadow-sm">
            <div className="rounded-lg w-full h-40 bg-gray-200 animate-pulse"></div>
            <div className="p-2">
                <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse mb-2 mt-1"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2 animate-pulse mb-1"></div>
                <div className="h-3 bg-gray-200 rounded w-1/4 animate-pulse"></div>
            </div>
        </div>
    );
};
export default ShimmerUI;