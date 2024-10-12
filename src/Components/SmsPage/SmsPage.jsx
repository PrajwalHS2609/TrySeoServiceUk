import React from 'react'
import SmsHeader from './SmsHeader'
import SmsService from './SmsService/SmsService'
import HomeWhyUs from '../HomePage/HomeWhyUs/HomeWhyUs'
import HomeBook from '../HomePage/HomeBook/HomeBook'

const SmsPage = () => {
  return (
    <div className="homeContainer">
    <SmsHeader />
    <SmsService/>
    <HomeWhyUs />
    <HomeBook />
  </div>
  )
}

export default SmsPage
