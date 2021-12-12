import React from "react";
import { HomePage } from "./Components/HomePage/HomePage.js";
import {Headings} from "./Components/Headings/Headings.js";
import {AboutMe} from "./Components/AboutMe/AboutMe.js";
import {Resume} from "./Components/Resume/Resume.js";



const App = () => {
  return (
    <>
      <HomePage />
      <Headings heading1={"About Me"} heading2={"Why Choose Me"}/>
      <AboutMe/>
      <Headings heading1={"Resume"} heading2={"My Formal Bio Details"}/>
      <Resume/>
      <Headings heading1={"Testimonials"} heading2={"What My Client Say About Me"}/>
    </>
  );
};

export default App;
