import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[rgb(227,225,225)] text-black" dir='ltr' >
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Description */}
        <div className="text-center md:text-right mb-4 md:mb-0">
          <Link 
            href="/" 
            className="text-3xl font-extrabold flex items-center justify-center md:justify-end"
          >
            <Image
                          src="/logo.png" 
                          alt="Thssan Logo" 
                          width={120} 
                          height={40} 
                          style={{ objectFit: 'contain' }}
                        />
           <span className="text-green-600">تحسَّن</span>
          </Link>
          <p className="mt-2 font-extrabold text-sm tracking-wide">
            مصدرك الموثوق للمعلومات الطبية
          </p>
        </div>
        {/* Social Media Icons */}
      <div className="flex space-x-8">
        <a href="#" aria-label="Facebook" className="hover:text-green-600 transition-colors duration-200">
          <FaFacebookF size={24} className="text-green-600" />
        </a>
        <a href="#" aria-label="Twitter" className="hover:text-green-600 transition-colors duration-200">
          <FaTwitter size={24} className="text-green-600" />
        </a>
        <a href="#" aria-label="Instagram" className="hover:text-green-600 transition-colors duration-200">
          <FaInstagram size={24} className="text-green-600" />
        </a>
      </div>
      </div>
      <div className="bg-green-700 text-center py-4">
        <p className="text-xs">
          © 2025 MediList جميع الحقوق محفوظة
          <Link href="/privacy" className="underline hover:text-green-300 ml-6">
            سياسة الخصوصية  
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;