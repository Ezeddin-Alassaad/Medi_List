import React from 'react';
import Link from 'next/link';
import { LuPill } from 'react-icons/lu';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[rgb(227,225,225)] text-black" dir="rtl">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Description */}
        <div className="text-center md:text-right mb-4 md:mb-0">
          <Link 
            href="/" 
            className="text-3xl font-extrabold flex items-center justify-center md:justify-end"
          >
           <span className="text-green-600">List </span> <LuPill className="mx-1" /> <span className="text-green-600">Medi</span>
          </Link>
          <p className="mt-2 font-extrabold text-sm tracking-wide">
            مصدرك الموثوق للمعلومات الطبية.
          </p>
        </div>
        {/* Social Media Icons */}
        <div className="flex space-x-reverse space-x-8">
          <a 
            href="#"
            className="hover:text-green-600 transition-colors duration-200"
            aria-label="Facebook"
          >
            <FaFacebookF size={24} className="text-green-600" />
          </a>
          <a 
            href="#"
            className="hover:text-green-600 transition-colors duration-200"
            aria-label="Twitter"
          >
            <FaTwitter size={24} className="text-green-600" />
          </a>
          <a 
            href="#"
            className="hover:text-green-600 transition-colors duration-200"
            aria-label="Instagram"
          >
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