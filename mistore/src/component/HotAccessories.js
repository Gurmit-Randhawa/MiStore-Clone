import React from "react";
import "../style/HotAccessories.css";
import { Itemboxes } from "../component/Itemboxes.js";
import '../SVG/svg.js';
import { forwardArrow } from "../SVG/svg";

const HotAccessories = ({musicCover,music}) => {
  return (
    <>
      <div className="hotaccessoriesbox">
        <div className="musiccover">
          <img src={musicCover} alt="" className="musicimage" />
        </div>
        <div className="musiccover2">
          {
             music.map((item)=>( 
          <Itemboxes key={item.image} name={item.name} price={item.price} image={item.image}/>
          ))
          }
          <div className="browseBox">
            <h1>Browse More <span>{forwardArrow}</span></h1>
          </div>
        </div>
      </div>
    </>
  );
};

export { HotAccessories };
