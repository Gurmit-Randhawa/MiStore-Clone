import React from 'react'
import {Preheader} from "./component/Preheader.js";
import "./style/index.css";
import {Navbar} from "./component/Navbar.js"
import {Carousel} from "./component/Carousel.js"


function App() {
  return (
    <>
      <Preheader />
      <Navbar />
      <Carousel />
    </>
  )
}

export {App};
