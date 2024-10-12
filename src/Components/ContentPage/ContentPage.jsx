import React from 'react'
import HomeBook from '../HomePage/HomeBook/HomeBook'
import HomeWhyUs from '../HomePage/HomeWhyUs/HomeWhyUs'
import ContentHow from './ContentHow/ContentHow'
import ContentPageHeader from './ContentPageHeader'

const ContentPage = () => {
  return (
    <div className="homeContainer">
    <ContentPageHeader />
    <ContentHow/>
    <HomeWhyUs />
    <HomeBook />
  </div>
  )
}

export default ContentPage
