'use client';

import { Award, Lightbulb, PartyPopper, Shield } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const features = [
  {
    icon: Award,
    title: 'EXPERTISE',
    description:
      'Years of experience creating stunning balloon installations for every type of celebration.',
  },
  {
    icon: Lightbulb,
    title: 'CUSTOMIZATION',
    description:
      'Every design is tailored to your unique vision, colors, and event theme.',
  },
  {
    icon: PartyPopper,
    title: 'CELEBRATIONS',
    description:
      'We specialize in making your special moments unforgettable and Instagram-worthy.',
  },
  {
    icon: Shield,
    title: 'QUALITY MATERIALS',
    description:
      'Premium balloons and professional-grade materials ensure long-lasting beauty.',
  },
];

export function WhyChooseUs() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 scroll-mt-20" style={{ backgroundColor: '#ffc9eb' }}>
      <div className="container-custom">
        <div className={`text-center mb-16 transition-all duration-700 ease-in-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            WHY CHOOSE US
          </h2>
          <p className="text-lg text-black/80 max-w-2xl mx-auto">
            We bring your celebration dreams to life with attention to detail and creative flair.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-lg p-8 transition-all duration-500 ease-in-out transform hover:-translate-y-2 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                  boxShadow: '6px 6px 9px rgba(0, 0, 0, 0.2)'
                }}
              >
                <div className="w-16 h-16 mb-6 rounded-full bg-[#ffc9eb]/50 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <Icon size={32} className="text-black" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4 uppercase tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
