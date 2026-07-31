export const metadata: Metadata = {
  title: {
    default: "Ad Bazaar Kanpur | Digital Printing & All Type Printing Solution",
    template: "%s | Ad Bazaar Kanpur",
  },

  description:
    "Ad Bazaar Kanpur provides all type of printing solutions including Digital Printing, Flex Printing, Banner Printing, Visiting Card, Wedding Card, Vinyl Printing and more.",

  keywords: [
    "Digital Printing Service in Kanpur",
    "Printing Shop in Kanpur",
    "Flex Printing Kanpur",
    "Banner Printing Kanpur",
    "Visiting Card Printing Kanpur",
    "Wedding Card Printing Kanpur",
    "Vinyl Printing Kanpur",
    "Ad Bazaar Kanpur",
  ],

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

  metadataBase: new URL(
    "https://adbazaar-website.vercel.app"
  ),

  verification: {
    google: "v6Nr_6dRvadba76jCyANJhWPYTpC-vzBtnQsPNEDL2E",
  },

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  openGraph: {
    title: "Ad Bazaar | Premium Printing Solutions Kanpur",

    description:
      "Professional Digital Printing, Flex Printing, ACP Sign Boards, Glow Sign Boards, Wedding Cards, Visiting Cards, Banner Printing and Branding Solutions in Kanpur.",

    url: "https://adbazaar-website.vercel.app",

    siteName: "Ad Bazaar",

    locale: "en_IN",

    type: "website",

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
      "Digital Printing, Flex Printing, ACP Sign Boards, Wedding Cards, Visiting Cards & Branding Solutions.",

    images: ["/logo.png"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  themeColor: "#facc15",

  category: "Business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body>
         <LocalBusinessSchema />
        {children}
      </body>
    </html>
  );
}