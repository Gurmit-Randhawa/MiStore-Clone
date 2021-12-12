import React from 'react';
import {VideoCard} from '../component/VideoCard.js';
import '../style/Video.css'

const Video = ({videos}) => {
    return (
        <>
            <div className="video">
                <VideoCard videos={videos}/>
            </div>
        </>
    )
}

export {Video};
