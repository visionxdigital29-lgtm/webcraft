import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mywebcraft.in"),

  title: {
    default: "WebCraft | Website Developer & Website Development Company",
    template: "%s | WebCraft",
  },

  description:
    "WebCraft is a professional website development company creating modern, fast, secure and responsive business websites, e-commerce websites and custom websites in India.",

  keywords: [
    "website developer",
    "website development company",
    "website designer",
    "web developer",
    "website developer in India",
    "website design company",
    "business website developer",
    "ecommerce website developer",
    "custom website development",
    "professional website development",
    "affordable website developer",
    "website banwane wala",
    "website banwana hai",
    "website designing services",
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
    title: "WebCraft | Professional Website Development Company",
    description:
      "Modern, fast, secure and responsive websites for businesses, startups and brands. Get your professional website built by WebCraft.",
    url: "https://www.mywebcraft.in/",
    siteName: "WebCraft",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "WebCraft | Professional Website Development Company",
    description:
      "Professional business, e-commerce and custom website development services by WebCraft.",
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
    "geo.region": "IN",
    "geo.placename": "India",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}