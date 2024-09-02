import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./layout/Navbar";


import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emmanuel Asamoah",
  description: "Frontend developer with in-depth knowledge of transforming designs into application.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans antialiased`}>
        <main className="min-h-screen">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
