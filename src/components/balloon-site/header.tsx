'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    if (target.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-[hsl(var(--brand-navy))] text-white transition-shadow duration-300 ${
        isScrolled ? 'shadow-lg' : 'shadow-md'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="text-xl font-bold tracking-wide transition-transform duration-300 group-hover:scale-105">
              <span className="font-script text-2xl text-[hsl(var(--brand-pink))]">WHERE BALLOONS</span>
              <br />
              <span className="text-sm uppercase tracking-widest">MAKE MEMORIES</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            <Link
              href="/"
              className="text-white hover:text-[hsl(var(--brand-pink))] transition-colors duration-200 text-sm font-medium uppercase tracking-wide relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[hsl(var(--brand-pink))] after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-white hover:text-[hsl(var(--brand-pink))] transition-colors duration-200 text-sm font-medium uppercase tracking-wide relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[hsl(var(--brand-pink))] after:transition-all after:duration-300 hover:after:w-full"
            >
              Services
            </Link>
            <Link
              href="/gallery"
              className="text-white hover:text-[hsl(var(--brand-pink))] transition-colors duration-200 text-sm font-medium uppercase tracking-wide relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[hsl(var(--brand-pink))] after:transition-all after:duration-300 hover:after:w-full"
            >
              Gallery
            </Link>
            <a
              href="#about"
              onClick={(e) => handleSmoothScroll(e, '#about')}
              className="text-white hover:text-[hsl(var(--brand-pink))] transition-colors duration-200 text-sm font-medium uppercase tracking-wide relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[hsl(var(--brand-pink))] after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
            >
              About Us
            </a>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="text-white hover:text-[hsl(var(--brand-pink))] transition-colors duration-200 text-sm font-medium uppercase tracking-wide relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[hsl(var(--brand-pink))] after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
            >
              Contact
            </a>
          </nav>

          {/* Get Quote CTA Button */}
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, '#contact')}
            className="hidden md:inline-block bg-[hsl(var(--brand-pink))] text-white px-8 py-3 rounded-lg font-semibold text-sm uppercase tracking-wide hover:bg-[hsl(345,76%,82%)] transition-all duration-300 button-shadow hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand-pink))] focus:ring-offset-2 cursor-pointer"
            aria-label="Get a quote for your event"
          >
            Get Quote
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[hsl(var(--brand-navy))] border-t border-white/10 overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col space-y-4 p-6" role="navigation" aria-label="Mobile navigation">
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
          <a
            href="#about"
            onClick={(e) => handleSmoothScroll(e, '#about')}
            className="text-white hover:text-[hsl(var(--brand-pink))] transition-colors duration-200 text-sm font-medium uppercase tracking-wide cursor-pointer"
          >
            About Us
          </a>
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, '#contact')}
            className="text-white hover:text-[hsl(var(--brand-pink))] transition-colors duration-200 text-sm font-medium uppercase tracking-wide cursor-pointer"
          >
            Contact
          </a>
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, '#contact')}
            className="bg-[hsl(var(--brand-pink))] text-white px-8 py-3 rounded-lg font-semibold text-sm uppercase tracking-wide text-center button-shadow hover:bg-[hsl(345,76%,82%)] transition-all duration-200 cursor-pointer"
          >
            Get Quote
          </a>
        </nav>
      </div>
    </header>
  );
}
