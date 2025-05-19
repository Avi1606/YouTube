import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { YOUTUBE_SEARCH_RESULTS_API } from '../utils/constants.jsx';
import VideoCard from './VideoCard.jsx';
import { Link } from 'react-router-dom';
import ShimmerUI from './SimmerUI.jsx';

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q');
    
    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (query) {
            getSearchResults();
        }
    }, [query]);

    const getSearchResults = async () => {
        try {
            setIsLoading(true);
            const data = await fetch(YOUTUBE_SEARCH_RESULTS_API + encodeURIComponent(query));
            const json = await data.json();
            setVideos(json.items || []);
        } catch (error) {
            console.error("Error fetching search results:", error);
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
        <div className="pt-8 pb-4">
            <h2 className="text-xl font-bold mb-4">Search results for: {query}</h2>
            <div className="flex flex-wrap">
                {isLoading
                    ? renderShimmerCards()
                    : videos.length > 0 
                        ? videos.map(video => (
                            <Link key={video.id.videoId} to={"/watch?v=" + video.id.videoId}>
                                <VideoCard info={{
                                    id: video.id.videoId,
                                    snippet: video.snippet,
                                    statistics: { viewCount: "N/A" } // Search API doesn't return statistics
                                }} />
                            </Link>
                        ))
                        : <p className="text-center w-full p-4">No results found for "{query}"</p>
                }
            </div>
        </div>
    );
};

export default SearchResults;