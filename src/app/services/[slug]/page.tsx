import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/balloon-site/header';
import { ContactFooter } from '@/components/balloon-site/contact-footer';
import { getServiceBySlug, getAllServiceSlugs } from '@/lib/services-data';

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Header />

      <main className="pt-20">
        {/* Hero Section with Animation */}
        <section className="relative bg-gradient-to-br from-[hsl(var(--brand-pink))] to-[hsl(var(--brand-pink-dark))] text-[hsl(var(--brand-black))] py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse delay-100"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full animate-pulse delay-300"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full animate-pulse delay-500"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up font-display">
                {service.heroTitle}
              </h1>
              <p className="text-xl md:text-2xl mb-8 animate-fade-in-up delay-200 opacity-90">
                {service.heroSubtitle}
              </p>
              <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up delay-300">
                <Link
                  href="#details"
                  className="bg-[hsl(var(--brand-black))] text-white px-8 py-4 rounded-lg font-semibold text-sm uppercase tracking-wide hover:bg-[hsl(0,0%,20%)] transition-all duration-300 transform hover:scale-105 button-shadow"
                >
                  View Details
                </Link>
                <Link
                  href="#contact"
                  className="bg-white text-[hsl(var(--brand-black))] px-8 py-4 rounded-lg font-semibold text-sm uppercase tracking-wide hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 card-shadow"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Main Image Section with Parallax Effect */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden card-shadow-hover animate-scale-in">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
          </div>
        </section>

        {/* Details Section with Staggered Animations */}
        <section id="details" className="py-20 bg-gradient-to-b from-white to-[hsl(var(--muted))]">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Description */}
              <div className="lg:col-span-2 space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--brand-black))] mb-6 animate-fade-in-up font-display">
                  About This Service
                </h2>
                {service.detailedDescription.map((paragraph, index) => (
                  <p
                    key={index}
                    className={`text-lg text-gray-700 leading-relaxed animate-fade-in-up delay-${(index + 1) * 100}`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Pricing & Features Card */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl p-8 card-shadow sticky top-24 animate-slide-in-right hover-lift">
                  <div className="mb-6">
                    <p className="text-sm uppercase tracking-wide text-gray-600 mb-2 font-semibold">
                      Pricing
                    </p>
                    <p className="text-3xl font-bold text-[hsl(var(--brand-pink-dark))] font-display">
                      {service.pricing}
                    </p>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <p className="text-sm uppercase tracking-wide text-gray-600 mb-4 font-semibold">
                      What's Included
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, index) => (
                        <li
                          key={index}
                          className={`flex items-start text-gray-700 animate-fade-in delay-${(index + 2) * 100}`}
                        >
                          <span className="w-6 h-6 bg-gradient-to-br from-[hsl(var(--brand-pink))] to-[hsl(var(--brand-pink-dark))] rounded-full mr-3 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg
                              className="w-3 h-3 text-[hsl(var(--brand-black))]"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </span>
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="#contact"
                    className="block w-full bg-gradient-to-r from-[hsl(var(--brand-pink))] to-[hsl(var(--brand-pink-dark))] text-[hsl(var(--brand-black))] px-6 py-4 rounded-lg font-semibold text-sm uppercase tracking-wide text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 mt-8"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        {service.testimonial && (
          <section className="py-20 bg-white">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
                <div className="mb-8">
                  <svg
                    className="w-16 h-16 mx-auto text-[hsl(var(--brand-pink-dark))] opacity-50"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 mb-6 leading-relaxed italic">
                  "{service.testimonial.quote}"
                </blockquote>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[hsl(var(--brand-pink))] to-[hsl(var(--brand-pink-dark))] rounded-full"></div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900 font-display">
                      {service.testimonial.author}
                    </p>
                    <p className="text-sm text-gray-600">{service.testimonial.event}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Other Services Section */}
        <section className="py-20 bg-gradient-to-b from-[hsl(var(--muted))] to-white">
          <div className="container-custom">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-[hsl(var(--brand-black))] mb-12 animate-fade-in-up font-display">
              Explore Our Other Services
            </h2>
            <div className="flex justify-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-[hsl(var(--brand-black))] text-white px-8 py-4 rounded-lg font-semibold text-sm uppercase tracking-wide hover:bg-[hsl(0,0%,20%)] transition-all duration-300 transform hover:scale-105 button-shadow animate-fade-in-up delay-200"
              >
                <span>View All Services</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[hsl(var(--brand-pink))] to-[hsl(var(--brand-pink-dark))] text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-10 w-40 h-40 bg-white rounded-full animate-pulse delay-200"></div>
            <div className="absolute bottom-10 left-20 w-32 h-32 bg-white rounded-full animate-pulse delay-400"></div>
          </div>

          <div className="container-custom relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--brand-black))] mb-6 animate-fade-in-up font-display">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-[hsl(var(--brand-black))] opacity-90 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-200">
              Let's create something beautiful together. Contact us today for a custom quote.
            </p>
            <Link
              href="#contact"
              className="inline-block bg-[hsl(var(--brand-black))] text-white px-10 py-4 rounded-lg font-semibold text-sm uppercase tracking-wide hover:bg-[hsl(0,0%,20%)] transition-all duration-300 card-shadow transform hover:scale-105 animate-fade-in-up delay-300"
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
