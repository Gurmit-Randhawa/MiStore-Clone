import React from "react";
import { HomePage } from "./Components/HomePage/HomePage.js";
import {Headings} from "./Components/Headings/Headings.js";
import {AboutMe} from "./Components/AboutMe/AboutMe.js";
import {Resume} from "./Components/Resume/Resume.js";
import {Testimonial} from './Components/Testimonial/Testimonial.js';
import {ContactMe} from './Components/ContactMe/ContactMe.js';



const App = () => {
  return (
    <>
      <HomePage />
      <Headings heading1={"About Me"} heading2={"Why Choose Me"}/>
      <AboutMe/>
      <Headings heading1={"Resume"} heading2={"My Formal Bio Details"}/>
      <Resume/>
      <Headings heading1={"Contact Me"} heading2={"Lets Keep In touch"}/>
      <ContactMe/>

    </>
  );
};

export default App;
