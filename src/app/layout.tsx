import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
// import {Inter,Noto_Kufi_Arabic} from "Next/font/google"

// const inter=Inter({subsets:['Latin']})
// const kufiArabic=Noto_Kufi_Arabic({ subsets: ['arabic'], weight:['300','500']})


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MediList",
  description: "MediList Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        <main>
        {children}  
        </main>
        <Footer/>
      </body>
    </html>
  );
}
