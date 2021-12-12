import React from 'react';
import {Header, HeaderLogo, HeaderMenu} from './NavbarStyle';



const Navbar = () => {
    return (
        <>
            <Header>
                <HeaderLogo href="https://edubaba.herokuapp.com/" target="/">GURMIT</HeaderLogo>
                <HeaderMenu href="https://edubaba.herokuapp.com/" target="/">Home</HeaderMenu>
                <HeaderMenu href="https://edubaba.herokuapp.com/" target="/">About me</HeaderMenu>
                <HeaderMenu href="https://edubaba.herokuapp.com/" target="/">Resume</HeaderMenu>
                <HeaderMenu href="https://edubaba.herokuapp.com/" target="/">Testimonials</HeaderMenu>
                <HeaderMenu href="https://edubaba.herokuapp.com/" target="/">Contact me</HeaderMenu>
            </Header>
        </>
    )
}

export {Navbar};

