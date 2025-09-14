"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { FaBars, FaTimes } from "react-icons/fa"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Subsidiaries", href: "/subsidiaries" },
    { name: "Strategy", href: "/strategy" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="bg-brand-900 fixed w-full z-50 shadow-lg backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-4">
          <div className="relative w-16 md:w-100 h-40 md:h-20">
            <Image
              src="/logo.png"
              alt="Keystone Group Logo"
              fill
              className="object-contain rounded-full"
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-neutral-100 font-medium">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative group hover:text-mint-500 transition"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-mint-500 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-neutral-100 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-brand-700 overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="block text-neutral-100 py-3 px-6 hover:text-mint-500 transition text-lg"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </header>
  )
}
