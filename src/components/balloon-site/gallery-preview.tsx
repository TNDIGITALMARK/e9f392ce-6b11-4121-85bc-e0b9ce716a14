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
    <section id="gallery" className="py-20 bg-white scroll-mt-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            STUNNING INSTALLATIONS
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Browse our portfolio of beautiful balloon designs that have made celebrations unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg transition-all duration-300 ease-in-out aspect-[4/3]"
              style={{ boxShadow: '6px 6px 9px rgba(0, 0, 0, 0.2)' }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
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
            className="inline-block bg-[#32373c] text-white px-10 py-4 rounded-lg font-semibold text-sm uppercase tracking-wide hover:bg-black transition-all duration-300 ease-in-out transform hover:translate-y-[-2px]"
            style={{ boxShadow: '6px 6px 9px rgba(0, 0, 0, 0.2)' }}
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
