import type { Metadata } from "next";
import { Geist, Geist_Mono, Archivo, Space_Mono } from "next/font/google";
// @ts-expect-error: CSS side-effect import declaration is handled by Next.js
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import TanStackQuery from "@/context/TanStackQuery";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
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
        className={`${geistSans.variable} ${geistMono.variable} ${archivo.variable} ${spaceMono.variable} antialiased`}>
        <TanStackQuery>
          <Navbar />
          <div className="min-h-[80vh]">{children}</div>
          <ToastContainer />
          <Footer />
        </TanStackQuery>
      </body>
    </html>
  );
}
