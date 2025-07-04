import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Home = () => {
  // References for GSAP animations
  const navRef = useRef(null)
  const headingRef = useRef(null)
  const subheadingRef = useRef(null)
  const ctaRef = useRef(null)

  // GSAP animations on component mount
  useEffect(() => {
    // Simple animation for hero section without complex animations
    const heroTl = gsap.timeline()
    
    heroTl.from(navRef.current, {
      y: -20,
      opacity: 0,
      duration: 0.5,
      ease: 'power1.out'
    })
    .from(headingRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.5,
      ease: 'power1.out'
    }, '-=0.2')
    .from(subheadingRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.5,
      ease: 'power1.out'
    }, '-=0.3')
    .from(ctaRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: 'power1.out'
    }, '-=0.2')

    // Clean up animations
    return () => {
      heroTl.kill()
    }
  }, [])

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center">
              <span className="text-xl font-bold">A</span>
            </div>
            <span className="text-xl font-bold">AzeriAuto</span>
          </div>
          
          <div className="hidden md:flex space-x-8 text-gray-300">
            <a href="#" className="hover:text-blue-500 transition duration-300">Ana Səhifə</a>
            <a href="#" className="hover:text-blue-500 transition duration-300">Avtomobillər</a>
            <a href="#" className="hover:text-blue-500 transition duration-300">Ehtiyat Hissələri</a>
            <a href="#" className="hover:text-blue-500 transition duration-300">Haqqımızda</a>
            <a href="#" className="hover:text-blue-500 transition duration-300">Əlaqə</a>
          </div>
          
          <div className="md:hidden">
            <button className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-blue-900/30 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
            alt="Luxury Car" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Hero content */}
        <div className="container mx-auto px-4 z-10 text-center md:text-left md:ml-20 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            <span className="text-white">Çin Avtomobilləri və </span>
            <span className="text-blue-500">Ehtiyat Hissələri</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
            Azərbaycanda ən böyük Çin avtomobil və ehtiyat hissələri təchizatçısı. Keyfiyyətli və sərfəli qiymətlərlə.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <a href="#" className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 inline-block text-center">
              Kataloqa Baxın
            </a>
            <a href="#" className="bg-transparent hover:bg-white/10 text-white border border-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 inline-block text-center">
              Bizimlə Əlaqə
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Niyə Bizi <span className="text-blue-500">Seçməlisiniz</span></h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Azərbaycanda Çin avtomobilləri və ehtiyat hissələri üzrə lider şirkət</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-800 rounded-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-900/20">
              <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center md:text-left">Sərfəli Qiymətlər</h3>
              <p className="text-gray-400 text-center md:text-left">Ən münasib qiymətlərlə keyfiyyətli Çin avtomobilləri və orijinal ehtiyat hissələri təklif edirik.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-gray-800 rounded-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-900/20">
              <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center md:text-left">Zəmanət</h3>
              <p className="text-gray-400 text-center md:text-left">Bütün avtomobil və ehtiyat hissələrinə tam zəmanət veririk. Keyfiyyətə tam əminlik.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-gray-800 rounded-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-900/20">
              <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center md:text-left">Sürətli Xidmət</h3>
              <p className="text-gray-400 text-center md:text-left">Sifarişləriniz qısa müddətdə çatdırılır və peşəkar komandamız tərəfindən quraşdırılır.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Car Showcase Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Populyar <span className="text-blue-500">Modellər</span></h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Azərbaycanda ən çox satılan Çin avtomobilləri ilə tanış olun</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Car 1 */}
            <div className="bg-gray-900 rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-900/20 group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" 
                  alt="Chinese SUV" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Chery Tiggo 8 Pro</h3>
                <p className="text-gray-400 mb-4">Müasir dizayn və yüksək texnologiya ilə təchiz edilmiş premium SUV.</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-500 font-bold text-xl">42,900 AZN</span>
                  <a href="#" className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 text-sm">Ətraflı Baxın</a>
                </div>
              </div>
            </div>
            
            {/* Car 2 */}
            <div className="bg-gray-900 rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-900/20 group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1583267746897-2cf66319ef97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="Chinese Sedan" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Geely Emgrand</h3>
                <p className="text-gray-400 mb-4">Ekonomik və rahat sürüş təcrübəsi təklif edən sedan.</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-500 font-bold text-xl">28,500 AZN</span>
                  <a href="#" className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 text-sm">Ətraflı Baxın</a>
                </div>
              </div>
            </div>
            
            {/* Car 3 */}
            <div className="bg-gray-900 rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-900/20 group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80" 
                  alt="Chinese Crossover" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Haval Jolion</h3>
                <p className="text-gray-400 mb-4">Kompakt və yakıt ekonomik crossover, şəhər sürüşü üçün ideal.</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-500 font-bold text-xl">35,700 AZN</span>
                  <a href="#" className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 text-sm">Ətraflı Baxın</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="#" className="inline-flex items-center justify-center bg-transparent hover:bg-blue-700 text-blue-500 hover:text-white border border-blue-500 hover:border-blue-700 font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
              Bütün Modellərə Baxın
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Müştəri <span className="text-blue-500">Rəyləri</span></h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Müştərilərimizin bizim haqqımızda dedikləri</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-800 rounded-xl p-8 relative">
              <div className="absolute -top-5 left-8 text-blue-500 text-7xl opacity-20">“</div>
              <p className="text-gray-300 mb-6 relative z-10">AzeriAuto-dan aldığım Chery Tiggo 8 Pro ilə tam məmnunam. Keyfiyyətli avtomobil və mükəmməl xidmət. Hər kəsə tövsiyə edirəm.</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl font-bold">E</span>
                </div>
                <div>
                  <h4 className="font-bold">Eldar Məmmədov</h4>
                  <p className="text-gray-500 text-sm">Bakı, Azərbaycan</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-gray-800 rounded-xl p-8 relative">
              <div className="absolute -top-5 left-8 text-blue-500 text-7xl opacity-20">“</div>
              <p className="text-gray-300 mb-6 relative z-10">Ehtiyat hissələrinin çatdırılması və quraşdırılması çox sürətli oldu. Qiymətlər də çox münasibdir. Təşəkkürlər!</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl font-bold">S</span>
                </div>
                <div>
                  <h4 className="font-bold">Səbinə Əliyeva</h4>
                  <p className="text-gray-500 text-sm">Gəncə, Azərbaycan</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-gray-800 rounded-xl p-8 relative">
              <div className="absolute -top-5 left-8 text-blue-500 text-7xl opacity-20">“</div>
              <p className="text-gray-300 mb-6 relative z-10">Geely Emgrand avtomobilini AzeriAuto-dan aldım. Həm qiymət, həm də keyfiyyət baxımından çox məmnunam. Satış sonrası xidmət də əla!</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl font-bold">R</span>
                </div>
                <div>
                  <h4 className="font-bold">Rəşad Həsənov</h4>
                  <p className="text-gray-500 text-sm">Sumqayıt, Azərbaycan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Bizimlə <span className="text-blue-500">Əlaqə Saxlayın</span></h2>
              <p className="text-xl text-gray-400 mb-8">Sualınız var? Bizə yazın və ya zəng edin. Komandaımız sizə kömək etmək üçün hər zaman hazırdır.</p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Ofisimiz</h4>
                    <p className="text-gray-400">Bakı şəhəri, Nərimanov rayonu, Heydər Əliyev prospekti, 103A</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Əlaqə</h4>
                    <p className="text-gray-400">+994 50 123 45 67</p>
                    <p className="text-gray-400">info@azeriauto.az</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">İş Saatları</h4>
                    <p className="text-gray-400">Həftəiçi: 09:00 - 18:00</p>
                    <p className="text-gray-400">Həftəsonu: 10:00 - 16:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Mesaj Göndərin</h3>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Adınız</label>
                    <input type="text" id="name" className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">E-poçt</label>
                    <input type="email" id="email" className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Mövzu</label>
                  <input type="text" id="subject" className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Mesajınız</label>
                  <textarea id="message" rows="4" className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>
                
                <button type="submit" className="w-full bg-blue-700 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
                  Göndər
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold">A</span>
                </div>
                <span className="text-xl font-bold">AzeriAuto</span>
              </div>
              <p className="text-gray-400 mb-6">Azərbaycanda Çin avtomobilləri və ehtiyat hissələri üzrə lider şirkət.</p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-blue-500 hover:bg-blue-700 hover:text-white transition duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-blue-500 hover:bg-blue-700 hover:text-white transition duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-blue-500 hover:bg-blue-700 hover:text-white transition duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Sürətli Linklər</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300">Ana Səhifə</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300">Avtomobillər</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300">Ehtiyat Hissələri</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300">Xidmətlərimiz</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300">Haqqımızda</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300">Əlaqə</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Avtomobil Markaları</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300">Chery</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300">Geely</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300">Haval</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300">BYD</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300">Great Wall</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300">MG</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Abunə Olun</h4>
              <p className="text-gray-400 mb-4">Yeni modellər və xüsusi təkliflərdən xəbərdar olmaq üçün abunə olun.</p>
              <form className="flex">
                <input type="email" placeholder="E-poçt ünvanınız" className="bg-gray-800 border border-gray-700 rounded-l-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" />
                <button type="submit" className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-r-lg transition duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-500">&copy; {new Date().getFullYear()} AzeriAuto. Bütün hüquqlar qorunur.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
