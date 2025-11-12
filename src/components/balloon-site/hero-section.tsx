'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#ffc9eb' }}
    >
      {/* Background Pattern or Image */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.4) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.4) 0%, transparent 50%)',
        }} />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl py-20">
        <h1 className="mb-6">
          <span
            className={`font-script text-5xl md:text-7xl block mb-2 text-black transition-all duration-1000 ease-in-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
            }`}
            style={{ animationDelay: '0ms' }}
          >
            where balloons make memories
          </span>
        </h1>

        <p
          className={`text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed text-black/90 transition-all duration-1000 ease-in-out delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Creating unforgettable celebrations with stunning balloon designs and quality party rentals
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 ease-in-out delay-500 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <Link
            href="#contact"
            className="inline-block bg-[#32373c] text-white px-8 py-4 rounded-lg font-semibold text-sm tracking-wide hover:bg-black transition-all duration-300 hover:translate-y-[-2px]"
            style={{ boxShadow: '6px 6px 9px rgba(0, 0, 0, 0.2)' }}
            aria-label="Book your event"
          >
            BOOK YOUR EVENT
          </Link>
          <Link
            href="#gallery"
            className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold text-sm tracking-wide hover:bg-gray-50 transition-all duration-300 hover:translate-y-[-2px]"
            style={{ boxShadow: '6px 6px 9px rgba(0, 0, 0, 0.15)' }}
            aria-label="View our gallery"
          >
            VIEW GALLERY
          </Link>
        </div>
      </div>
    </section>
  );
}
