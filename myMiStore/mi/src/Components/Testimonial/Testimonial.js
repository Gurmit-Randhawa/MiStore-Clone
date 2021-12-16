import React from "react";
import { TestiBox } from "./TestimonialStyle.js";
import "./Testimonial.css";
import TestiBackImage from '../Images/3.JPG'

const Testimonial = () => {
  return (
    <>
      <div className="this">
          <img src={TestiBackImage} alt="" className="TestiBackImage" />
        <TestiBox>
          <div className="innerTestiBox">
            <div className="Testi">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
              nam minima molestiae natus delectus quia laudantium distinctio
              expedita placeat recusandae commodi, quaerat, necessitatibus
              nostrum accusantium!
            </div>
            <div className="Testi">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
              nam minima molestiae natus delectus quia laudantium distinctio
              expedita placeat recusandae commodi, quaerat, necessitatibus
              nostrum accusantium!
            </div>
            <div className="Testi">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
              nam minima molestiae natus delectus quia laudantium distinctio
              expedita placeat recusandae commodi, quaerat, necessitatibus
              nostrum accusantium!
            </div>
            <div className="Testi">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
              nam minima molestiae natus delectus quia laudantium distinctio
              expedita placeat recusandae commodi, quaerat, necessitatibus
              nostrum accusantium!
            </div>
            <div className="Testi">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
              nam minima molestiae natus delectus quia laudantium distinctio
              expedita placeat recusandae commodi, quaerat, necessitatibus
              nostrum accusantium!
            </div>
          </div>
        </TestiBox>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="white"
            fill-opacity="1"
            d="M0,96L48,106.7C96,117,192,139,288,128C384,117,480,75,576,80C672,85,768,139,864,165.3C960,192,1056,192,1152,170.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export { Testimonial };
