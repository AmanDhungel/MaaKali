import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maa Kali Hardware Shop in Bhaktapur | Radhe Radhe Hardware",
  description:
    "Hardware located on the main road in Bhaktapur, Radhe Radhe. Maa kali Hardware is your one-stop solution for all home improvement needs in Bhaktapur. We offer a wide range of products including plumbing, paints, tools, and more. Visit us for quality service and genuine products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <div className="min-h-[80vh]">{children}</div>
        <ToastContainer />
        <Footer />
      </body>
    </html>
  );
}
