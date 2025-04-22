"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MdDriveFileRenameOutline, MdOutlineEmail } from "react-icons/md";
import { LuMessageSquareMore } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";

const ContactPage = () => {
  const whatsappLink = "https://wa.me/966559598098?text=Hello%2C%20I%20have%20a%20question%20regarding%20Sihati";

  return (
    <section 
      className="relative min-h-screen flex flex-col font-extrabold items-center justify-center text-white p-8 bg-cover bg-center" 
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {/* About Us Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-20 w-full max-w-4xl px-6 py-12 bg-opacity-90 rounded-lg shadow-xl mb-12"
      >
        <h2 className="text-3xl font-bold text-green-800 text-center mb-4">من نحن</h2>
        <p className="text-gray-700 text-lg leading-relaxed text-center">
          مرحبًا بكم في <span className="text-green-700 font-bold">Sihati</span>، وجهتكم الأولى للحصول على معلومات موثوقة حول الأمراض المزمنة.
          نحن نسعى إلى نشر الوعي الصحي وتوفير مصادر شاملة للمرضى والمختصين لمساعدتهم في التعامل مع الأمراض المزمنة بطريقة أفضل.
        </p>
      </motion.div>

      {/* Main Content */}
      <main className="relative z-20 w-full max-w-4xl px-6 py-12  bg-opacity-90 rounded-lg shadow-xl flex flex-col md:flex-row items-center gap-8">
        {/* Contact Form */}
        <div className="w-full md:w-2/3"
        >
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-green-800 text-center mb-8"
          >
            تواصل معنا
          </motion.h1>
          <motion.form
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8 p-4"
          >
            <Input placeholder="الاسم الكامل" className="text-gray-800 bg-gray-100 border-none p-4" />
            <Input type="email" placeholder="البريد الإلكتروني" className="text-gray-800 bg-gray-100 border-none p-4" />
            <Textarea placeholder="اكتب رسالتك هنا..." className="text-gray-800 bg-gray-100 border-none p-4" rows={5} />
              <Button className="w-full bg-green-600 hover:bg-green-800 text-white font-bold py-3"
              onClick={() => window.open(whatsappLink, '_blank', 'noopener,noreferrer')}>
                إرسال الرسالة عبر WhatsApp
              </Button>
          </motion.form>
        </div>

      {/* Animated Contact Icon */}
      <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }} 
          className="hidden md:block w-1/3  text-green-500 text-3xl"
        >
          <MdDriveFileRenameOutline className="animate-bounce mb-12" />
          <MdOutlineEmail className="animate-bounce mb-12" />
          <LuMessageSquareMore className="animate-bounce mb-20" />
          <FaWhatsapp className="animate-bounce " />
        </motion.div>        
      </main>

    </section>
  );
};

export default ContactPage;