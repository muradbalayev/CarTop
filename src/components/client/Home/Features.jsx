import React from 'react'
import Copy from '../common/Copy'
const Features = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Feature 1 */}
              <div className="bg-gray-50 p-8 rounded-3xl hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <Copy delay={0}>
                <h3 className="text-xl font-bold mb-3">Affordable Prices</h3>
                </Copy>
                <Copy delay={0.2}>
                <p className="text-gray-600">We offer high-quality Chinese cars and original spare parts at the most competitive prices in Azerbaijan.</p>
                </Copy>
              </div>
              
              {/* Feature 2 */}
              <div className="bg-gray-50 p-8 rounded-3xl hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <Copy delay={0}>
                <h3 className="text-xl font-bold mb-3">Full Warranty</h3>
                </Copy>
                <Copy delay={0.2}>
                <p className="text-gray-600">We provide complete warranty for all cars and spare parts. Full confidence in quality.</p>
                </Copy>
              </div>
              
              {/* Feature 3 */}
              <div className="bg-gray-50 p-8 rounded-3xl hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <Copy delay={0}>
                <h3 className="text-xl font-bold mb-3">Fast Service</h3>
                </Copy>
                <Copy delay={0.2}>
                <p className="text-gray-600">Your orders are delivered in a short time and installed by our professional team.</p>
                </Copy>
              </div>
              
              {/* Feature 4 */}
              <div className="bg-gray-50 p-8 rounded-3xl hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <Copy delay={0}>
                <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
                </Copy>
                <Copy delay={0.2}>
                <p className="text-gray-600">Our customer service team is available around the clock to assist you with any questions.</p>
                </Copy>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <Copy delay={0}>
            <h1 className="text-blue-600 font-medium mb-2 block">WHY CHOOSE US</h1>
            </Copy>
            <Copy delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">We Provide The Best Experience</h2>
            </Copy>
            <Copy delay={0.4}>
            <p className="text-gray-600 mb-8">
              As the leading supplier of Chinese cars and spare parts in Azerbaijan, we are committed to providing our customers with the best possible experience. Our team of experts is dedicated to helping you find the perfect car or part for your needs.
            </p>
            </Copy>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 inline-block text-center">
                Learn More
              </a>
              <a href="#" className="bg-transparent hover:bg-gray-100 text-gray-800 border border-gray-300 font-medium py-3 px-8 rounded-full transition-all duration-300 inline-block text-center">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
