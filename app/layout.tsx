import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WebCraft | Premium Website Development Agency",
  description:
    "WebCraft builds modern, fast, secure and high-converting websites for businesses.",
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