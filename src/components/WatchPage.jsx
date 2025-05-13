import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {closeMenu} from "../App/appSlice.js";
import {useSearchParams} from "react-router-dom";

const WatchPage = () => {

    const dispatch = useDispatch();
    const [params] = useSearchParams();

    useEffect(() => {
        dispatch(closeMenu())
    },[]);

    return (
        <div>
            <iframe
                width="1200"
                height="600"
                src={`https://www.youtube.com/embed/${params.get("v")}?autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay
                ; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>
            </iframe>
        </div>
    );
};

export default WatchPage;