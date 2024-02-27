import { Inter } from "next/font/google";
import "./globals.css";
import AppBar from "@/components/ui/AppBar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Golf SIte",
  description: "Sample Golfing Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppBar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
