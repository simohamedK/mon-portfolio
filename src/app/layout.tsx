import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Kamli Mohamed - Portfolio",
  description:
    "Portfolio personnel de Kamli Mohamed, développeur Full Stack & DevOps",
  icons: {
    icon: "/icons/programmation.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-900">
        <Navbar />
        <main className="p-6">{children} </main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
