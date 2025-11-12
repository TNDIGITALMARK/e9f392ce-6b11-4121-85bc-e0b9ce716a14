import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Jennifer L.',
    event: 'Wedding Reception',
    rating: 5,
    text: 'Sarah transformed our wedding venue into a dream! The balloon arch was absolutely stunning and lasted the entire evening. Highly recommend!',
  },
  {
    name: 'Michael R.',
    event: 'Corporate Launch',
    rating: 5,
    text: 'Professional, creative, and on-time. The balloon installation at our product launch was a showstopper. Will definitely hire again!',
  },
  {
    name: 'Amanda K.',
    event: 'Birthday Party',
    rating: 5,
    text: 'My daughter\'s balloon display was magical! Sarah listened to our ideas and created something even better than we imagined.',
  },
];

export function StoryTestimonials() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Founder Story */}
          <div>
            <div className="flex items-start space-x-6 mb-8">
              <div className="relative w-32 h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-[hsl(var(--brand-pink))] card-shadow">
                <Image
                  src="/generated/founder-photo.png"
                  alt="Sarah Martinez - Founder"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[hsl(var(--brand-navy))] mb-2">
                  OUR STORY
                </h3>
                <p className="text-[hsl(var(--brand-pink))] font-semibold mb-2">
                  Founded by Sarah Martinez
                </p>
              </div>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Where Balloons Make Memories began with a simple passion: creating joy through beautiful balloon artistry. What started as a hobby for my daughter's birthday party quickly grew into a love affair with event design.
              </p>
              <p>
                As a former elementary teacher, I discovered that balloons bring the same wonder to adults as they do to children. Every installation we create is designed to spark that childlike excitement and create Instagram-worthy moments that last long after the event ends.
              </p>
              <p>
                Based in Lubbock, Texas, we've had the honor of decorating hundreds of celebrations - from intimate baby showers to grand wedding receptions. Each event is a new opportunity to bring someone's vision to life.
              </p>
              <p className="font-semibold text-[hsl(var(--brand-navy))]">
                Let's make your next celebration unforgettable!
              </p>
            </div>
          </div>

          {/* Testimonials */}
          <div>
            <h3 className="text-3xl font-bold text-[hsl(var(--brand-navy))] mb-8 text-center lg:text-left">
              WHAT OUR CLIENTS SAY
            </h3>

            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-[hsl(var(--brand-pink-light))] p-6 rounded-lg border-2 border-[hsl(var(--brand-pink))]"
                >
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className="fill-[hsl(var(--brand-pink))] text-[hsl(var(--brand-pink))]"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-[hsl(var(--brand-navy))]">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-600">{testimonial.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
