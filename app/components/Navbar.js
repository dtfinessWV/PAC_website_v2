'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo or Site Name */}
        <Link href="/">
          <div className="flex items-center space-x-2 cursor-pointer">
            <Image
              src="/images/pac-logo-black.png"
              alt="Power Alley Logo"
              width={40}
              height={40}
              className="drop-shadow-sm"
            />
            <span className="text-xl font-display text-primary hidden sm:inline">
              Power Alley CrossFit
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6 font-sans text-sm sm:text-base text-gray-700 uppercase">
          <Link href="#about">About</Link>
          <Link href="#programs">Programs</Link>
          <Link href="#schedule">Schedule</Link>
          <Link href="#plans">Plans</Link>
          <Link href="#contact">Contact</Link>
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden flex items-center px-2 py-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-md absolute top-full left-0 w-full z-40">
          <div className="flex flex-col items-center space-y-4 py-4 font-sans text-base text-gray-700 uppercase">
            <Link href="#about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="#programs" onClick={() => setMenuOpen(false)}>Programs</Link>
            <Link href="#schedule" onClick={() => setMenuOpen(false)}>Schedule</Link>
            <Link href="#plans" onClick={() => setMenuOpen(false)}>Plans</Link>
            <Link href="#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </header>
  )
}
