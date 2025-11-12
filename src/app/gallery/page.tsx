'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Header } from '@/components/balloon-site/header';
import { ContactFooter } from '@/components/balloon-site/contact-footer';
import { X } from 'lucide-react';

const galleryImages = [
  {
    src: '/generated/hero-balloons.png',
    alt: 'Elegant organic balloon arch entrance',
    category: 'Arches',
  },
  {
    src: '/generated/birthday-balloons.png',
    alt: 'Birthday party balloon garland',
    category: 'Birthdays',
  },
  {
    src: '/generated/wedding-balloons.png',
    alt: 'Wedding ceremony balloon backdrop',
    category: 'Weddings',
  },
  {
    src: '/generated/corporate-balloons.png',
    alt: 'Corporate event balloon column',
    category: 'Corporate',
  },
  {
    src: '/generated/baby-shower-balloons.png',
    alt: 'Baby shower balloon installation',
    category: 'Baby Showers',
  },
  {
    src: '/generated/custom-balloons.png',
    alt: 'Custom balloon design',
    category: 'Custom',
  },
  {
    src: '/generated/graduation-balloons.png',
    alt: 'Graduation celebration balloon wall',
    category: 'Graduations',
  },
  {
    src: '/generated/hero-balloons.png',
    alt: 'Pink and navy balloon display',
    category: 'Arches',
  },
  {
    src: '/generated/birthday-balloons.png',
    alt: 'Pastel balloon garland',
    category: 'Birthdays',
  },
];

const categories = ['All', 'Arches', 'Weddings', 'Birthdays', 'Corporate', 'Baby Showers', 'Custom', 'Graduations'];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredImages =
    selectedCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <>
      <Header />

      <main className="pt-20">
        {/* Gallery Hero */}
        <section className="bg-[hsl(var(--brand-navy))] text-white py-20">
          <div className="container-custom text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">OUR GALLERY</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of stunning balloon installations that have made celebrations unforgettable across Lubbock.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-semibold text-sm uppercase tracking-wide transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-[hsl(var(--brand-pink))] text-white button-shadow'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 bg-[hsl(var(--brand-pink-tint))]">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setLightboxImage(image.src)}
                  className="relative group overflow-hidden rounded-lg card-shadow hover:card-shadow-hover transition-all duration-300 cursor-pointer aspect-[4/3]"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--brand-navy))]/90 via-[hsl(var(--brand-navy))]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-white font-semibold text-sm mb-2">
                        {image.category}
                      </p>
                      <p className="text-white/80 text-sm">{image.alt}</p>
                    </div>
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
              Love What You See?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's create something beautiful for your next celebration. Get in touch for a free consultation.
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-[hsl(var(--brand-navy))] px-10 py-4 rounded-lg font-semibold text-sm uppercase tracking-wide hover:bg-gray-100 transition-all duration-200 card-shadow transform hover:scale-105"
            >
              Get Your Quote
            </a>
          </div>
        </section>

        <ContactFooter />
      </main>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-[hsl(var(--brand-pink))] transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X size={36} />
          </button>
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full">
            <Image
              src={lightboxImage}
              alt="Gallery image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
