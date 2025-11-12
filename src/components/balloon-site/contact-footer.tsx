'use client';

import Link from 'next/link';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

/**
 * CONTACT & FOOTER SECTION - Contact form and footer information
 *
 * CUSTOMIZATION GUIDE:
 * - Line 51: Edit "READY TO CELEBRATE?" headline
 * - Line 54: Edit subheadline
 * - Line 222-226: Edit phone number and display text
 * - Line 239-243: Edit email address
 * - Line 255-257: Edit service area text
 * - Line 268-288: Edit social media links (Facebook, Instagram)
 * - Line 302: Edit business tagline
 * - Line 347-349: Edit contact info in footer
 *
 * TO CONNECT CONTACT FORM TO EMAIL:
 * Option 1: Use Formspree (easiest) - Sign up at formspree.io, add action to <form> tag
 * Option 2: Create API route - See EDITING_GUIDE.md for instructions
 */

export function ContactFooter() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    guestCount: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to an API
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        guestCount: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Contact Form Section */}
      <section className="py-20 bg-white scroll-mt-20" id="contact">
        <div className="container-custom">
          <div className="text-center mb-16">
            {/* ← EDIT: Contact section headline */}
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              READY TO CELEBRATE?
            </h2>

            {/* ← EDIT: Contact section subheadline */}
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Let's create unforgettable moments together
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-[#ffc9eb]/30 p-8 rounded-lg" style={{ boxShadow: '6px 6px 9px rgba(0, 0, 0, 0.2)' }}>
              <h3 className="text-2xl font-bold text-black mb-6">
                Get Your Free Quote
              </h3>

              {submitted ? (
                <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 text-center">
                  <p className="text-green-800 font-semibold text-lg mb-2">
                    Thank You!
                  </p>
                  <p className="text-green-700">
                    We've received your inquiry and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-black mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f78da7] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-[hsl(var(--brand-navy))] mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--brand-pink))] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-[hsl(var(--brand-navy))] mb-2"
                    >
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="(806) 555-PARTY"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--brand-pink))] focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="eventDate"
                        className="block text-sm font-semibold text-[hsl(var(--brand-navy))] mb-2"
                      >
                        Event Date
                      </label>
                      <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--brand-pink))] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="guestCount"
                        className="block text-sm font-semibold text-[hsl(var(--brand-navy))] mb-2"
                      >
                        Guest Count
                      </label>
                      <select
                        id="guestCount"
                        name="guestCount"
                        value={formData.guestCount}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--brand-pink))] focus:border-transparent"
                      >
                        <option value="">Select...</option>
                        <option value="1-25">1-25</option>
                        <option value="26-50">26-50</option>
                        <option value="51-100">51-100</option>
                        <option value="100+">100+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-[hsl(var(--brand-navy))] mb-2"
                    >
                      Tell Us About Your Event
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--brand-pink))] focus:border-transparent resize-none"
                      placeholder="Share your vision, theme, colors, or any special requests..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#32373c] text-white px-8 py-4 rounded-lg font-semibold text-sm uppercase tracking-wide hover:bg-black transition-all duration-300 ease-in-out transform hover:translate-y-[-2px]"
                    style={{ boxShadow: '6px 6px 9px rgba(0, 0, 0, 0.2)' }}
                  >
                    Request Quote
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-black mb-6">
                  Get In Touch
                </h3>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  We're here to help bring your celebration vision to life. Contact us today for a free consultation and custom quote.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#ffc9eb] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-black" />
                  </div>
                  <div>
                    <p className="font-semibold text-black mb-1">
                      Phone
                    </p>
                    {/* ← EDIT: Phone number (href and display text) */}
                    <a
                      href="tel:8065557278"
                      className="text-gray-700 hover:text-[#f78da7] transition-colors"
                    >
                      (806) 555-PARTY
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#ffc9eb] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-black" />
                  </div>
                  <div>
                    <p className="font-semibold text-black mb-1">
                      Email
                    </p>
                    {/* ← EDIT: Email address */}
                    <a
                      href="mailto:info@westtexasballoons.com"
                      className="text-gray-700 hover:text-[#f78da7] transition-colors"
                    >
                      info@westtexasballoons.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#ffc9eb] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-black" />
                  </div>
                  <div>
                    <p className="font-semibold text-black mb-1">
                      Service Area
                    </p>
                    {/* ← EDIT: Service area/location text */}
                    <p className="text-gray-700">
                      Lubbock & Surrounding Areas
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="pt-8 border-t border-gray-200">
                <p className="font-semibold text-black mb-4">
                  Follow Us
                </p>
                <div className="flex space-x-4">
                  {/* ← EDIT: Facebook link */}
                  <a
                    href="https://facebook.com/yourpage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#ffc9eb]/50 hover:bg-[#ffc9eb] rounded-full flex items-center justify-center transition-all duration-200 group"
                    aria-label="Visit our Facebook page"
                  >
                    <Facebook
                      size={24}
                      className="text-black transition-colors"
                    />
                  </a>

                  {/* ← EDIT: Instagram link */}
                  <a
                    href="https://instagram.com/yourhandle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#ffc9eb]/50 hover:bg-[#ffc9eb] rounded-full flex items-center justify-center transition-all duration-200 group"
                    aria-label="Visit our Instagram profile"
                  >
                    <Instagram
                      size={24}
                      className="text-black transition-colors"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-script text-2xl mb-2">
                where balloons make memories
              </h4>
              <p className="text-white/70 text-sm">
                Creating magical moments for celebrations since 2015.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wide mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-white/70 hover:text-[#ffc9eb] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-white/70 hover:text-[#ffc9eb] transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#gallery" className="text-white/70 hover:text-[#ffc9eb] transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-white/70 hover:text-[#ffc9eb] transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-white/70 hover:text-[#ffc9eb] transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wide mb-4">
                Contact Info
              </h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>(806) 555-PARTY</li>
                <li>info@whereballoonsmakememories.com</li>
                <li>Lubbock, Texas</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
            <p>&copy; {new Date().getFullYear()} where balloons make memories. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
