import React from "react";
import '../style/ReviewCards.css';

const ReviewCard = ({ reviews }) => {
  return (
    <>
   
      {reviews.map((item) => (
        <div className="reviewcard">
          <img src={item.image} alt="" />
          <p>{item.review}</p>
          <div className="NamePrice">
          <span>{item.name}</span>
          <span>{item.price}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export { ReviewCard };
