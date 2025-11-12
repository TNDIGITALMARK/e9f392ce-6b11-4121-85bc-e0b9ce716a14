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
      className={`fixed top-0 left-0 right-0 z-50 bg-black text-white transition-shadow duration-300 ${
        isScrolled ? 'shadow-lg' : 'shadow-md'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="text-xl font-bold tracking-wide transition-transform duration-300 group-hover:scale-105">
              <span className="font-script text-2xl text-[#ffc9eb]">where balloons make memories</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            <Link
              href="/"
              className="text-white hover:text-[#ffc9eb] transition-colors duration-200 text-sm font-medium uppercase tracking-wide relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#ffc9eb] after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </Link>
            <a
              href="#services"
              onClick={(e) => handleSmoothScroll(e, '#services')}
              className="text-white hover:text-[#ffc9eb] transition-colors duration-200 text-sm font-medium uppercase tracking-wide relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#ffc9eb] after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
            >
              Services
            </a>
            <a
              href="#gallery"
              onClick={(e) => handleSmoothScroll(e, '#gallery')}
              className="text-white hover:text-[#ffc9eb] transition-colors duration-200 text-sm font-medium uppercase tracking-wide relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#ffc9eb] after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
            >
              Gallery
            </a>
            <a
              href="#testimonials"
              onClick={(e) => handleSmoothScroll(e, '#testimonials')}
              className="text-white hover:text-[#ffc9eb] transition-colors duration-200 text-sm font-medium uppercase tracking-wide relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#ffc9eb] after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="text-white hover:text-[#ffc9eb] transition-colors duration-200 text-sm font-medium uppercase tracking-wide relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#ffc9eb] after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
            >
              Contact
            </a>
          </nav>

          {/* Get Quote CTA Button */}
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, '#contact')}
            className="hidden md:inline-block bg-[#ffc9eb] text-black px-8 py-3 rounded-lg font-semibold text-sm uppercase tracking-wide hover:bg-[#f78da7] transition-all duration-300 ease-in-out hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-[#f78da7] focus:ring-offset-2 cursor-pointer"
            style={{ boxShadow: '6px 6px 9px rgba(0, 0, 0, 0.2)' }}
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
        className={`md:hidden bg-black border-t border-white/10 overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col space-y-4 p-6" role="navigation" aria-label="Mobile navigation">
          <Link
            href="/"
            className="text-white hover:text-[#ffc9eb] transition-colors duration-200 text-sm font-medium uppercase tracking-wide"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <a
            href="#services"
            onClick={(e) => handleSmoothScroll(e, '#services')}
            className="text-white hover:text-[#ffc9eb] transition-colors duration-200 text-sm font-medium uppercase tracking-wide cursor-pointer"
          >
            Services
          </a>
          <a
            href="#gallery"
            onClick={(e) => handleSmoothScroll(e, '#gallery')}
            className="text-white hover:text-[#ffc9eb] transition-colors duration-200 text-sm font-medium uppercase tracking-wide cursor-pointer"
          >
            Gallery
          </a>
          <a
            href="#testimonials"
            onClick={(e) => handleSmoothScroll(e, '#testimonials')}
            className="text-white hover:text-[#ffc9eb] transition-colors duration-200 text-sm font-medium uppercase tracking-wide cursor-pointer"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, '#contact')}
            className="text-white hover:text-[#ffc9eb] transition-colors duration-200 text-sm font-medium uppercase tracking-wide cursor-pointer"
          >
            Contact
          </a>
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, '#contact')}
            className="bg-[#ffc9eb] text-black px-8 py-3 rounded-lg font-semibold text-sm uppercase tracking-wide text-center hover:bg-[#f78da7] transition-all duration-200 cursor-pointer"
            style={{ boxShadow: '6px 6px 9px rgba(0, 0, 0, 0.2)' }}
          >
            Get Quote
          </a>
        </nav>
      </div>
    </header>
  );
}
