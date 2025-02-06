"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingCart, Search, ChevronDown } from "lucide-react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    console.log("Closing mobile menu");
    setIsOpen(false);
    setDropdownOpen(false);
  };

  return (
    <nav className="bg-black text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" onClick={closeMobileMenu}>
          <div className="text-2xl font-bold cursor-pointer">
            <span className="text-white">Food</span>
            <span className="text-orange-500">tuck</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="hover:text-red-600">Home</Link>
          <Link href="/menu" className="hover:text-red-600">Menu</Link>
          <Link href="/blog" className="hover:text-red-600">Blog</Link>

          {/* Pages Dropdown */}
          <div className="relative dropdown">
            <button
              className="flex items-center hover:text-red-600"
              onClick={handleDropdownToggle}
            >
              Pages <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 w-36 bg-white shadow-md z-50">
                <div className="absolute z-50 bg-white shadow-md rounded">
                  <Link href="/chef" className="block px-4 py-2 hover:bg-gray-200 text-black" onClick={closeMobileMenu}>
                    Chef Page
                  </Link>
                  <Link href="/faq" className="block px-4 py-2 hover:bg-gray-200 text-black" onClick={closeMobileMenu}>
                    FAQ Page
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/about" className="hover:text-red-600">About</Link>
          <Link href="/shop" className="hover:text-red-600">Shop</Link>
          <Link href="/sign" className="hover:text-red-600">Contact</Link>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-800 text-white rounded-full py-1 px-4 pr-8 focus:outline-none"
            />
            <Search className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
          </div>

          <Link href="/cart" className="text-white hover:text-yellow-300 ml-2">
            <ShoppingCart className="w-6 h-6 cursor-pointer" />
          </Link>

          <SignedOut>
            <Link href="/sign" className="px-4 py-2 bg-blue-500 rounded">Sign In</Link>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/sign" />
          </SignedIn>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen((prev) => !prev)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white px-4 py-3">
          <div className="space-y-4">
            <Link href="/" className="block hover:text-orange-500" onClick={closeMobileMenu}>
              Home
            </Link>
            <Link href="/menu" className="block hover:text-orange-500" onClick={closeMobileMenu}>
              Menu
            </Link>
            <Link href="/blog" className="block hover:text-orange-500" onClick={closeMobileMenu}>
              Blog
            </Link>

            {/* Mobile Dropdown */}
            <div className="block">
              <button
                onClick={handleDropdownToggle}
                className="w-full text-left flex justify-between items-center hover:text-orange-500"
              >
                Pages <ChevronDown className="w-4 h-4" />
              </button>
              {dropdownOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link href="/chef" className="block hover:text-orange-500" onClick={closeMobileMenu}>
                    Chef Page
                  </Link>
                  <Link href="/faq" className="block hover:text-orange-500" onClick={closeMobileMenu}>
                    FAQ Page
                  </Link>
                </div>
              )}
            </div>

            <Link href="/about" className="block hover:text-orange-500" onClick={closeMobileMenu}>
              About
            </Link>
            <Link href="/shop" className="block hover:text-orange-500" onClick={closeMobileMenu}>
              Shop
            </Link>
            <Link href="/sign" className="block hover:text-orange-500" onClick={closeMobileMenu}>
              Contact
            </Link>

            {/* Mobile Search Bar */}
            <div className="mt-4 relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-800 text-white rounded-full w-full py-1 px-4 pr-8 focus:outline-none"
              />
              <Search className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
            </div>

            {/* Mobile Cart & Authentication */}
            <div className="flex space-x-4 mt-3">
              <Link href="/cart" className="text-white hover:text-yellow-300" onClick={closeMobileMenu}>
                <ShoppingCart className="w-6 h-6 cursor-pointer" />
              </Link>

              <SignedOut>
                <Link href="/sign" className="px-4 py-2 bg-blue-500 rounded" onClick={closeMobileMenu}>
                  Sign In
                </Link>
              </SignedOut>

              <SignedIn>
                <UserButton afterSignOutUrl="/sign" />
              </SignedIn>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
