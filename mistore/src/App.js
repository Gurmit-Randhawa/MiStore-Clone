import React from 'react'
import {Preheader} from "./component/Preheader.js";
import "./style/index.css";
import {Navbar} from "./component/Navbar.js";
import {SlideBar} from "./component/SlideBar.js";
import {Offer} from './component/Offer.js';


function App() {
  return (
    <>
      <Preheader />
      <Navbar />
      <SlideBar />
      <Offer />
    </>
  )
}

export {App};
