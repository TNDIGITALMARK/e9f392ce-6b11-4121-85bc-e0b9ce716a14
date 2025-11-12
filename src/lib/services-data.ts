// Service data structure for dynamic routing
export interface Service {
  slug: string;
  title: string;
  description: string;
  pricing: string;
  features: string[];
  image: string;
  heroTitle: string;
  heroSubtitle: string;
  detailedDescription: string[];
  testimonial?: {
    quote: string;
    author: string;
    event: string;
  };
  gallery?: string[];
}

export const services: Service[] = [
  {
    slug: 'balloon-arches',
    title: 'Balloon Arches',
    heroTitle: 'Stunning Balloon Arches',
    heroSubtitle: 'Create magical entrances and unforgettable backdrops',
    description:
      'Classic and organic balloon arches that create stunning entrance ways and photo backdrops. Perfect for any celebration, customized to your color scheme and style preferences.',
    detailedDescription: [
      'Transform your event space with our breathtaking balloon arches. Whether you\'re looking for a classic half-circle design or an organic, flowing installation, we create custom arches that perfectly frame your special moments.',
      'Our balloon arches are crafted with premium quality balloons in your chosen color palette. We specialize in both traditional and modern styles, from elegant monochromatic designs to vibrant rainbow displays.',
      'Each arch is carefully constructed to withstand indoor and outdoor conditions, ensuring your installation looks perfect throughout your entire event.',
    ],
    pricing: '$150 - $400',
    features: [
      'Classic & Organic Styles',
      'Custom Color Combinations',
      'Various Size Options',
      'Indoor & Outdoor Installation',
    ],
    image: '/generated/custom-balloons.png',
    testimonial: {
      quote: 'The balloon arch was absolutely stunning! It made the perfect backdrop for our photos and added so much charm to our celebration.',
      author: 'Sarah M.',
      event: 'Birthday Celebration',
    },
  },
  {
    slug: 'event-backdrops',
    title: 'Event Backdrops',
    heroTitle: 'Spectacular Event Backdrops',
    heroSubtitle: 'Turn your venue into a photographer\'s dream',
    description:
      'Eye-catching balloon walls and backdrops that transform your venue into a photographer\'s dream. Ideal for ceremonies, head tables, and photo opportunities.',
    detailedDescription: [
      'Create Instagram-worthy moments with our stunning balloon backdrops and walls. These installations serve as the perfect focal point for your event, providing a beautiful backdrop for photos that your guests will treasure forever.',
      'Our backdrops can be customized to any size and style, from full wall installations to elegant partial displays. We incorporate florals, greenery, and decorative elements to create a cohesive look that matches your event theme.',
      'Perfect for weddings, corporate events, and celebrations of all kinds, our backdrops are designed to make a statement while complementing your overall decor.',
    ],
    pricing: '$200 - $500',
    features: [
      'Full Wall Installations',
      'Custom Designs & Patterns',
      'Photo-Perfect Styling',
      'Florals & Greenery Add-ons',
    ],
    image: '/generated/wedding-balloons.png',
    testimonial: {
      quote: 'Our event backdrop was the talk of the evening! Everyone wanted photos in front of it, and it looked amazing in all our pictures.',
      author: 'Jennifer K.',
      event: 'Corporate Launch Event',
    },
  },
  {
    slug: 'weddings',
    title: 'Wedding Installations',
    heroTitle: 'Romantic Wedding Designs',
    heroSubtitle: 'Add elegance and charm to your special day',
    description:
      'Romantic balloon installations that add elegance to your special day. From ceremony arches to reception centerpieces, we create cohesive designs that match your wedding aesthetic.',
    detailedDescription: [
      'Your wedding day deserves decorations as beautiful and unique as your love story. Our wedding balloon installations bring romance, elegance, and a touch of whimsy to every aspect of your celebration.',
      'From ceremony arches that frame your vows to reception decor that creates an enchanting atmosphere, we design cohesive installations that reflect your personal style and complement your wedding theme.',
      'We work closely with you to select colors, styles, and arrangements that harmonize with your flowers, linens, and overall wedding design. Every installation is crafted with care to ensure your special day is absolutely perfect.',
    ],
    pricing: '$300 - $800',
    features: [
      'Ceremony Arches',
      'Reception Decor',
      'Table Centerpieces',
      'Coordinated Color Palettes',
    ],
    image: '/generated/wedding-balloons.png',
    testimonial: {
      quote: 'The balloon installations at our wedding were breathtaking! They added such a romantic touch and looked beautiful in all our photos.',
      author: 'Emily & David',
      event: 'Wedding Reception',
    },
  },
  {
    slug: 'corporate',
    title: 'Corporate Installations',
    heroTitle: 'Professional Corporate Displays',
    heroSubtitle: 'Elevate your brand with sophisticated balloon installations',
    description:
      'Professional balloon displays for corporate events, product launches, and business celebrations. Clean, sophisticated designs that elevate your brand presence.',
    detailedDescription: [
      'Make a powerful impression at your next corporate event with our professional balloon installations. We create sophisticated displays that enhance your brand identity while maintaining a polished, business-appropriate aesthetic.',
      'Our corporate installations can incorporate your brand colors, logo elements, and company messaging. From product launches and trade shows to employee celebrations and networking events, we design displays that command attention.',
      'We understand the importance of professionalism and timing in corporate settings. Our team works efficiently to set up and remove installations according to your schedule, ensuring minimal disruption to your event.',
    ],
    pricing: '$200 - $1000',
    features: [
      'Brand Color Matching',
      'Logo Integration Options',
      'Large-Scale Installations',
      'Professional Setup & Removal',
    ],
    image: '/generated/corporate-balloons.png',
    testimonial: {
      quote: 'The balloon installation at our product launch was incredibly professional and perfectly matched our brand. It created exactly the impact we wanted.',
      author: 'Michael T.',
      event: 'Product Launch Event',
    },
  },
  {
    slug: 'custom-designs',
    title: 'Custom Designs',
    heroTitle: 'Unique Custom Creations',
    heroSubtitle: 'Bring your vision to life with completely custom designs',
    description:
      'Bring your unique vision to life with completely custom balloon installations. We work with you to create one-of-a-kind designs that perfectly capture your celebration theme.',
    detailedDescription: [
      'Have a unique vision for your event? Our custom design service brings your imagination to life. We specialize in creating one-of-a-kind balloon installations that reflect your personal style and event theme.',
      'Through our personalized consultation process, we collaborate with you to understand your vision, preferences, and event requirements. No idea is too creative or ambitious—we love pushing the boundaries of balloon artistry.',
      'From character-themed birthday parties to avant-garde artistic installations, our custom designs showcase the endless possibilities of balloon decor. Let us transform your ideas into a stunning reality.',
    ],
    pricing: '$100 consultation + custom quote',
    features: [
      'Personalized Design Consultation',
      'Unlimited Creative Options',
      'Theme-Based Installations',
      'Specialty Balloon Shapes',
    ],
    image: '/generated/birthday-balloons.png',
    testimonial: {
      quote: 'They took my crazy idea and made it even better than I imagined! The custom design was absolutely perfect for our theme.',
      author: 'Amanda R.',
      event: 'Themed Birthday Party',
    },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug);
}
