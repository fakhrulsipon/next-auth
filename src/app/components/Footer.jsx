"use client"
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (!pathname.includes('user-dashboard')) {
    return (
      <footer className="bg-white text-black py-10 text-center shadow-lg border-t border-gray-100">
        {/* Logo + Name */}
        <div className="flex justify-center items-center gap-3 mb-4">
          <img
            className="w-14 h-14 rounded-full shadow-md border border-gray-200"
            src="/my-store.webp"
            alt="MyStore Logo"
          />
          <span className="text-3xl font-extrabold text-blue-600 tracking-wide">
            MyStore
          </span>
        </div>

        {/* Tagline */}
        <p className="mb-6 text-gray-500 max-w-md mx-auto text-lg italic">
          Your trusted destination for <span className="text-blue-500">quality products</span>.
        </p>

        {/* Links */}
        <div className="flex justify-center gap-8 mb-6 text-sm font-medium">
          <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
            Terms
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 mb-6">
          <a href="#" className="text-gray-500 hover:text-blue-500 transition-transform duration-300 hover:scale-110">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-500 transition-transform duration-300 hover:scale-110">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-500 transition-transform duration-300 hover:scale-110">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} <span className="font-semibold text-blue-600">MyStore</span>. All rights reserved.
        </p>
      </footer>

    );
  }
  else {
    return <></>
  }

}
