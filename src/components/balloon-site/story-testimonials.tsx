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
    <section className="py-20" style={{ backgroundColor: '#ffc9eb' }} id="testimonials">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Founder Story */}
          <div>
            <div className="flex items-start space-x-6 mb-8">
              <div className="relative w-32 h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-white" style={{ boxShadow: '6px 6px 9px rgba(0, 0, 0, 0.2)' }}>
                <Image
                  src="/generated/founder-photo.png"
                  alt="Founder of where balloons make memories"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black mb-2">
                  OUR STORY
                </h3>
                <p className="text-black/80 font-semibold mb-2">
                  Serving Lubbock Since 2015
                </p>
              </div>
            </div>

            <div className="space-y-4 text-black/90 leading-relaxed">
              <p>
                Our journey began with a simple passion: creating joy through beautiful balloon artistry and quality party rentals. What started as a small venture quickly grew into Lubbock's premier event decoration service.
              </p>
              <p>
                We discovered that balloons and thoughtful décor bring wonder to every celebration. Every installation we create is designed to spark excitement and create memorable moments that last long after the event ends.
              </p>
              <p>
                Based in Lubbock, we've had the honor of decorating hundreds of celebrations - from intimate baby showers to grand wedding receptions. Each event is a new opportunity to bring someone's vision to life.
              </p>
              <p className="font-semibold text-black">
                Let's make your next celebration unforgettable!
              </p>
            </div>
          </div>

          {/* Testimonials */}
          <div>
            <h3 className="text-3xl font-bold text-black mb-8 text-center lg:text-left">
              WHAT OUR CLIENTS SAY
            </h3>

            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg"
                  style={{ boxShadow: '6px 6px 9px rgba(0, 0, 0, 0.2)' }}
                >
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className="fill-[#f78da7] text-[#f78da7]"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-black">
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
