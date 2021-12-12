import React from "react";
import '../Headings/Headings.css';

const Headings = ({heading1, heading2}) => {
  return (
    <>
      <div className="heading">
        <div className="lines" id="line1">
          {heading1}
        </div>
        <div className="lines" id="line2">
          {heading2}
        </div>
        <div className="lines" id="line3">
          <div className="design" id="design1"></div>
          <div className="pinkbox" id="design2"></div>
          <div className="design" id="design3"></div>
        </div>
      </div>
    </>
  );
};

export { Headings };
