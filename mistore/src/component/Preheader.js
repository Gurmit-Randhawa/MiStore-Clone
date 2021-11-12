import React from "react";
import "../style/Preheader.css";
import cart from "../imageGallary/cart.svg";
import downArrow from "../imageGallary/keyboard_arrow_down.svg";

function Preheader() {
  return (
    <>
      <div className="preheader">
        <div></div>
        <div className="part1">
          <div className="part1Menu">MI INDIA</div>
          <span>|</span>
          <div className="part1Menu">GET MY INDIA APP</div>
          <span>|</span>
          <div className="part1Menu">ONLINE HELP</div>
          <span>|</span>
          <div className="part1Menu" id="downarrow">
            RETAIL STORE <img src={downArrow} alt="" />
          </div>
        </div>
        <div className="part2"></div>
        <div className="part3">
          <div className="part1Menu">SIGN UP</div>
          <span>|</span>
          <div className="part1Menu">SIGN IN</div>
          <span>|</span>
          <div className="part1Menu">
            <img src={cart} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export { Preheader };
