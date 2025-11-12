import Image from 'next/image';
import Link from 'next/link';

const galleryImages = [
  {
    src: '/generated/birthday-balloons.png',
    alt: 'Birthday balloon installation',
    title: 'Birthday Celebrations',
  },
  {
    src: '/generated/wedding-balloons.png',
    alt: 'Wedding balloon decor',
    title: 'Wedding Ceremonies',
  },
  {
    src: '/generated/corporate-balloons.png',
    alt: 'Corporate event balloons',
    title: 'Corporate Events',
  },
  {
    src: '/generated/baby-shower-balloons.png',
    alt: 'Baby shower balloon garland',
    title: 'Baby Showers',
  },
  {
    src: '/generated/custom-balloons.png',
    alt: 'Custom balloon design',
    title: 'Custom Designs',
  },
  {
    src: '/generated/graduation-balloons.png',
    alt: 'Graduation balloon backdrop',
    title: 'Graduations',
  },
];

export function GalleryPreview() {
  return (
    <section className="py-20 bg-[hsl(var(--brand-pink))]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            STUNNING INSTALLATIONS
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Browse our portfolio of beautiful balloon designs that have made celebrations unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg card-shadow hover:card-shadow-hover transition-all duration-300 aspect-[4/3]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--brand-navy))]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-bold text-xl">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/gallery"
            className="inline-block bg-white text-[hsl(var(--brand-navy))] px-10 py-4 rounded-lg font-semibold text-sm uppercase tracking-wide hover:bg-gray-100 transition-all duration-200 card-shadow transform hover:scale-105"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
