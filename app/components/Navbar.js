'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
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

        {/* Nav Links */}
        <div className="flex space-x-6 font-sans text-sm sm:text-base text-gray-700 uppercase">
          <Link href="#about">About</Link>
          <Link href="#programs">Programs</Link>
          <Link href="#schedule">Schedule</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </nav>
    </header>
  )
}
