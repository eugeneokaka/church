"use client";

import Link from "next/link";
import { UserButton, useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";

export function Header() {
  const { isSignedIn } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      fetch("/api/user/role")
        .then((res) => res.json())
        .then((data) => {
          if (data.role === "admin") {
            setIsAdmin(true);
          }
        })
        .catch((err) => console.error("Failed to fetch user role", err));
    } else {
      setIsAdmin(false);
    }
  }, [isSignedIn]);

  return (
    <header className="absolute top-0 w-full z-50 bg-white text-black p-6 md:px-12 flex justify-between items-center shadow-sm">
      <Link href="/" className="text-2xl font-bold tracking-tighter uppercase flex flex-col items-start leading-tight text-black">
        <span>AGC Keringet</span>
      </Link>
      <nav className="hidden md:flex gap-8 text-sm font-medium tracking-wider items-center text-gray-700">
        <Link href="/" className="hover:text-black transition-colors">HOME</Link>
        <Link href="/about" className="hover:text-black transition-colors">ABOUT</Link>
        <Link href="/ministries" className="hover:text-black transition-colors">MINISTRIES</Link>
        <Link href="/events" className="hover:text-black transition-colors">EVENTS</Link>
        <Link href="/#gallery" className="hover:text-black transition-colors">GALLERY</Link>
        <Link href="/contact" className="hover:text-black transition-colors">CONTACT</Link>
        {isAdmin && (
          <Link href="/admin/events/new" className="text-blue-600 hover:text-blue-500 font-bold ml-4 transition-colors">
             + POST EVENT
          </Link>
        )}
      </nav>
      <div className="flex gap-4 items-center">
        {isSignedIn && <UserButton />}
        <Link href="/#services" className="hidden md:block bg-black text-white px-6 py-2.5 font-semibold hover:bg-gray-800 transition-all text-sm tracking-wide">
          VISIT US
        </Link>
        <button 
          className="md:hidden p-2 text-gray-700 hover:text-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}/>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col p-6 gap-4 md:hidden z-40 transition-all duration-300 ease-in-out origin-top ${
          isMobileMenuOpen ? "opacity-100 scale-y-100 visible py-6" : "opacity-0 scale-y-0 invisible py-0 h-0 overflow-hidden"
        }`}
      >
        <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 hover:text-black transition-colors font-medium">HOME</Link>
        <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 hover:text-black transition-colors font-medium">ABOUT</Link>
        <Link href="/ministries" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 hover:text-black transition-colors font-medium">MINISTRIES</Link>
        <Link href="/events" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 hover:text-black transition-colors font-medium">EVENTS</Link>
        <Link href="/#gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 hover:text-black transition-colors font-medium">GALLERY</Link>
        <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 hover:text-black transition-colors font-medium">CONTACT</Link>
        {isAdmin && (
          <Link href="/admin/events/new" onClick={() => setIsMobileMenuOpen(false)} className="text-blue-600 font-bold">
             + POST EVENT
          </Link>
        )}
        <Link href="/#services" onClick={() => setIsMobileMenuOpen(false)} className="bg-black text-white px-6 py-3 font-semibold hover:bg-gray-800 transition-all text-sm tracking-wide text-center mt-4">
          VISIT US
        </Link>
      </div>
    </header>
  );
}
