"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { SessionProvider, useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <SessionProvider>
      <NavbarContent />
    </SessionProvider>
  );
}


function NavbarContent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const { data: session } = useSession();

  const mobileRef = useRef(null);
  const userRef = useRef(null);

  // Click outside handler
  useEffect(() => {
    function handleClickOutside(event) {
      if (mobileRef.current && !mobileRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
      if (userRef.current && !userRef.current.contains(event.target)) {
        setUserDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  

  const pathname = usePathname();
  if (!pathname.includes('user-dashboard')) {
    return (
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Left side: MyStore + Hamburger */}
          <div className="flex items-center space-x-4">
            <div className="lg:hidden" ref={mobileRef}>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 focus:outline-none"
              >
                {mobileMenuOpen ? (
                  <span className="text-2xl">&#10005;</span>
                ) : (
                  <span className="text-2xl">&#9776;</span>
                )}
              </button>

              {/* Mobile Dropdown */}
              {mobileMenuOpen && (
                <div className="absolute top-16 left-4 w-40 bg-white rounded shadow-lg flex flex-col px-4 py-2 space-y-2 z-20">
                  <NavLink href="/">Home</NavLink>
                  <NavLink href="/products">Products</NavLink>
                </div>
              )}
            </div>
            <div className="flex justify-center items-center gap-2">
              <img className="w-12 h-12 rounded-full" src="/my-store.webp" alt="" />
              <span className="text-2xl font-bold text-blue-600">MyStore</span>
            </div>
          </div>

          {/* Center links for large screens */}
          <div className="hidden lg:flex space-x-8 font-medium items-center">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/products">Products</NavLink>
          </div>

          {/* Right side: login/user image */}
            <div className="flex items-center relative" ref={userRef}>
              {session ? (
                <div className="relative">
                  <img
                    src={session.user.image}
                    alt="User"
                    className="w-10 h-10 rounded-full cursor-pointer"
                    onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  />
                  {userDropdownOpen && (
                    <div className="absolute right-0 mt-3 w-40 bg-white rounded shadow-lg z-10 gap-4">
                      <Link
                        href="/user-dashboard"
                        className="block px-4 py-2 hover:text-white hover:bg-blue-300"
                        onClick={() => setUserDropdownOpen(false)}
                      >
                        Dashboard
                      </Link>
                      <button
                        onClick={() => signOut()}
                        className="w-full text-left px-4 py-2 hover:text-white hover:bg-blue-300"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link href="/login" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Login</Link>
              )}
            </div>
          
        </div>
      </nav>
    );
  }
  else {
    return <></>
  }


}
