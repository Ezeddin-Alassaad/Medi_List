import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
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
  title: "MediList - معلومات حول الأمراض المزمنة والعلاجات الصحية",
  description: "اكتشف معلومات شاملة حول الأمراض المزمنة، الوقاية، والعلاجات الصحية الفعالة مع MediList.",
  keywords: "الأمراض المزمنة, صحة, علاج, وقاية, معلومات طبية",
  openGraph: {
    title: "MediList - صحتك بين يديك",
    description: "دليل شامل حول الأمراض المزمنة وطرق الوقاية والعلاج.",
    url: "https://medilist.vercel.app",
    type: "website",
    images: [
      {
        url: "https://medilist.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MediList - معلومات صحية",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MediList - معلومات صحية",
    description: "تعرف على الأمراض المزمنة وكيفية الوقاية منها.",
    images: ["https://medilist.vercel.app/og-image.jpg"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
       <Head>
        <meta name="google-site-verification" content="QkH_5OHsGxRk4B09p0mgV-w5c0gYwDnJfJsiYZYCIi8" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://medilist.vercel.app" />
      </Head>
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
