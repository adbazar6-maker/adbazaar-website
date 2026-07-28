import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {

  title: "Ad Bazaar | All Type of Printing Solution in Kanpur",

  description:
    "Ad Bazaar Kanpur provides premium digital printing, flex printing, ACP sign board, glow sign board, wedding cards, branding and complete printing solutions.",


  keywords: [
    "Ad Bazaar Kanpur",
    "Digital Printing Kanpur",
    "Flex Printing Kanpur",
    "Wedding Card Printing Kanpur",
    "ACP Sign Board Kanpur",
    "Printing Shop Lal Bangla Kanpur",
    "All Type Printing Solution"
  ],


  authors: [
    {
      name: "Ad Bazaar"
    }
  ],


  creator: "Ad Bazaar",


  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },


  openGraph: {

    title:
      "Ad Bazaar | Premium Printing Solutions Kanpur",

    description:
      "Professional printing services including digital printing, signage, branding and wedding printing solutions.",

    type: "website",

    locale: "en_IN",

  },


  robots: {

    index: true,

    follow: true,

  },


};


export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {

  return (

    <html lang="en">

      <body>

        {children}

      </body>

    </html>

  );

}