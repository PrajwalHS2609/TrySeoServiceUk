import React from 'react'
import "./Footer.css"
import FooterContact from './FooterContact'
import FooterServices from './FooterServices'
import FooterImg from './FooterImg'
const Footer = () => {
  return (
    <div className='footerContainer'>
      <FooterContact/>
      <FooterServices/>
      <FooterImg/>
    </div>
  )
}

export default Footer
