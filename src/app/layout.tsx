import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mangaleswaran Pavithar | Portfolio",
  description: "Premium personal portfolio of Mangaleswaran Pavithar - Software Engineer, Full Stack Developer, UI/UX Designer, Project Manager.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} antialiased scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col relative bg-[#0d0d0d] text-white/80 selection:bg-white/20 selection:text-white">
        {/* Subtle background glow effect if needed */}
        <div className="fixed inset-0 z-[-1] bg-black bg-opacity-90"></div>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
