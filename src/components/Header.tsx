"use client";

import Link from "next/link";
import { UserButton, useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";

export function Header() {
  const { isSignedIn } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);

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
        {isAdmin && (
          <Link href="/admin/events/new" className="text-blue-600 hover:text-blue-500 font-bold ml-4 transition-colors">
             + POST EVENT
          </Link>
        )}
      </nav>
      <div className="flex gap-4 items-center">
        {isSignedIn && <UserButton />}
        <Link href="/#services" className="bg-black text-white px-6 py-2.5 font-semibold hover:bg-gray-800 transition-all text-sm tracking-wide">
          VISIT US
        </Link>
      </div>
    </header>
  );
}
