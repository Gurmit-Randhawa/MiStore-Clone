import React from 'react';
import "../style/Carousel.css";
import data from "../data/data.json";
// const bannerData = data.banner.start;

const Carousel = () => {
    return (
        <>
         <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                
                <div class="carousel-item active">
                    <img src={data.banner.end[1].image} class="d-block w-100" alt="..."/>
                </div>
               
                <div class="carousel-item">
                <img src={data.banner.end[1].image} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src={data.banner.end[2].image} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src={data.banner.end[3].image} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src={data.banner.end[4].image} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src={data.banner.end[5].image} class="d-block w-100" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        </>
    )
}

export {Carousel};
