import React from 'react';
import '../style/Headings.css';

const Headings = ({headText}) => {
    return (
        <>
            <div className="heading">
                <div className="line"></div>
                <div className="text">{headText}</div>
                <div className="line"></div>
            </div>
        </>
    )
}

export {Headings}
