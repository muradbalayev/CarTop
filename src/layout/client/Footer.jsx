import React from 'react';
import { Link } from 'react-router-dom';
import Copy from '../../components/client/common/Copy';
const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-16  mx-auto">
      <div className="container mx-auto px-4 max-w-[1920px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left column - Logo and copyright */}
          <div className="flex flex-col">
            <div className="mb-6">
            <Copy delay={0}>
            <div className="w-48 h-48 bg-gray-100 flex items-center justify-center mr-2">
                <img src='/logo.png' className="w-full h-full object-contain"/>
              </div>
              </Copy>          
                </div>
            <Copy delay={0.2}>
            <div className="mt-auto text-sm text-gray-600">
              <p>© 2025 CarTop</p>
              <p>10:04 PM QLD, WE ARE CLOSED</p>
            </div>
            </Copy>
          </div>

          {/* Middle column - Navigation */}
          <div>
            <Copy delay={0.2}>
            <div className="mb-4 text-sm uppercase text-gray-500">
              [NAVIGATION]
            </div>
            </Copy>
            <nav className="flex flex-col space-y-3">
              <Copy delay={0.4}>
              <Link to="/" className="text-2xl font-medium hover:text-primary-600 transition-colors">Home</Link>
              </Copy>
              <Copy delay={0.6}>
              <Link to="/about" className="text-2xl font-medium hover:text-primary-600 transition-colors">About</Link>
              </Copy>
              <Copy delay={0.8}>
              <Link to="/contact" className="text-2xl font-medium hover:text-primary-600 transition-colors">Contact Us</Link>
              </Copy>
            </nav>
            <Copy delay={1}>
            <div className="mt-8 space-y-2">
              <div className="text-sm uppercase text-gray-500">PRIVACY POLICY</div>
              <div className="text-sm uppercase text-gray-500">TERMS OF SERVICE</div>
            </div>
            </Copy>
          </div>

          {/* Right column - Info and acknowledgement */}
          <div>
            <Copy delay={0.2}>
            <div className="mb-4 text-sm uppercase text-gray-500">
              [ACKNOWLEDGEMENT]
            </div>
            </Copy>
            <Copy delay={0.4}>
            <p className="text-sm mb-6">
              We respectfully acknowledge the people, the Traditional Owners and Custodians of the 
              Country on which we work. We pay our respects to Elders past and present, and acknowledge their 
              continuing connection to land, sea and community.
            </p>
            </Copy>

            <Copy delay={0.2}>
            <div className="mb-4 mt-8 text-sm uppercase text-gray-500">
              [INFO]
            </div>
            </Copy>
            <Copy delay={0.4}>
            <div className="space-y-1 text-sm">
              <p><span className="font-medium">A:</span> Baku, Azerbaijan</p>
              <p><span className="font-medium">E:</span> info@cartop.az</p>
              <p><span className="font-medium">P:</span> +994 50 123 45 67</p>
              <p><span className="font-medium">H:</span> Monday to Friday, 8:30am - 5:00pm</p>
            </div>
            </Copy>

            <Copy delay={0.6}>
            <div className="mt-8 flex items-center">
              <div className="w-16 h-16 bg-gray-100 flex items-center justify-center mr-2">
                <img src='/logo.png' className="w-full h-full object-contain"/>
              </div>
              <div className="text-xs text-gray-500">
                MADE BY CORE
              </div>
            </div>
            </Copy>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
