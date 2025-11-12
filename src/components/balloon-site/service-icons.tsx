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
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`flex flex-col items-center text-center group cursor-pointer transition-all duration-500 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                role="button"
                tabIndex={0}
                aria-label={`${service.label}: ${service.description}`}
              >
                <div className="w-16 h-16 mb-4 rounded-full bg-[hsl(var(--brand-pink-tint))] flex items-center justify-center group-hover:bg-[hsl(var(--brand-pink))] transition-all duration-300 group-hover:scale-110 group-focus:scale-110 group-focus:ring-2 group-focus:ring-[hsl(var(--brand-pink))] group-focus:ring-offset-2">
                  <Icon
                    size={32}
                    className="text-[hsl(var(--brand-navy))] group-hover:text-white transition-colors duration-300"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wide text-[hsl(var(--brand-navy))] mb-2 group-hover:text-[hsl(var(--brand-pink))] transition-colors duration-300">
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
