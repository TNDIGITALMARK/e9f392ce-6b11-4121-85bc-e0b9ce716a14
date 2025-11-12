import { Baby, Briefcase, Cake, Heart, Users } from 'lucide-react';

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
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="w-16 h-16 mb-4 rounded-full bg-[hsl(var(--brand-pink-tint))] flex items-center justify-center group-hover:bg-[hsl(var(--brand-pink))] transition-all duration-300 group-hover:scale-110">
                  <Icon
                    size={32}
                    className="text-[hsl(var(--brand-navy))] group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wide text-[hsl(var(--brand-navy))] mb-2">
                  {service.label}
                </h3>
                <p className="text-xs text-gray-600 hidden md:block">
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
