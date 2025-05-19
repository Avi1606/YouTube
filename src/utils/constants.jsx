export const HAMBURGER_ICON = "https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png";

export const YOUTUBE_ICON = "https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg";

export const USER_ICON = "https://cdn-icons-png.flaticon.com/512/666/666201.png";

const YOUTUBE_API_KEY = import.meta.env.VITE_API_KEY;

export const YOUTUBE_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=${YOUTUBE_API_KEY}`;

export const YOUTUBE_SERACH_API = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_RESULTS_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${YOUTUBE_API_KEY}&q=`;
