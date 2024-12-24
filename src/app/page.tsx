import React from 'react'
import Hero from '../components/hero/hero'
import Todays from '../components/todays/todays'
import Catogries from '../components/catogries/catogries'
import ThisMonth from '../components/thisMonth/thisMonth'
import BlackPic from '../components/black-pic/black-pic'
import OurProduct from '../components/our-products/products'
import Featured from '../components/featured/featured'
import IconSection from '../components/icon-section/iconSection'



const Home = () => {
  return (
    <div>
      <Hero />
      <Todays />
      <Catogries />
      <ThisMonth />
      <BlackPic />
      <OurProduct />
      <Featured />
      <IconSection />
      
      
    </div>
  )
}

export default Home