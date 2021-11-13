import React from "react";
import { Preheader } from "./component/Preheader.js";
import "./style/index.css";
import { Navbar } from "./component/Navbar.js";
import { SlideBar } from "./component/SlideBar.js";
import { Offer } from "./component/Offer.js";
import { Headings } from "./component/Headings.js";
import data from "./data/data.json";
import { StarProducts } from "./component/StarProducts.js";
import { HotAccessoriesMenu } from "./component/HotAccessoriesMenu.js";
import { Routes, Route } from "react-router-dom";
import {HotAccessoriesMusic} from './component/HotAccessoriesMusic.js';

function App() {
  return (
    <>
      <Preheader />
      <Navbar />
      <SlideBar />
      <Offer />
      <Headings headText={"STAR PRODUCTS"} />
      <StarProducts products={data.starProduct} />
      <Headings headText={"HOT ACCESSORIES"} />
      <HotAccessoriesMenu />
      <Routes>
        <Route exact path="/" element={<HotAccessoriesMusic />} />
      </Routes>
    </>
  );
}

export { App };
