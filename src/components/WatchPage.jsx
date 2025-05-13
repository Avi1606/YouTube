import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {closeMenu} from "../App/appSlice.js";

const WatchPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu())
    },[]);

    return (
        <div>
           <iframe
                        width="1000"
                        height="600"
                        src={`https://www.youtube.com/embed/tgbNymZ7vqY`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen>
                    </iframe>
        </div>
    );
};

export default WatchPage;