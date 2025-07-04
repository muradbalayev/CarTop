import React from 'react'
import Copy from '../common/Copy'

const CallToAction = () => {
  return (
    <section className="py-20 bg-blue-600 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500 rounded-full opacity-30"></div>
      <div className="absolute bottom-12 -left-12 w-40 h-40 bg-blue-500 rounded-full opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500 rounded-full opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Copy delay={0}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Find Your Perfect Chinese Car?</h2>
          </Copy>
          <Copy delay={0.2}>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Visit our showroom today or contact us to schedule a test drive. Our team of experts is ready to help you find the perfect car for your needs.
          </p>
          </Copy>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 inline-block text-center">
              Visit Showroom
            </a>
            <a href="#" className="bg-transparent hover:bg-blue-700 text-white border border-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 inline-block text-center">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
