import React from 'react'
import byd from '../../../assets/car-logos/byd.png'
import chery from '../../../assets/car-logos/chery.png'
import geely from '../../../assets/car-logos/geely.png'
import haval from '../../../assets/car-logos/haval.png'
import Copy from '../common/Copy'

const Brands = () => {
  // Sample brand logos - in a real application, you would import these from your assets folder
  const brands = [
    { name: 'Chery', logo: chery },
    { name: 'Geely', logo: geely },
    { name: 'Haval', logo: haval },
    { name: 'BYD', logo: byd },
    
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Copy delay={0}>
          <span className="text-blue-600 font-medium">TRUSTED BRANDS</span>
          </Copy>
          <Copy delay={0.2}>
          <h2 className="text-3xl font-bold mt-2">We Work With The Best Chinese Car Brands</h2>
          </Copy>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {brands.map((brand, index) => (
            <div key={index} className="flex items-center justify-center p-4 bg-gray-50 rounded-xl hover:shadow-md transition-all duration-300">
              <img 
                src={brand.logo} 
                alt={`${brand.name} Logo`} 
                className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Brands
