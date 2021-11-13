import React from "react";
import "../style/StarProducts.css";

const StarProducts = ({ products }) => {
  return (
    <>
      <div className="starproductbox">
        <div className="boxes" id="box1">
          <img src={products[0].image} alt="" className="images" id="image1" />
        </div>
        <div className="boxes" id="box2">
          <img src={products[1].image} alt="" className="images" id="image2" />
          <img src={products[2].image} alt="" className="images" id="image3" />
          <img src={products[3].image} alt="" className="images" id="image4" />
        </div>
      </div>
    </>
  );
};

export { StarProducts };
