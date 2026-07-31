export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "PrintingService",

    name: "Ad Bazaar",
    description:
      "Ad Bazaar provides all type of printing solutions in Kanpur including Digital Printing, Flex Printing, Banner Printing, Visiting Card Printing, Wedding Card Printing and Vinyl Printing.",

    image: "https://adbazaar-website.vercel.app/logo.png",

    url: "https://adbazaar-website.vercel.app",

    telephone: [
      "+91-9026283091",
      "+91-7355470776"
    ],

    email: "adbazar6@gmail.com",

    address: {
      "@type": "PostalAddress",
      streetAddress:
        "65-A, Pardevanpur, Near Poonam Talkies, Lal Bangla",
      addressLocality: "Kanpur",
      addressRegion: "Uttar Pradesh",
      postalCode: "208007",
      addressCountry: "IN",
    },

    areaServed: {
      "@type": "City",
      name: "Kanpur"
    },

    openingHours: "Mo-Su 10:00-21:00",

    priceRange: "₹₹",

    sameAs: [
      // Google Business Profile URL यहां जोड़ सकते हैं
      // Instagram URL यहां जोड़ सकते हैं
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}