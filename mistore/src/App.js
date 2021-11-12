import React from 'react'
import {Preheader} from "./component/Preheader.js";
import "./style/index.css";
import {Navbar} from "./component/Navbar.js";
import {SlideBar} from "./component/SlideBar.js";
import data from './data/data.json';
console.log(data);


function App() {
  return (
    <>
      <Preheader />
      <Navbar />
      <SlideBar/>
    </>
  )
}

export {App};
