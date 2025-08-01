import React from 'react'
import Copy from '../common/Copy'

const Contact = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <Copy delay={0}>
            <span className="text-blue-600 font-medium mb-2 block">GET IN TOUCH</span>
            </Copy>
            <Copy delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h2>
            </Copy>
            <Copy delay={0.4}>
            <p className="text-gray-600 mb-10">
              Have a question? Need to schedule a test drive? Our team is ready to assist you. Contact us today and we'll get back to you as soon as possible.
            </p>
            </Copy>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shrink-0 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <Copy delay={0.4}>
                <div>
                  <h3 className="text-xl font-bold mb-1">Our Location</h3>
                  <p className="text-gray-600">Baku, Narimanov district, Heydar Aliyev Avenue, 103A</p>
                </div>
                </Copy>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shrink-0 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <Copy delay={0.6}>
                <div>
                  <h3 className="text-xl font-bold mb-1">Contact Information</h3>
                  <p className="text-gray-600">+994 50 123 45 67</p>
                  <p className="text-gray-600">info@cartop.az</p>
                </div>
                </Copy>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shrink-0 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <Copy delay={0.8}>
                <div>
                  <h3 className="text-xl font-bold mb-1">Working Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
                </Copy>
              </div>
            </div>
            
            <div className="mt-10 flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <div className="bg-gray-50 p-8 rounded-3xl shadow-lg">
              <Copy delay={0}>
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              </Copy>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
              <Copy delay={0.2}>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                    </Copy>
                    <Copy delay={0.4}>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-white border border-gray-300 rounded-lg py-3 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                      placeholder="John Doe"
                    />
                    </Copy>
                  </div>
                  <div>
              <Copy delay={0.2}>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    </Copy>
                    <Copy delay={0.4}>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-white border border-gray-300 rounded-lg py-3 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                      placeholder="john@example.com"
                    />
                    </Copy>
                  </div>
                </div>
                
                <div className="mb-6">
                  <Copy delay={0.2}>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  </Copy>
                  <Copy delay={0.4}>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full bg-white border border-gray-300 rounded-lg py-3 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    placeholder="+994 50 123 45 67"
                  />
                  </Copy>
                </div>
                
                <div className="mb-6">
                  <Copy delay={0.2}>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  </Copy>
                  <Copy delay={0.4}>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full bg-white border border-gray-300 rounded-lg py-3 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    placeholder="How can we help you?"
                  />
                  </Copy>
                </div>
                
                <div className="mb-6">
                  <Copy delay={0.2}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                  </Copy>
                  <Copy delay={0.4}>
                  <textarea 
                    id="message" 
                    rows="5" 
                    className="w-full bg-white border border-gray-300 rounded-lg py-3 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    placeholder="Write your message here..."
                  ></textarea>
                  </Copy>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
