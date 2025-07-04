import React from 'react'
import Copy from '../common/Copy'
const Testimonials = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16 text-center">
          <Copy delay={0}>
          <span className="text-blue-600 font-medium mb-2">TESTIMONIALS</span>
          </Copy>
          <Copy delay={0.2}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Customers Say</h2>
          </Copy>
          <Copy delay={0.4}>
          <p className="text-gray-600 max-w-2xl">
            Don't just take our word for it. Hear what our satisfied customers have to say about their experience with us.
          </p>
          </Copy>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 relative">
            <div className="absolute -top-5 right-8">
              <svg width="42" height="30" viewBox="0 0 42 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.6249 0.5C5.31738 0.5 0 5.81738 0 12.125C0 18.4326 5.31738 23.75 11.6249 23.75C13.3374 23.75 14.9661 23.3623 16.4161 22.6661C17.0374 25.6211 15.9312 28.7173 13.3374 29.5C18.7874 30.2812 23.75 25.9248 23.75 20.0623C23.75 16.3936 21.7 13.1499 18.7874 11.3499C18.7874 11.3499 18.7874 11.3499 18.7874 11.35C18.7874 5.81738 13.4699 0.5 7.16248 0.5H11.6249Z" fill="#2563EB" fillOpacity="0.1"/>
                <path d="M30.3749 0.5C24.0674 0.5 18.75 5.81738 18.75 12.125C18.75 18.4326 24.0674 23.75 30.3749 23.75C32.0874 23.75 33.7161 23.3623 35.1661 22.6661C35.7874 25.6211 34.6812 28.7173 32.0874 29.5C37.5374 30.2812 42.5 25.9248 42.5 20.0623C42.5 16.3936 40.45 13.1499 37.5374 11.3499C37.5374 11.3499 37.5374 11.3499 37.5374 11.35C37.5374 5.81738 32.2199 0.5 25.9125 0.5H30.3749Z" fill="#2563EB" fillOpacity="0.1"/>
              </svg>
            </div>
            <Copy delay={0}>
            <p className="text-gray-700 mb-6">
              I'm extremely satisfied with my Chery Tiggo 8 Pro from CarTop. The quality of the car and the service provided were excellent. I highly recommend them to everyone.
            </p>
            </Copy>
            <div className="flex items-center">
              <Copy delay={0.2}>
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                EM
              </div>
              </Copy>
              <div>
                <Copy delay={0.4}>
                <h4 className="font-bold">Eldar Mammadov</h4>
                </Copy>
                <Copy delay={0.6}>
                <p className="text-gray-500 text-sm">Baku, Azerbaijan</p>
                </Copy>
              </div>
              <div className="ml-auto flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          
          {/* Testimonial 2 */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 relative">
            <div className="absolute -top-5 right-8">
              <svg width="42" height="30" viewBox="0 0 42 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.6249 0.5C5.31738 0.5 0 5.81738 0 12.125C0 18.4326 5.31738 23.75 11.6249 23.75C13.3374 23.75 14.9661 23.3623 16.4161 22.6661C17.0374 25.6211 15.9312 28.7173 13.3374 29.5C18.7874 30.2812 23.75 25.9248 23.75 20.0623C23.75 16.3936 21.7 13.1499 18.7874 11.3499C18.7874 11.3499 18.7874 11.3499 18.7874 11.35C18.7874 5.81738 13.4699 0.5 7.16248 0.5H11.6249Z" fill="#2563EB" fillOpacity="0.1"/>
                <path d="M30.3749 0.5C24.0674 0.5 18.75 5.81738 18.75 12.125C18.75 18.4326 24.0674 23.75 30.3749 23.75C32.0874 23.75 33.7161 23.3623 35.1661 22.6661C35.7874 25.6211 34.6812 28.7173 32.0874 29.5C37.5374 30.2812 42.5 25.9248 42.5 20.0623C42.5 16.3936 40.45 13.1499 37.5374 11.3499C37.5374 11.3499 37.5374 11.3499 37.5374 11.35C37.5374 5.81738 32.2199 0.5 25.9125 0.5H30.3749Z" fill="#2563EB" fillOpacity="0.1"/>
              </svg>
            </div>
            <Copy delay={0}>
            <p className="text-gray-700 mb-6">
              The delivery and installation of spare parts was very fast. The prices are also very reasonable. Thank you for the excellent service!
            </p>
            </Copy>
            <div className="flex items-center">
              <Copy delay={0.2}>
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                SA
              </div>
              </Copy>
              <Copy delay={0.4}>
              <div>
                <h4 className="font-bold">Sabina Aliyeva</h4>
                <p className="text-gray-500 text-sm">Ganja, Azerbaijan</p>
              </div>
              </Copy>
              <div className="ml-auto flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          
          {/* Testimonial 3 */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 relative">
            <div className="absolute -top-5 right-8">
              <svg width="42" height="30" viewBox="0 0 42 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.6249 0.5C5.31738 0.5 0 5.81738 0 12.125C0 18.4326 5.31738 23.75 11.6249 23.75C13.3374 23.75 14.9661 23.3623 16.4161 22.6661C17.0374 25.6211 15.9312 28.7173 13.3374 29.5C18.7874 30.2812 23.75 25.9248 23.75 20.0623C23.75 16.3936 21.7 13.1499 18.7874 11.3499C18.7874 11.3499 18.7874 11.3499 18.7874 11.35C18.7874 5.81738 13.4699 0.5 7.16248 0.5H11.6249Z" fill="#2563EB" fillOpacity="0.1"/>
                <path d="M30.3749 0.5C24.0674 0.5 18.75 5.81738 18.75 12.125C18.75 18.4326 24.0674 23.75 30.3749 23.75C32.0874 23.75 33.7161 23.3623 35.1661 22.6661C35.7874 25.6211 34.6812 28.7173 32.0874 29.5C37.5374 30.2812 42.5 25.9248 42.5 20.0623C42.5 16.3936 40.45 13.1499 37.5374 11.3499C37.5374 11.3499 37.5374 11.3499 37.5374 11.35C37.5374 5.81738 32.2199 0.5 25.9125 0.5H30.3749Z" fill="#2563EB" fillOpacity="0.1"/>
              </svg>
            </div>
            <Copy delay={0}>
            <p className="text-gray-700 mb-6">
              I purchased a Geely Emgrand from CarTop. I am very satisfied with both the price and quality. The after-sales service is also excellent!
            </p>
            </Copy>
            <div className="flex items-center">
              <Copy delay={0.2}>
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                RH
              </div>
              </Copy>
              <Copy delay={0.4}>
              <div>
                <h4 className="font-bold">Rashad Hasanov</h4>
                <p className="text-gray-500 text-sm">Sumgayit, Azerbaijan</p>
              </div>
              </Copy>
              <div className="ml-auto flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* <div className="mt-16 text-center">
          <a href="#" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300">
            Read More Reviews
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div> */}
      </div>
    </section>
  )
}

export default Testimonials
