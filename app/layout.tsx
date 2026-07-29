import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ad Bazaar | All Type of Printing Solution in Kanpur",

  description:
    "Ad Bazaar provides Digital Printing, Flex Printing, ACP Sign Boards, Glow Sign Boards, Wedding Cards, Visiting Cards, Branding and Complete Printing Solutions in Kanpur.",

  keywords: [
    "Ad Bazaar Kanpur",
    "Digital Printing Kanpur",
    "Flex Printing Kanpur",
    "ACP Sign Board Kanpur",
    "Glow Sign Board Kanpur",
    "Wedding Card Printing Kanpur",
    "Visiting Card Printing Kanpur",
    "Printing Shop Kanpur",
    "Printing Shop Lal Bangla",
    "Branding Solutions Kanpur",
  ],

  authors: [
    {
      name: "Ad Bazaar",
    },
  ],

  creator: "Ad Bazaar",

  publisher: "Ad Bazaar",

  // Domain live होने के बाद इसे enable करें
  // metadataBase: new URL("https://adbazaar.in"),

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  openGraph: {
    title: "Ad Bazaar | Premium Printing Solutions Kanpur",

    description:
      "Professional Digital Printing, Flex Printing, ACP Sign Boards, Glow Sign Boards, Wedding Cards and Branding Solutions in Kanpur.",

    type: "website",

    locale: "en_IN",

    siteName: "Ad Bazaar",

    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Ad Bazaar Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Ad Bazaar | Premium Printing Solutions",

    description:
      "Digital Printing, Flex Printing, ACP Sign Boards, Wedding Cards & Branding Solutions.",

    images: ["/logo.png"],
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
      <body>{children}</body>
    </html>
  );
}