
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Providers from "./Providers";
import { Toaster } from "react-hot-toast";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MyStore",
  description: "A simple Next.js product app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}>
        {/* Navbar সব পেইজে থাকবে */}


        
          <Providers>
            <Navbar />

            {/* ✅ Global Toaster */}
            <Toaster position="top-center" reverseOrder={false} />

            {/* মূল কনটেন্ট */}
            <main className="min-h-screen w-full mx-auto bg-gradient-to-r from-blue-50 to-blue-100">
              {children}
            </main>

            {/* Footer */}
            <Footer />
          </Providers>

       

      </body>
    </html>
  );
}
