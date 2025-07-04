import React from 'react'
import Hero from '../../components/client/Home/Hero'
import FeaturedCars from '../../components/client/Home/FeaturedCars'
import Features from '../../components/client/Home/Features'
import Testimonials from '../../components/client/Home/Testimonials'
import Brands from '../../components/client/Home/Brands'
import CallToAction from '../../components/client/Home/CallToAction'
import Contact from '../../components/client/Home/Contact'

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      {/* <FeaturedCars />` */}
      <Features />
      <Testimonials />
      <Brands />
      <CallToAction />
      <Contact />
    </div>
  )
}

export default HomePage
