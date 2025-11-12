import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/balloon-site/header';
import { ContactFooter } from '@/components/balloon-site/contact-footer';

const services = [
  {
    title: 'Balloon Arches',
    description:
      'Classic and organic balloon arches that create stunning entrance ways and photo backdrops. Perfect for any celebration, customized to your color scheme and style preferences.',
    pricing: '$150 - $400',
    features: [
      'Classic & Organic Styles',
      'Custom Color Combinations',
      'Various Size Options',
      'Indoor & Outdoor Installation',
    ],
    image: '/generated/custom-balloons.png',
  },
  {
    title: 'Event Backdrops',
    description:
      'Eye-catching balloon walls and backdrops that transform your venue into a photographer\'s dream. Ideal for ceremonies, head tables, and photo opportunities.',
    pricing: '$200 - $500',
    features: [
      'Full Wall Installations',
      'Custom Designs & Patterns',
      'Photo-Perfect Styling',
      'Florals & Greenery Add-ons',
    ],
    image: '/generated/wedding-balloons.png',
  },
  {
    title: 'Weddings',
    description:
      'Romantic balloon installations that add elegance to your special day. From ceremony arches to reception centerpieces, we create cohesive designs that match your wedding aesthetic.',
    pricing: '$300 - $800',
    features: [
      'Ceremony Arches',
      'Reception Decor',
      'Table Centerpieces',
      'Coordinated Color Palettes',
    ],
    image: '/generated/wedding-balloons.png',
  },
  {
    title: 'Corporate Installations',
    description:
      'Professional balloon displays for corporate events, product launches, and business celebrations. Clean, sophisticated designs that elevate your brand presence.',
    pricing: '$200 - $1000',
    features: [
      'Brand Color Matching',
      'Logo Integration Options',
      'Large-Scale Installations',
      'Professional Setup & Removal',
    ],
    image: '/generated/corporate-balloons.png',
  },
  {
    title: 'Custom Designs',
    description:
      'Bring your unique vision to life with completely custom balloon installations. We work with you to create one-of-a-kind designs that perfectly capture your celebration theme.',
    pricing: '$100 consultation + custom quote',
    features: [
      'Personalized Design Consultation',
      'Unlimited Creative Options',
      'Theme-Based Installations',
      'Specialty Balloon Shapes',
    ],
    image: '/generated/birthday-balloons.png',
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main className="pt-20">
        {/* Services Hero */}
        <section className="bg-[hsl(var(--brand-navy))] text-white py-20">
          <div className="container-custom text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">OUR SERVICES</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              From intimate gatherings to grand celebrations, we create stunning balloon installations tailored to your unique vision.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="space-y-24">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="relative h-[400px] rounded-lg overflow-hidden card-shadow">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <h2 className="text-4xl font-bold text-[hsl(var(--brand-navy))] mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mb-6">
                      <p className="text-2xl font-bold text-[hsl(var(--brand-pink))] mb-4">
                        {service.pricing}
                      </p>

                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center text-gray-700"
                          >
                            <span className="w-2 h-2 bg-[hsl(var(--brand-pink))] rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href="#contact"
                      className="inline-block bg-[hsl(var(--brand-pink))] text-white px-8 py-3 rounded-lg font-semibold text-sm uppercase tracking-wide hover:bg-[hsl(345,76%,82%)] transition-all duration-200 button-shadow transform hover:scale-105"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[hsl(var(--brand-pink))] text-center">
          <div className="container-custom">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Event?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and create a custom balloon installation that exceeds your expectations.
            </p>
            <Link
              href="#contact"
              className="inline-block bg-white text-[hsl(var(--brand-navy))] px-10 py-4 rounded-lg font-semibold text-sm uppercase tracking-wide hover:bg-gray-100 transition-all duration-200 card-shadow transform hover:scale-105"
            >
              Contact Us Today
            </Link>
          </div>
        </section>

        <ContactFooter />
      </main>
    </>
  );
}
