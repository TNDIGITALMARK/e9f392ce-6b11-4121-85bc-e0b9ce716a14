'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[hsl(var(--brand-navy))] text-white shadow-md">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-xl font-bold tracking-wide">
              <span className="font-script text-2xl">WHERE BALLOONS</span>
              <br />
              <span className="text-sm uppercase tracking-widest">MAKE MEMORIES</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white hover:text-[hsl(var(--brand-pink))] transition-colors duration-200 text-sm font-medium uppercase tracking-wide"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-white hover:text-[hsl(var(--brand-pink))] transition-colors duration-200 text-sm font-medium uppercase tracking-wide"
            >
              Services
            </Link>
            <Link
              href="/gallery"
              className="text-white hover:text-[hsl(var(--brand-pink))] transition-colors duration-200 text-sm font-medium uppercase tracking-wide"
            >
              Gallery
            </Link>
            <Link
              href="#about"
              className="text-white hover:text-[hsl(var(--brand-pink))] transition-colors duration-200 text-sm font-medium uppercase tracking-wide"
            >
              About Us
            </Link>
            <Link
              href="#contact"
              className="text-white hover:text-[hsl(var(--brand-pink))] transition-colors duration-200 text-sm font-medium uppercase tracking-wide"
            >
              Contact
            </Link>
          </nav>

          {/* Get Quote CTA Button */}
          <Link
            href="#contact"
            className="hidden md:inline-block bg-[hsl(var(--brand-pink))] text-white px-8 py-3 rounded-lg font-semibold text-sm uppercase tracking-wide hover:bg-[hsl(345,76%,82%)] transition-all duration-200 button-shadow"
          >
            Get Quote
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[hsl(var(--brand-navy))] border-t border-white/10">
          <nav className="flex flex-col space-y-4 p-6">
            <Link
              href="/"
              className="text-white hover:text-[hsl(var(--brand-pink))] transition-colors duration-200 text-sm font-medium uppercase tracking-wide"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-white hover:text-[hsl(var(--brand-pink))] transition-colors duration-200 text-sm font-medium uppercase tracking-wide"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/gallery"
              className="text-white hover:text-[hsl(var(--brand-pink))] transition-colors duration-200 text-sm font-medium uppercase tracking-wide"
              onClick={() => setMobileMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="#about"
              className="text-white hover:text-[hsl(var(--brand-pink))] transition-colors duration-200 text-sm font-medium uppercase tracking-wide"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="#contact"
              className="text-white hover:text-[hsl(var(--brand-pink))] transition-colors duration-200 text-sm font-medium uppercase tracking-wide"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="#contact"
              className="bg-[hsl(var(--brand-pink))] text-white px-8 py-3 rounded-lg font-semibold text-sm uppercase tracking-wide text-center button-shadow"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
