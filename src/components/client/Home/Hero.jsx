import React from 'react'
import heroImg from '../../../assets/images/hero5.webp'
import Copy from '../common/Copy'
const Hero = () => {
  return (
    <section className='relative w-full overflow-hidden'>
      <div className='w-full aspect-[16/9] md:aspect-[21/9] p-8 z-0  overflow-hidden bg-white'>
        <img 
          src={heroImg} 
          alt="Luxury Car" 
          className="w-full h-full object-cover rounded-4xl heroImg"
        />
      </div>
      <div className='absolute left-[0%] top-[16%] z-10 flex items-center justify-start px-8 md:px-16 lg:px-24'>
        <div className='text-left max-w-[600px]'>
          <Copy delay={0}>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4'>
            <span className='text-white'>Chinese Cars and Spare Parts</span>
          </h1>
          </Copy>
          <Copy delay={0.2}>
          <p className='text-sm md:text-base lg:text-xl text-gray-200 mb-4 md:mb-8'>
            We are the largest supplier of Chinese cars and spare parts in Azerbaijan. We offer high-quality and affordable products.
          </p>
          </Copy>
          <div className='flex flex-col sm:flex-row justify-start gap-4'>
            <a href='#' className='bg-transparent hover:bg-white/10 text-white border border-white font-bold py-2 md:py-3 px-6 md:px-8 rounded-full transition duration-300 transform hover:scale-105 inline-block text-center'>
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
