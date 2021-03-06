import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../data/data.json';
const start = data.banner.start;
const bannerStyle = {
    height:"37vw"
}

const SlideBar = () => {
    return (
        <>
          
            <Carousel>
                {
                start.map((item)=>(
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={item}
                        alt="First slide"
                        style={bannerStyle}
                        />
                        
                    </Carousel.Item>

                ))}
            </Carousel>
        </>
    )
}

export {SlideBar};
