export const dynamic = 'force-dynamic';

import { Header } from '@/components/balloon-site/header';
import { HeroSection } from '@/components/balloon-site/hero-section';
import { ServiceIcons } from '@/components/balloon-site/service-icons';
import { WhyChooseUs } from '@/components/balloon-site/why-choose-us';
import { GalleryPreview } from '@/components/balloon-site/gallery-preview';
import { StoryTestimonials } from '@/components/balloon-site/story-testimonials';
import { ContactFooter } from '@/components/balloon-site/contact-footer';

export default function Index() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServiceIcons />
        <WhyChooseUs />
        <GalleryPreview />
        <StoryTestimonials />
        <ContactFooter />
      </main>
    </>
  );
}