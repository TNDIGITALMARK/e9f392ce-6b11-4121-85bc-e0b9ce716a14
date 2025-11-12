import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/balloon-site/header';
import { ContactFooter } from '@/components/balloon-site/contact-footer';
import { services } from '@/lib/services-data';

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main className="pt-20">
        {/* Services Hero with Animation */}
        <section className="relative bg-gradient-to-br from-[hsl(var(--brand-pink))] to-[hsl(var(--brand-pink-dark))] text-[hsl(var(--brand-black))] py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-black rounded-full animate-pulse delay-100"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-black rounded-full animate-pulse delay-300"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-black rounded-full animate-pulse delay-500"></div>
          </div>

          <div className="container-custom text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up font-display">
              OUR SERVICES
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90 animate-fade-in-up delay-200">
              From intimate gatherings to grand celebrations, we create stunning balloon installations tailored to your unique vision.
            </p>
          </div>
        </section>

        {/* Services Grid with Animations */}
        <section className="py-20 bg-gradient-to-b from-white to-[hsl(var(--muted))]">
          <div className="container-custom">
            <div className="space-y-24">
              {services.map((service, index) => (
                <div
                  key={service.slug}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <Link href={`/services/${service.slug}`} className="block group">
                      <div className="relative h-[400px] rounded-2xl overflow-hidden card-shadow-hover hover-lift animate-scale-in">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                          <span className="font-semibold text-sm">View Details</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} animate-fade-in-up delay-200`}>
                    <Link href={`/services/${service.slug}`} className="group">
                      <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--brand-black))] mb-4 font-display group-hover:text-[hsl(var(--brand-pink-dark))] transition-colors duration-300">
                        {service.title}
                      </h2>
                    </Link>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mb-6">
                      <p className="text-3xl font-bold text-[hsl(var(--brand-pink-dark))] mb-4 font-display animate-fade-in delay-300">
                        {service.pricing}
                      </p>

                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className={`flex items-start text-gray-700 animate-fade-in delay-${(featureIndex + 4) * 100}`}
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

                    <div className="flex flex-wrap gap-4">
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-[hsl(var(--brand-pink))] to-[hsl(var(--brand-pink-dark))] text-[hsl(var(--brand-black))] px-8 py-3 rounded-lg font-semibold text-sm uppercase tracking-wide hover:shadow-lg transition-all duration-300 button-shadow transform hover:scale-105"
                      >
                        <span>Learn More</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                      <Link
                        href="#contact"
                        className="inline-block bg-[hsl(var(--brand-black))] text-white px-8 py-3 rounded-lg font-semibold text-sm uppercase tracking-wide hover:bg-[hsl(0,0%,20%)] transition-all duration-300 transform hover:scale-105"
                      >
                        Get Quote
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section with Animation */}
        <section className="relative py-20 bg-gradient-to-br from-[hsl(var(--brand-pink))] to-[hsl(var(--brand-pink-dark))] text-center overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-10 w-40 h-40 bg-black rounded-full animate-pulse delay-200"></div>
            <div className="absolute bottom-10 left-20 w-32 h-32 bg-black rounded-full animate-pulse delay-400"></div>
          </div>

          <div className="container-custom relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--brand-black))] mb-6 animate-fade-in-up font-display">
              Ready to Transform Your Event?
            </h2>
            <p className="text-xl text-[hsl(var(--brand-black))] opacity-90 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-200">
              Let's discuss your vision and create a custom balloon installation that exceeds your expectations.
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
