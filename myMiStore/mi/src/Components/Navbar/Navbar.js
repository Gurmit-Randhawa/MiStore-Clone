import React from "react";
import { Header, HeaderLogo, HeaderMenu } from "./NavbarStyle";
import "./Navbar.css";





const OpenMenu = () => {

  const Header = document.getElementsByClassName("Header");
const HeaderMenu = document.getElementsByClassName("HeaderMenu");

for (const element of HeaderMenu) {
  element.style.display = "block";
}
   Header[0].style.height = "500px"; 

}
const CloseMenu = () => {

  const Header = document.getElementsByClassName("Header");
const HeaderMenu = document.getElementsByClassName("HeaderMenu");

for (const element of HeaderMenu) {
  element.style.display = "none";
}
   Header[0].style.height = "100px"; 
   Header[0].style.transition = "1s ease-out"; 
   

}

const Navbar = () => {
  return (
    <>
      <div className="MenuIcon"  onMouseLeave={CloseMenu} onMouseOver={OpenMenu}>
          <div className="Icon" id="z">
            <div className="Bars"></div>
            <div className="Bars"></div>
            <div className="Bars"></div>
          </div>
          <div className="MyName">
            <HeaderLogo href="https://edubaba.herokuapp.com/" target="/">
              GURMIT
            </HeaderLogo>
          </div>
        </div>
      <Header className="Header" onMouseOver={OpenMenu} onMouseLeave={CloseMenu}>
        
        <HeaderMenu
          className="HeaderMenu"
          href="https://edubaba.herokuapp.com/"
          target="/"
        >
          Home
        </HeaderMenu>
        <HeaderMenu
          className="HeaderMenu" 
          id="abc"
          href="https://edubaba.herokuapp.com/"
          target="/"
        >
          About me
        </HeaderMenu>
        <HeaderMenu
          className="HeaderMenu"
          href="https://edubaba.herokuapp.com/"
          target="/"
        >
          Resume
        </HeaderMenu>
        <HeaderMenu
          className="HeaderMenu"
          href="https://edubaba.herokuapp.com/"
          target="/"
        >
          Testimonials
        </HeaderMenu>
        <HeaderMenu
          className="HeaderMenu"
          href="https://edubaba.herokuapp.com/"
          target="/"
        >
          Contact me
        </HeaderMenu>
      </Header>
    </>
  );
};

export { Navbar };
