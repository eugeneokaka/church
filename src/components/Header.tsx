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
    <header className="absolute top-0 w-full z-50 text-white p-6 md:px-12 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
      <Link href="/" className="text-2xl font-bold tracking-tighter uppercase drop-shadow-lg flex flex-col items-start leading-tight">
        <span>AGC Keringet</span>
      </Link>
      <nav className="hidden md:flex gap-8 text-sm font-medium tracking-wide items-center">
        <Link href="/" className="hover:text-gray-300 transition-colors drop-shadow-md">Home</Link>
        <Link href="/about" className="hover:text-gray-300 transition-colors drop-shadow-md">About Us</Link>
        <Link href="/ministries" className="hover:text-gray-300 transition-colors drop-shadow-md">Ministries</Link>
        <Link href="/events" className="hover:text-gray-300 transition-colors drop-shadow-md">Events</Link>
        <Link href="/#gallery" className="hover:text-gray-300 transition-colors drop-shadow-md">Gallery</Link>
        {isAdmin && (
          <Link href="/admin/events/new" className="text-blue-400 hover:text-blue-300 font-bold ml-4 transition-colors drop-shadow-md">
             + Post Event
          </Link>
        )}
      </nav>
      <div className="flex gap-4 items-center">
        {isSignedIn ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <Link href="/sign-in" className="text-sm font-semibold hover:text-gray-300 transition-colors drop-shadow-md">
            Sign In
          </Link>
        )}
        <Link href="/#services" className="bg-white text-black px-6 py-2.5 rounded-full font-semibold hover:bg-gray-100 transition-all text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5">
          Visit Us
        </Link>
      </div>
    </header>
  );
}
