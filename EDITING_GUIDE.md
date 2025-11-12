# 🎨 Website Editing Guide
## Where Balloons Make Memories - Complete Customization Guide

This guide will help you edit and customize your website without needing extensive technical knowledge. Everything is organized for easy editing!

---

## 📁 Project Structure

```
/src/
  /app/
    page.tsx              ← Main homepage (assembles all sections)
    layout.tsx            ← Site-wide settings, fonts, metadata
    globals.css           ← Colors, fonts, styles (CUSTOMIZE HERE!)

  /components/balloon-site/
    header.tsx            ← Navigation menu & logo
    hero-section.tsx      ← Top banner with main message
    service-icons.tsx     ← Service offerings display
    why-choose-us.tsx     ← Benefits/features section
    gallery-preview.tsx   ← Photo gallery
    story-testimonials.tsx← Reviews & testimonials
    contact-footer.tsx    ← Footer with contact info
    color-customizer.tsx  ← Live color theme switcher

/public/
  /images/              ← Add your photos here
```

---

## 🎨 Part 1: Changing Colors & Fonts

### **Quick Color Changes**

The easiest way to change colors is to use the built-in color customizer (floating paint icon in bottom-right corner).

### **Advanced: Edit CSS Variables**

Open **`src/app/globals.css`** and find the `:root` section (around line 10):

```css
:root {
  /* EDIT THESE VALUES TO CHANGE YOUR SITE COLORS */

  --brand-pink: 330 100% 89%;        /* Main background color */
  --brand-pink-dark: 330 100% 75%;   /* Darker shade for depth */
  --brand-accent: 350 82% 77%;       /* Accent color for buttons */
  --brand-black: 0 0% 0%;            /* Text color */
  --brand-white: 0 0% 100%;          /* Card backgrounds */
}
```

**How to change colors:**
- Colors use HSL format: `Hue Saturation Lightness`
- **Hue**: 0-360 (0=red, 120=green, 240=blue, 330=pink)
- **Saturation**: 0-100% (0=gray, 100=vivid)
- **Lightness**: 0-100% (0=black, 50=pure color, 100=white)

**Examples:**
```css
/* Pastel Blue Theme */
--brand-pink: 200 100% 90%;
--brand-pink-dark: 200 80% 70%;
--brand-accent: 210 70% 65%;

/* Mint Green Theme */
--brand-pink: 150 40% 85%;
--brand-pink-dark: 150 50% 65%;
--brand-accent: 160 60% 55%;

/* Lavender Theme */
--brand-pink: 270 60% 90%;
--brand-pink-dark: 270 50% 75%;
--brand-accent: 280 45% 65%;
```

### **Changing Fonts**

Open **`src/app/globals.css`** and find (around line 62):

```css
:root {
  /* EDIT THESE TO CHANGE FONTS */

  --font-script: 'Pacifico', cursive;          /* Fancy handwritten font */
  --font-display: 'Poppins', sans-serif;       /* Headings & titles */
  --font-body: 'Inter', sans-serif;            /* Paragraph text */
}
```

**Popular Font Combinations:**

**Elegant & Playful:**
```css
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Montserrat:wght@400;600;700&family=Open+Sans:wght@400;600&display=swap');

--font-script: 'Dancing Script', cursive;
--font-display: 'Montserrat', sans-serif;
--font-body: 'Open Sans', sans-serif;
```

**Modern & Clean:**
```css
@import url('https://fonts.googleapis.com/css2?family=Satisfy&family=Raleway:wght@400;600;700&family=Lato:wght@400;600&display=swap');

--font-script: 'Satisfy', cursive;
--font-display: 'Raleway', sans-serif;
--font-body: 'Lato', sans-serif;
```

**Classic & Professional:**
```css
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:wght@400;700&family=Source+Sans+Pro:wght@400;600&display=swap');

--font-script: 'Great Vibes', cursive;
--font-display: 'Playfair Display', serif;
--font-body: 'Source Sans Pro', sans-serif;
```

**Don't forget:** Add the `@import` line at the TOP of `globals.css` (line 2).

---

## ✏️ Part 2: Editing Text Content

### **Header Navigation** (`src/components/balloon-site/header.tsx`)

Find the navigation links (around line 40):

```tsx
{/* EDIT THESE MENU ITEMS */}
<Link href="/">Home</Link>
<Link href="/services">Services</Link>
<Link href="/gallery">Gallery</Link>
<Link href="/contact">Contact</Link>
```

**To add a new page:**
1. Add a new link: `<Link href="/about">About Us</Link>`
2. Create the page file: `src/app/about/page.tsx` (copy from an existing page)

### **Hero Section** (`src/components/balloon-site/hero-section.tsx`)

Main headline and tagline (around line 15):

```tsx
{/* EDIT YOUR MAIN HEADLINE */}
<h1 className="font-script">where balloons make memories</h1>

{/* EDIT YOUR TAGLINE */}
<p className="text-xl">
  Custom balloon artistry for your special moments in Lubbock, TX
</p>

{/* EDIT BUTTON TEXT & LINK */}
<Link href="/services">
  Explore Our Services
</Link>
```

### **Services Section** (`src/components/balloon-site/service-icons.tsx`)

Edit your services (around line 20):

```tsx
const services = [
  {
    // EDIT ICON (lucide-react icons: lucide.dev)
    icon: Cake,

    // EDIT SERVICE NAME
    title: 'Birthday Parties',

    // EDIT DESCRIPTION
    description: 'Colorful balloon arrangements...',

    // EDIT PAGE LINK
    link: '/services/birthday-parties',
  },
  // Add more services by copying this structure
];
```

### **Why Choose Us** (`src/components/balloon-site/why-choose-us.tsx`)

Edit your benefits (around line 15):

```tsx
const benefits = [
  {
    icon: Sparkles,
    title: 'Custom Designs',              // ← EDIT
    description: 'Every installation...',  // ← EDIT
  },
  {
    icon: Clock,
    title: 'On-Time Setup',               // ← EDIT
    description: 'We arrive early...',     // ← EDIT
  },
  // Add more benefits by copying this structure
];
```

### **Footer Contact** (`src/components/balloon-site/contact-footer.tsx`)

Update your contact information (around line 25):

```tsx
{/* EDIT BUSINESS NAME */}
<h3>where balloons make memories</h3>

{/* EDIT ADDRESS */}
<p>123 Balloon Lane, Lubbock, TX 79401</p>

{/* EDIT PHONE */}
<a href="tel:+18065551234">(806) 555-1234</a>

{/* EDIT EMAIL */}
<a href="mailto:hello@balloonslubbock.com">
  hello@balloonslubbock.com
</a>

{/* EDIT SOCIAL LINKS */}
<a href="https://instagram.com/yourhandle" aria-label="Instagram">
  <Instagram className="w-5 h-5" />
</a>
```

---

## 📸 Part 3: Adding Images

### **Adding Photos to Gallery**

1. Put your photos in `/public/images/`
2. Open `src/components/balloon-site/gallery-preview.tsx`
3. Edit the `galleryImages` array (around line 15):

```tsx
const galleryImages = [
  {
    // EDIT IMAGE PATH (must be in /public/)
    src: '/images/balloon-arch-pink.jpg',

    // EDIT ALT TEXT (for accessibility)
    alt: 'Pink balloon arch for wedding',

    // EDIT CATEGORY
    category: 'Weddings',
  },
  // Add more images by copying this structure
];
```

### **Changing Hero Background Image**

Open `src/components/balloon-site/hero-section.tsx` (around line 10):

```tsx
<div
  className="..."
  style={{
    // EDIT BACKGROUND IMAGE
    backgroundImage: 'url(/images/your-hero-image.jpg)',
  }}
>
```

**Image Tips:**
- Use `.jpg` for photos (smaller file size)
- Use `.png` for logos/graphics with transparency
- Optimize images before uploading (aim for < 500KB)
- Recommended sizes:
  - Hero images: 1920x1080px
  - Gallery images: 800x600px
  - Thumbnails: 400x300px

---

## 🎯 Part 4: Editing Individual Pages

### **Services Page** (`src/app/services/page.tsx`)

This page lists all your services. Edit the services array to add/remove offerings.

### **Creating Individual Service Pages**

Each service can have its own detailed page at `src/app/services/[slug]/page.tsx`.

**To add a new service page:**

1. Open `src/lib/services-data.ts`
2. Add your service to the array:

```tsx
export const servicesData = [
  {
    // URL-friendly name (no spaces)
    slug: 'birthday-parties',

    // Display name
    name: 'Birthday Parties',

    // Short description (for cards)
    shortDescription: 'Colorful balloon arrangements...',

    // Full description (for detail page)
    fullDescription: 'Our birthday party packages...',

    // Featured image
    image: '/images/birthday-balloons.jpg',

    // List of features/inclusions
    features: [
      'Custom color matching',
      'Balloon arches',
      'Centerpieces',
    ],

    // Pricing (optional)
    priceRange: '$150 - $500',
  },
  // Add more services here
];
```

The system automatically creates pages at `/services/birthday-parties` based on the slug.

---

## 🛠️ Part 5: Advanced Customizations

### **Adding a Contact Form**

You have a contact form in the footer. To connect it to email:

**Option 1: Use a form service (easiest)**
- Sign up for [Formspree](https://formspree.io) (free plan available)
- Get your form endpoint
- Update the form action in `contact-footer.tsx`:

```tsx
<form action="https://formspree.io/f/YOUR-FORM-ID" method="POST">
```

**Option 2: Use email API**
- Set up SendGrid, Mailgun, or similar
- Create an API route at `src/app/api/contact/route.ts`
- Connect the form to your API

### **Adding Google Analytics**

Open `src/app/layout.tsx` and add in the `<head>` section:

```tsx
<head>
  {/* Google Analytics */}
  <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
  <script
    dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'GA_MEASUREMENT_ID');
      `,
    }}
  />
</head>
```

Replace `GA_MEASUREMENT_ID` with your Google Analytics ID.

### **Changing the Logo**

1. Add your logo image to `/public/images/logo.png`
2. Open `src/components/balloon-site/header.tsx`
3. Replace the text logo with an image:

```tsx
<Link href="/" className="flex items-center gap-2">
  <img
    src="/images/logo.png"
    alt="Your Business Name"
    className="h-12 w-auto"
  />
</Link>
```

### **Adding More Pages**

To create a new page (e.g., "About Us"):

1. Create folder: `src/app/about/`
2. Create file: `src/app/about/page.tsx`
3. Copy this template:

```tsx
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      <div className="container-custom section-padding">
        <h1 className="text-5xl font-bold mb-6">About Us</h1>
        <p className="text-lg">
          Your story here...
        </p>
      </div>
    </div>
  );
}
```

4. Add link in navigation (header.tsx)

---

## 📱 Part 6: Responsive Design

Your site is already mobile-responsive! But you can adjust breakpoints.

**Understanding Responsive Classes:**

In Tailwind CSS (this site's styling system):
- `md:` = tablets (768px and up)
- `lg:` = desktops (1024px and up)
- `xl:` = large screens (1280px and up)

**Example:**
```tsx
<h1 className="text-3xl md:text-4xl lg:text-6xl">
  {/* 3xl on mobile, 4xl on tablet, 6xl on desktop */}
</h1>
```

**Test Responsiveness:**
1. Open your site in a browser
2. Press `F12` (Developer Tools)
3. Click the mobile/tablet icon
4. Test different screen sizes

---

## 🚀 Part 7: Publishing Your Changes

### **Local Development**

Run the development server to see changes live:

```bash
npm run dev
```

Visit `http://localhost:4006` in your browser.

### **Building for Production**

Before deploying, build your site:

```bash
npm run build
```

This checks for errors and optimizes your site.

### **Deployment Options**

**Option 1: Vercel (Recommended - Free)**
1. Sign up at [vercel.com](https://vercel.com)
2. Connect your GitHub repository
3. Click "Deploy"
4. Your site is live!

**Option 2: Netlify**
1. Sign up at [netlify.com](https://netlify.com)
2. Drag & drop your project folder
3. Or connect GitHub for auto-deployment

**Option 3: Your Own Server**
- Build the site: `npm run build`
- Copy the `.next` folder and `package.json` to your server
- Run: `npm run start`

---

## 🆘 Common Issues & Solutions

### **Colors Not Changing**

- **Problem:** Edited CSS but colors didn't update
- **Solution:** Clear browser cache (`Ctrl + Shift + R` or `Cmd + Shift + R`)
- **Or:** Check if color customizer is overriding (reset it via the UI)

### **Fonts Not Loading**

- **Problem:** Custom font doesn't appear
- **Solution:**
  1. Make sure `@import` is at the TOP of `globals.css`
  2. Check spelling of font name (case-sensitive)
  3. Clear cache and refresh

### **Images Not Showing**

- **Problem:** Added image but it's broken
- **Solution:**
  1. Verify image is in `/public/` folder
  2. Check path starts with `/` (e.g., `/images/photo.jpg`)
  3. Check file extension matches (`.jpg` vs `.jpeg`)

### **Build Errors**

- **Problem:** `npm run build` fails
- **Solution:**
  1. Check for syntax errors (missing brackets, quotes)
  2. Look at the error message (it tells you which file/line)
  3. Make sure all image paths are correct

### **Page Not Found (404)**

- **Problem:** Created new page but getting 404
- **Solution:**
  1. Make sure folder is in `src/app/`
  2. File must be named `page.tsx`
  3. Restart dev server (`Ctrl + C`, then `npm run dev`)

---

## 📚 Learning Resources

### **Tailwind CSS (Styling)**
- Official Docs: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- Cheat Sheet: [nerdcave.com/tailwind-cheat-sheet](https://nerdcave.com/tailwind-cheat-sheet)

### **Next.js (Framework)**
- Official Docs: [nextjs.org/docs](https://nextjs.org/docs)
- Learn Course: [nextjs.org/learn](https://nextjs.org/learn)

### **React (Component Library)**
- Official Tutorial: [react.dev/learn](https://react.dev/learn)

### **Icons**
- Lucide Icons: [lucide.dev](https://lucide.dev) (used in this site)
- Just import and use: `import { Heart } from 'lucide-react';`

### **Color Pickers**
- HSL Color Picker: [hslpicker.com](https://hslpicker.com)
- Coolors (palette generator): [coolors.co](https://coolors.co)

### **Google Fonts**
- Browse Fonts: [fonts.google.com](https://fonts.google.com)
- How to use: Click font → "View selected families" → Copy `@import`

---

## ✅ Quick Reference Checklist

Use this checklist when making changes:

### Before Editing:
- [ ] Back up the current version (copy the project folder)
- [ ] Run `npm run dev` to see changes live

### While Editing:
- [ ] Save files after each change
- [ ] Check browser for updates (auto-refreshes in dev mode)
- [ ] Test on different screen sizes (mobile/tablet/desktop)

### Before Publishing:
- [ ] Run `npm run build` to check for errors
- [ ] Test all links work
- [ ] Verify contact form works
- [ ] Check images load properly
- [ ] Test on real mobile device

### After Publishing:
- [ ] Verify live site works
- [ ] Test contact form on live site
- [ ] Check Google Analytics (if installed)
- [ ] Share with friends/clients for feedback

---

## 🎉 You're Ready to Edit!

**Quick Start Steps:**

1. **Change Colors:**
   - Use the floating paint icon (bottom-right)
   - Or edit `src/app/globals.css` line 10-20

2. **Change Text:**
   - Edit `src/components/balloon-site/*.tsx` files
   - Search for the text you want to change

3. **Add Images:**
   - Put images in `/public/images/`
   - Update image paths in components

4. **Preview Changes:**
   - Run `npm run dev`
   - Open `http://localhost:4006`

5. **Deploy:**
   - Run `npm run build`
   - Upload to Vercel/Netlify

**Need Help?**
- Check the "Common Issues" section above
- Refer to the learning resources
- Comment sections in the code have hints!

---

**Remember:** Save often, test frequently, and don't be afraid to experiment! You can always undo changes or restore from backup.

Happy editing! 🎈
