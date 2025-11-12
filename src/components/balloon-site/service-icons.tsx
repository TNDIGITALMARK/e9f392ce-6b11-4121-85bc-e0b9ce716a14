'use client';

import { Baby, Briefcase, Cake, Heart, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const services = [
  {
    icon: Users,
    label: 'ALL AGES',
    description: 'Celebrations for every age group',
  },
  {
    icon: Heart,
    label: 'WEDDINGS',
    description: 'Romantic balloon installations',
  },
  {
    icon: Briefcase,
    label: 'CORPORATE EVENTS',
    description: 'Professional event decor',
  },
  {
    icon: Baby,
    label: 'BABY SHOWERS',
    description: 'Sweet celebration designs',
  },
  {
    icon: Cake,
    label: 'BIRTHDAYS',
    description: 'Memorable party decor',
  },
];

export function ServiceIcons() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-20 bg-white scroll-mt-20">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-black">Our Services</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          From intimate gatherings to grand celebrations, we bring your vision to life
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`flex flex-col items-center text-center group cursor-pointer transition-all duration-500 ease-in-out ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                role="button"
                tabIndex={0}
                aria-label={`${service.label}: ${service.description}`}
              >
                <div className="w-20 h-20 mb-4 rounded-full bg-[#ffc9eb]/30 flex items-center justify-center group-hover:bg-[#ffc9eb] transition-all duration-300 group-hover:scale-110 group-focus:scale-110 group-focus:ring-2 group-focus:ring-[#f78da7] group-focus:ring-offset-2">
                  <Icon
                    size={36}
                    className="text-black group-hover:text-black transition-colors duration-300"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wide text-black mb-2 group-hover:text-[#f78da7] transition-colors duration-300">
                  {service.label}
                </h3>
                <p className="text-xs text-gray-600 hidden md:block transition-opacity duration-300 group-hover:opacity-80">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
