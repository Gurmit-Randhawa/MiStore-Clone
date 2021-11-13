import React from 'react';
import data from '../data/data.json';
import '../style/Offer.css';
const offers = data.offer;
console.log(offers);

const Offer = () => {
    return (
        <>
            <div className="offerBox">
                {
                offers.map((currOffer)=>(
                    <img src={currOffer.image} alt="" />
                ))
                }
            </div>
        </>
    )
}

export {Offer};
