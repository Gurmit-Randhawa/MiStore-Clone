import React from 'react';
import '../style/VideoCard.css';

const VideoCard = ({videos}) => {
    return (
        <>
            {videos.map((item)=>(
                <div className="videocard">
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                </div>
            ))}
        </>
    )
}

export {VideoCard};
