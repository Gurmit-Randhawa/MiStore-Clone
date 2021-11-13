import React from "react";
import "../style/Itemboxes.css";


const Itemboxes = ({name,price,image}) => {
  return (
    <>
        <div className="itemcard">
          <img src={image} alt="" />
          <p>{name}</p>
          <span>{price}</span>
        </div>
    </>
  );
};

export { Itemboxes };
