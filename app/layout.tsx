import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {

  metadataBase: new URL(
    "https://adbazaar-website.vercel.app"
  ),


  title:
    "Ad Bazaar Kanpur | Digital Printing & Branding Solutions",


  description:
    "Ad Bazaar Kanpur offers Digital Printing, Flex Printing, ACP Sign Boards, Glow Sign Boards, Visiting Cards, Wedding Cards and complete advertising solutions in Kanpur.",


  keywords: [

    "Ad Bazaar",
    "Ad Bazaar Kanpur",
    "Digital Printing Kanpur",
    "Flex Printing Kanpur",
    "ACP Board Printing Kanpur",
    "Glow Sign Board Kanpur",
    "LED Sign Board Kanpur",
    "Visiting Card Printing Kanpur",
    "Wedding Card Printing Kanpur",
    "Advertising Agency Kanpur",
    "Printing Shop Lal Bangla Kanpur"

  ],


  authors: [
    {
      name: "Ad Bazaar Kanpur"
    }
  ],


  creator: "Ad Bazaar",


  openGraph: {

    title:
      "Ad Bazaar Kanpur | All Type of Printing Solution",


    description:
      "Professional Digital Printing and Branding Solutions in Kanpur.",


    type:
      "website",


    siteName:
      "Ad Bazaar Kanpur",


    locale:
      "en_IN",

  },


  robots: {

    index: true,
    follow: true,

  },


  icons: {

    icon: "/favicon.ico",

  },

};



export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {


  return (

    <html lang="en-IN">


      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        {children}

      </body>


    </html>

  );

}