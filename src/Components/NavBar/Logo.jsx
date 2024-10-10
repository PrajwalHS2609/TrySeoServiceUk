import React from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom'
import TSS from "./../../Img/TSS.png"
const Logo = () => {
  return (
    <div className="logoContainer">
    <Link to={"/"}>
      <img src={TSS} alt="tss" />
    </Link>
  </div>
  )
}

export default Logo
