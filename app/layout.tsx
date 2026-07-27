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

  title:
    "Ad Bazaar Kanpur | Digital Printing, Flex Printing & Branding Solutions",


  description:
    "Ad Bazaar Kanpur provides Digital Printing, Flex Printing, ACP Sign Board, Glow Sign Board, Visiting Cards, Wedding Cards and complete advertising solutions.",



  keywords: [

    "Ad Bazaar Kanpur",
    "Digital Printing Kanpur",
    "Flex Printing Kanpur",
    "ACP Sign Board Kanpur",
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



  openGraph: {

    title:
      "Ad Bazaar Kanpur | All Type of Printing Solution",


    description:
      "Professional printing and branding solutions in Kanpur.",


    type: "website",


    siteName:
      "Ad Bazaar"

  },



  robots: {

    index: true,
    follow: true

  },


};



export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {


  return (

    <html lang="en">


      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        {children}

      </body>


    </html>

  );

}