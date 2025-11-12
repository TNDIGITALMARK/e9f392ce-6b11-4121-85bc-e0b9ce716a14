import { Award, Lightbulb, PartyPopper, Shield } from 'lucide-react';

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
  return (
    <section className="py-20 bg-[hsl(var(--brand-pink-light))]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--brand-navy))] mb-4">
            WHY CHOOSE US
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We bring your celebration dreams to life with attention to detail and creative flair.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-8 card-shadow hover:card-shadow-hover transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 mb-6 rounded-full bg-[hsl(var(--brand-pink-tint))] flex items-center justify-center">
                  <Icon size={32} className="text-[hsl(var(--brand-navy))]" />
                </div>
                <h3 className="text-xl font-bold text-[hsl(var(--brand-navy))] mb-4 uppercase tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
