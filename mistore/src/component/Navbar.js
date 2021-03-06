import React from "react";
import "../style/Navbar.css";
import { search } from "../SVG/svg.js";
import {Logo} from '../component/Logo.js';

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="sections" id="section1">
          <Logo/>
        </div>
        <div className="sections" id="section2">
          <div className="navbarMenus" id="navbarMenu1"></div>
          <div className="navbarMenus" id="navbarMenu2">
            Mi Phones
          </div>
          <div className="navbarMenus" id="navbarMenu3">
            Redmi Phones
          </div>
          <div className="navbarMenus" id="navbarMenu4">
            TV
          </div>
          <div className="navbarMenus" id="navbarMenu5">
            Laptops
          </div>
          <div className="navbarMenus" id="navbarMenu6">
            Fitness
          </div>
          <div className="navbarMenus" id="navbarMenu7">
            Home
          </div>
          <div className="navbarMenus" id="navbarMenu8">
            Audio
          </div>
          <div className="navbarMenus" id="navbarMenu9">
            Accessories
          </div>
        </div>
        <div className="sections" id="section3"></div>
        <div className="sections" id="section4">
          <input type="search" name="" id="" placeholder="Search" />
          {search}
        </div>
        <div className="sections" id="section5"></div>
      </div>
      
    </>
  );
};

export { Navbar };
