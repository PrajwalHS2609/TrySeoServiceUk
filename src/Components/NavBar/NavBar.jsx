import React, { useState } from 'react'
import "./NavBar.css"
import Logo from './Logo';
import Menu from './Menu';
const NavBar = () => {
    let [scroll, setScroll] = useState(false);

    let changeColor = () => {
      if (window.scrollY >= 20) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", changeColor);

  return (
    <div className={scroll ? "navbarContainer1" : "navbarContainer"}>
        <Logo />
        <Menu />
    </div>
  )
}

export default NavBar
