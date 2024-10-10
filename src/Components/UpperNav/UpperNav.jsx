import React from 'react'
import "./UpperNav.css"
import UpperNavContact from './UpperNavContact'
import UpperNavSocial from './UpperNavSocial'
const UpperNav = () => {
  return (
    <div className='upperNav'>
      <UpperNavContact/>
      <UpperNavSocial/>
    </div>
  )
}

export default UpperNav
