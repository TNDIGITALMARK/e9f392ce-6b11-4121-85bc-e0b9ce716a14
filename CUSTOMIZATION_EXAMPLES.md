# 🎨 Quick Customization Examples

Ready-to-use code snippets for common customizations. Copy and paste these into your files!

---

## 🌈 Color Themes

### Option 1: Pastel Blue Theme

**File:** `src/app/globals.css` (around line 12)

```css
:root {
  /* Pastel Blue Theme */
  --brand-pink: 200 100% 90%;        /* Soft blue background */
  --brand-pink-dark: 200 80% 70%;    /* Deeper blue */
  --brand-accent: 210 70% 65%;       /* Blue-purple accent */
  --brand-white: 0 0% 100%;          /* White cards */
  --brand-black: 0 0% 0%;            /* Black text */
  --brand-navy: 210 50% 15%;         /* Dark navy */
  --brand-gray: 207 6% 74%;          /* Gray borders */
  --brand-red: 0 61% 50%;            /* Red accents */
}
```

**Also update:** `src/components/balloon-site/color-customizer.tsx` line 18-22:
```tsx
{
  name: 'Classic Pink',
  colors: {
    pink: '200 100% 90%',
    pinkDark: '200 80% 70%',
    accent: '210 70% 65%',
  },
},
```

---

### Option 2: Mint Green Theme

**File:** `src/app/globals.css` (around line 12)

```css
:root {
  /* Mint Green Theme */
  --brand-pink: 150 40% 85%;         /* Soft mint background */
  --brand-pink-dark: 150 50% 65%;    /* Deeper mint */
  --brand-accent: 160 60% 55%;       /* Teal accent */
  --brand-white: 0 0% 100%;          /* White cards */
  --brand-black: 0 0% 0%;            /* Black text */
  --brand-navy: 210 50% 15%;         /* Dark navy */
  --brand-gray: 207 6% 74%;          /* Gray borders */
  --brand-red: 0 61% 50%;            /* Red accents */
}
```

**Also update:** `src/components/balloon-site/color-customizer.tsx` line 18-22:
```tsx
{
  name: 'Classic Pink',
  colors: {
    pink: '150 40% 85%',
    pinkDark: '150 50% 65%',
    accent: '160 60% 55%',
  },
},
```

---

### Option 3: Lavender Dream Theme

**File:** `src/app/globals.css` (around line 12)

```css
:root {
  /* Lavender Dream Theme */
  --brand-pink: 270 60% 90%;         /* Soft lavender background */
  --brand-pink-dark: 270 50% 75%;    /* Deeper purple */
  --brand-accent: 280 45% 65%;       /* Purple accent */
  --brand-white: 0 0% 100%;          /* White cards */
  --brand-black: 0 0% 0%;            /* Black text */
  --brand-navy: 210 50% 15%;         /* Dark navy */
  --brand-gray: 207 6% 74%;          /* Gray borders */
  --brand-red: 0 61% 50%;            /* Red accents */
}
```

**Also update:** `src/components/balloon-site/color-customizer.tsx` line 18-22:
```tsx
{
  name: 'Classic Pink',
  colors: {
    pink: '270 60% 90%',
    pinkDark: '270 50% 75%',
    accent: '280 45% 65%',
  },
},
```

---

### Option 4: Coral Sunset Theme

**File:** `src/app/globals.css` (around line 12)

```css
:root {
  /* Coral Sunset Theme */
  --brand-pink: 10 85% 80%;          /* Soft coral background */
  --brand-pink-dark: 10 75% 65%;     /* Deeper coral */
  --brand-accent: 15 70% 55%;        /* Orange accent */
  --brand-white: 0 0% 100%;          /* White cards */
  --brand-black: 0 0% 0%;            /* Black text */
  --brand-navy: 210 50% 15%;         /* Dark navy */
  --brand-gray: 207 6% 74%;          /* Gray borders */
  --brand-red: 0 61% 50%;            /* Red accents */
}
```

**Also update:** `src/components/balloon-site/color-customizer.tsx` line 18-22:
```tsx
{
  name: 'Classic Pink',
  colors: {
    pink: '10 85% 80%',
    pinkDark: '10 75% 65%',
    accent: '15 70% 55%',
  },
},
```

---

## 🔤 Font Combinations

### Elegant & Playful Fonts

**File:** `src/app/globals.css` (replace line 2 and lines 62-64)

```css
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Montserrat:wght@400;600;700&family=Open+Sans:wght@400;600&display=swap');

:root {
  --font-script: 'Dancing Script', cursive;
  --font-display: 'Montserrat', sans-serif;
  --font-body: 'Open Sans', sans-serif;
}
```

---

### Modern & Clean Fonts

**File:** `src/app/globals.css` (replace line 2 and lines 62-64)

```css
@import url('https://fonts.googleapis.com/css2?family=Satisfy&family=Raleway:wght@400;600;700&family=Lato:wght@400;600&display=swap');

:root {
  --font-script: 'Satisfy', cursive;
  --font-display: 'Raleway', sans-serif;
  --font-body: 'Lato', sans-serif;
}
```

---

### Classic & Professional Fonts

**File:** `src/app/globals.css` (replace line 2 and lines 62-64)

```css
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:wght@400;700&family=Source+Sans+Pro:wght@400;600&display=swap');

:root {
  --font-script: 'Great Vibes', cursive;
  --font-display: 'Playfair Display', serif;
  --font-body: 'Source Sans Pro', sans-serif;
}
```

---

### Whimsical & Fun Fonts

**File:** `src/app/globals.css` (replace line 2 and lines 62-64)

```css
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Quicksand:wght@400;600;700&family=Nunito:wght@400;600&display=swap');

:root {
  --font-script: 'Caveat', cursive;
  --font-display: 'Quicksand', sans-serif;
  --font-body: 'Nunito', sans-serif;
}
```

---

## 📝 Text Content Examples

### Headline Variations

**File:** `src/components/balloon-site/hero-section.tsx` (line 48)

**Option 1: Event Focus**
```tsx
celebrations that pop with personality
```

**Option 2: Business Name**
```tsx
Your Business Name Here
```

**Option 3: Emotional Appeal**
```tsx
turning moments into magic
```

**Option 4: Service-Focused**
```tsx
balloon artistry & event design
```

---

### Tagline Variations

**File:** `src/components/balloon-site/hero-section.tsx` (line 58)

**Option 1: Location-Focused**
```tsx
Lubbock's premier balloon decor studio - creating stunning installations for every celebration
```

**Option 2: Service-Focused**
```tsx
From elegant arches to playful bouquets, we bring your vision to life with custom balloon artistry
```

**Option 3: Experience-Focused**
```tsx
Over 10 years of creating magical moments with professional balloon design and party rentals
```

**Option 4: Benefit-Focused**
```tsx
Stress-free event decor delivered on time, every time - because your celebration deserves perfection
```

---

### Services List Examples

**File:** `src/components/balloon-site/service-icons.tsx` (add to services array)

**Example 1: Add "Graduations"**
```tsx
{
  icon: GraduationCap,  // Add import: import { GraduationCap } from 'lucide-react';
  label: 'GRADUATIONS',
  description: 'Celebrate achievements',
},
```

**Example 2: Add "Holiday Parties"**
```tsx
{
  icon: PartyPopper,  // Add import: import { PartyPopper } from 'lucide-react';
  label: 'HOLIDAY PARTIES',
  description: 'Festive seasonal decor',
},
```

**Example 3: Add "Grand Openings"**
```tsx
{
  icon: Store,  // Add import: import { Store } from 'lucide-react';
  label: 'GRAND OPENINGS',
  description: 'Make your debut memorable',
},
```

---

## 🖼️ Image Examples

### Hero Section with Background Image

**File:** `src/components/balloon-site/hero-section.tsx` (line 30)

**Before:**
```tsx
style={{ backgroundColor: '#ffc9eb' }}
```

**After:**
```tsx
style={{
  backgroundImage: 'url(/images/hero-background.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}}
```

**Don't forget:** Add your image to `/public/images/hero-background.jpg`

---

### Gallery Image Grid

**File:** `src/components/balloon-site/gallery-preview.tsx`

**Example gallery array:**
```tsx
const galleryImages = [
  {
    src: '/images/gallery/pink-balloon-arch.jpg',
    alt: 'Pink and gold balloon arch for wedding',
    category: 'Weddings',
  },
  {
    src: '/images/gallery/birthday-balloons.jpg',
    alt: 'Colorful birthday balloon bouquet',
    category: 'Birthdays',
  },
  {
    src: '/images/gallery/corporate-event.jpg',
    alt: 'Professional balloon decor for corporate event',
    category: 'Corporate',
  },
  {
    src: '/images/gallery/baby-shower-pink.jpg',
    alt: 'Pastel pink balloon garland for baby shower',
    category: 'Baby Showers',
  },
  {
    src: '/images/gallery/balloon-columns.jpg',
    alt: 'Gold and white balloon columns',
    category: 'Weddings',
  },
  {
    src: '/images/gallery/number-balloons.jpg',
    alt: 'Giant number balloons for milestone birthday',
    category: 'Birthdays',
  },
];
```

---

## 📞 Contact Information Update

### Complete Contact Section

**File:** `src/components/balloon-site/contact-footer.tsx`

**Phone (lines 243-248):**
```tsx
<a
  href="tel:+18065551234"
  className="text-gray-700 hover:text-[#f78da7] transition-colors"
>
  (806) 555-1234
</a>
```

**Email (lines 261-266):**
```tsx
<a
  href="mailto:yourname@yourbusiness.com"
  className="text-gray-700 hover:text-[#f78da7] transition-colors"
>
  yourname@yourbusiness.com
</a>
```

**Service Area (lines 279-281):**
```tsx
<p className="text-gray-700">
  Lubbock, Levelland, Brownfield & Surrounding Areas
</p>
```

**Social Media (lines 293-318):**
```tsx
{/* Facebook */}
<a
  href="https://facebook.com/YourBusinessPage"
  target="_blank"
  rel="noopener noreferrer"
  className="w-12 h-12 bg-[#ffc9eb]/50 hover:bg-[#ffc9eb] rounded-full flex items-center justify-center transition-all duration-200 group"
  aria-label="Visit our Facebook page"
>
  <Facebook size={24} className="text-black transition-colors" />
</a>

{/* Instagram */}
<a
  href="https://instagram.com/yourbusinesshandle"
  target="_blank"
  rel="noopener noreferrer"
  className="w-12 h-12 bg-[#ffc9eb]/50 hover:bg-[#ffc9eb] rounded-full flex items-center justify-center transition-all duration-200 group"
  aria-label="Visit our Instagram profile"
>
  <Instagram size={24} className="text-black transition-colors" />
</a>
```

---

## 🎯 Call-to-Action Button Variations

**File:** `src/components/balloon-site/hero-section.tsx` (lines 69-87)

### Example 1: Two Action Buttons
```tsx
<Link
  href="#contact"
  className="inline-block bg-[#32373c] text-white px-8 py-4 rounded-lg font-semibold text-sm tracking-wide hover:bg-black transition-all duration-300 hover:translate-y-[-2px]"
  style={{ boxShadow: '6px 6px 9px rgba(0, 0, 0, 0.2)' }}
>
  GET A FREE QUOTE
</Link>

<Link
  href="#services"
  className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold text-sm tracking-wide hover:bg-gray-50 transition-all duration-300 hover:translate-y-[-2px]"
  style={{ boxShadow: '6px 6px 9px rgba(0, 0, 0, 0.15)' }}
>
  VIEW SERVICES
</Link>
```

### Example 2: Single Strong CTA
```tsx
<Link
  href="tel:+18065551234"
  className="inline-block bg-[#32373c] text-white px-10 py-5 rounded-lg font-bold text-base tracking-wide hover:bg-black transition-all duration-300 hover:scale-105"
  style={{ boxShadow: '6px 6px 9px rgba(0, 0, 0, 0.2)' }}
>
  CALL NOW: (806) 555-1234
</Link>
```

### Example 3: Action + Info
```tsx
<Link
  href="#contact"
  className="inline-block bg-[#32373c] text-white px-8 py-4 rounded-lg font-semibold text-sm tracking-wide hover:bg-black transition-all duration-300"
  style={{ boxShadow: '6px 6px 9px rgba(0, 0, 0, 0.2)' }}
>
  BOOK YOUR EVENT
</Link>

<Link
  href="/gallery"
  className="inline-block bg-transparent border-2 border-black text-black px-8 py-4 rounded-lg font-semibold text-sm tracking-wide hover:bg-black hover:text-white transition-all duration-300"
>
  SEE OUR WORK
</Link>
```

---

## 🎨 Business Name/Logo Update

### Text Logo (Current)

**File:** `src/components/balloon-site/header.tsx` (around line 40)

```tsx
<Link href="/" className="flex items-center">
  <span className="font-script text-2xl md:text-3xl text-black">
    where balloons make memories
  </span>
</Link>
```

### Image Logo

**File:** `src/components/balloon-site/header.tsx` (replace above section)

```tsx
<Link href="/" className="flex items-center">
  <img
    src="/images/logo.png"
    alt="Your Business Name"
    className="h-12 md:h-16 w-auto"
  />
</Link>
```

**Don't forget:** Add your logo to `/public/images/logo.png`

### Text + Icon Logo

**File:** `src/components/balloon-site/header.tsx` (replace logo section)

```tsx
<Link href="/" className="flex items-center gap-3">
  <div className="w-10 h-10 bg-[#ffc9eb] rounded-full flex items-center justify-center">
    <Sparkles className="w-6 h-6 text-black" />
  </div>
  <span className="font-display text-xl md:text-2xl font-bold text-black">
    Your Business Name
  </span>
</Link>
```

**Don't forget:** Add import: `import { Sparkles } from 'lucide-react';`

---

## 📱 Adding a "Book Now" Modal

### Step 1: Install Required Package
```bash
npm install @radix-ui/react-dialog
```

### Step 2: Create BookingModal Component

**New File:** `src/components/balloon-site/booking-modal.tsx`

```tsx
'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

export function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-[#32373c] text-white px-8 py-4 rounded-lg font-semibold text-sm tracking-wide hover:bg-black transition-all duration-300"
      >
        BOOK NOW
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Book Your Event</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Your booking form here */}
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border rounded-lg"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border rounded-lg"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full px-4 py-3 border rounded-lg"
              />
              <textarea
                placeholder="Tell us about your event..."
                rows={4}
                className="w-full px-4 py-3 border rounded-lg"
              />
              <button
                type="submit"
                className="w-full bg-[#32373c] text-white py-3 rounded-lg font-semibold hover:bg-black transition-all"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
```

### Step 3: Use Modal in Your Page

**File:** `src/components/balloon-site/hero-section.tsx`

```tsx
import { BookingModal } from './booking-modal';

// Replace button with:
<BookingModal />
```

---

## 🔍 SEO Improvements

### Update Page Metadata

**File:** `src/app/layout.tsx` (lines 22-25)

```tsx
export const metadata: Metadata = {
  title: "Your Business Name | Balloon Decor & Event Design in Lubbock, TX",
  description: "Premium balloon installations and party rentals in Lubbock, Texas. Specializing in weddings, birthdays, corporate events, and celebrations. Free consultations available.",
  keywords: "balloon decor lubbock, event design texas, balloon artist, wedding balloons, party decorations, corporate events lubbock",
  openGraph: {
    title: "Your Business Name - Balloon Decor & Event Design",
    description: "Premium balloon installations in Lubbock, TX",
    images: ['/images/og-image.jpg'],
  },
};
```

---

## 🎉 Complete Theme Change in 5 Minutes

### Mint Green Business Theme

**Step 1:** Update `src/app/globals.css` line 12-20:
```css
--brand-pink: 150 40% 85%;
--brand-pink-dark: 150 50% 65%;
--brand-accent: 160 60% 55%;
```

**Step 2:** Update `src/components/balloon-site/color-customizer.tsx` line 18-22:
```tsx
colors: {
  pink: '150 40% 85%',
  pinkDark: '150 50% 65%',
  accent: '160 60% 55%',
},
```

**Step 3:** Update business name in:
- `src/components/balloon-site/hero-section.tsx` line 48
- `src/components/balloon-site/header.tsx` (logo section)
- `src/components/balloon-site/contact-footer.tsx` line 302

**Done!** Your site now has a fresh mint green theme.

---

## 💡 Pro Tips

### Testing Your Changes
1. Save all files
2. Run `npm run dev`
3. Visit `http://localhost:4006`
4. Check on mobile (press F12, click mobile icon)

### Finding the Right Colors
1. Visit [hslpicker.com](https://hslpicker.com)
2. Choose your color visually
3. Copy the HSL values (H S% L%)
4. Paste into CSS: `--brand-pink: H S% L%;`

### Finding Icons
1. Visit [lucide.dev](https://lucide.dev)
2. Search for your icon
3. Copy the icon name
4. Add import: `import { IconName } from 'lucide-react';`
5. Use in component: `<IconName size={24} />`

---

**Need more help?** Check `EDITING_GUIDE.md` for detailed instructions on all features!
