import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mywebcraft.in"),

  title: {
    default: "WebCraft | Website Developer & Web Development Company in Patna",
    template: "%s | WebCraft",
  },

  description:
    "WebCraft is a professional website development company in Patna offering business websites, e-commerce websites, custom web development and responsive website design services across India.",

  keywords: [
    "website developer in Patna",
    "website development company in Patna",
    "web developer in Patna",
    "website designer in Patna",
    "web design company in Patna",
    "website development company in Bihar",
    "business website development",
    "ecommerce website development",
    "custom website development",
    "professional website developer",
    "responsive website design",
    "website development company in India",
    "WebCraft",
  ],

  authors: [
    {
      name: "WebCraft",
      url: "https://www.mywebcraft.in",
    },
  ],

  creator: "WebCraft",
  publisher: "WebCraft",

  alternates: {
    canonical: "https://www.mywebcraft.in/",
  },

  openGraph: {
    title: "WebCraft | Website Development Company in Patna",
    description:
      "Professional website development in Patna for businesses, startups and brands. Business websites, e-commerce websites and custom web solutions.",
    url: "https://www.mywebcraft.in/",
    siteName: "WebCraft",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "WebCraft | Website Development Company in Patna",
    description:
      "Professional business, e-commerce and custom website development services by WebCraft in Patna, Bihar.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "Website Development",

  other: {
    "geo.region": "IN-BR",
    "geo.placename": "Patna, Bihar",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.mywebcraft.in/#organization",

  name: "WebCraft",
  url: "https://www.mywebcraft.in/",

  description:
    "WebCraft is a professional website development company in Patna, Bihar providing business websites, e-commerce websites, landing pages, custom web development and website maintenance services.",

  telephone: "+917572002836",
  email: "business@mywebcraft.in",

  address: {
    "@type": "PostalAddress",
    addressLocality: "Patna",
    addressRegion: "Bihar",
    addressCountry: "IN",
  },

  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+917572002836",
    email: "business@mywebcraft.in",
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"],
  },

  areaServed: {
    "@type": "Country",
    name: "India",
  },

  knowsAbout: [
    "Website Development",
    "Website Design",
    "E-Commerce Website Development",
    "Business Website Development",
    "Landing Page Design",
    "Web Application Development",
    "Website Maintenance",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />

        {children}
      </body>
    </html>
  );
}