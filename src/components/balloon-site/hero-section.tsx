import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/generated/hero-balloons.png"
          alt="Elegant balloon installation"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--brand-navy))]/40 via-[hsl(var(--brand-navy))]/30 to-[hsl(var(--brand-navy))]/50" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <h1 className="mb-6">
          <span className="font-script text-5xl md:text-7xl block mb-2 text-[hsl(var(--brand-pink))]">
            Where Balloons Make
          </span>
          <span className="font-display text-6xl md:text-8xl font-bold block tracking-tight">
            MEMORIES
          </span>
        </h1>

        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Creating magical moments one balloon at a time. Serving Lubbock celebrations since 2019.
        </p>

        <Link
          href="#contact"
          className="inline-block bg-[hsl(var(--brand-pink))] text-white px-10 py-4 rounded-lg font-semibold text-sm uppercase tracking-wide hover:bg-[hsl(345,76%,82%)] transition-all duration-200 button-shadow transform hover:scale-105"
        >
          Plan Your Event
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
