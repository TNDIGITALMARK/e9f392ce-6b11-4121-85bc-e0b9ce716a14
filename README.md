# 🎈 Where Balloons Make Memories - Website

A beautiful, fully customizable Next.js website for balloon decor and event design businesses. Built with modern web technologies and designed for easy editing without deep technical knowledge.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- Basic text editor (VS Code recommended)

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open in browser
http://localhost:4006
```

### Build for Production

```bash
# Build optimized version
npm run build

# Run production server
npm run start
```

---

## 📚 Documentation

### **[📖 EDITING_GUIDE.md](./EDITING_GUIDE.md)** - Start Here!
Complete guide to customizing your website:
- Changing colors & fonts
- Editing text content
- Adding images
- Updating contact information
- Adding new pages
- Advanced customizations

### **[🎨 CUSTOMIZATION_EXAMPLES.md](./CUSTOMIZATION_EXAMPLES.md)** - Copy & Paste Examples
Ready-to-use code snippets for:
- Color themes (Pastel Blue, Mint Green, Lavender, Coral)
- Font combinations
- Text variations
- Contact information updates
- Button styles
- Logo options
- Complete theme changes

---

## 🎯 Features

✅ **Modern Design** - Clean, professional aesthetic with playful elements
✅ **Fully Responsive** - Perfect on mobile, tablet, and desktop
✅ **Easy to Edit** - Comprehensive inline comments guide you
✅ **Live Color Customizer** - Change colors on-the-fly with built-in tool
✅ **SEO Optimized** - Ready for search engines
✅ **Fast Performance** - Built with Next.js for speed
✅ **Accessible** - WCAG compliant for all users
✅ **Image Gallery** - Showcase your work beautifully
✅ **Contact Form** - Capture leads easily
✅ **Service Sections** - Highlight your offerings

---

## 📁 Project Structure

```
/src
  /app
    page.tsx                    ← Homepage (assembles all sections)
    layout.tsx                  ← Site-wide settings
    globals.css                 ← 🎨 EDIT COLORS & FONTS HERE!

  /components/balloon-site
    hero-section.tsx            ← Top banner with headline
    service-icons.tsx           ← Service offerings display
    why-choose-us.tsx           ← Benefits/features section
    gallery-preview.tsx         ← Photo gallery
    story-testimonials.tsx      ← Customer reviews
    contact-footer.tsx          ← Contact form & footer
    header.tsx                  ← Navigation menu
    color-customizer.tsx        ← Live color theme switcher

/public
  /images                       ← 📸 ADD YOUR PHOTOS HERE!

/docs
  EDITING_GUIDE.md              ← Complete editing instructions
  CUSTOMIZATION_EXAMPLES.md     ← Copy-paste code snippets
```

---

## 🎨 Quick Customizations

### Change Your Colors (2 minutes)

**Option 1:** Use the floating paint icon (bottom-right corner) - click and choose!

**Option 2:** Edit `src/app/globals.css` around line 12:
```css
:root {
  --brand-pink: 330 100% 89%;        /* ← Change this! */
  --brand-accent: 350 82% 77%;       /* ← And this! */
}
```

**Pro Tip:** Use [hslpicker.com](https://hslpicker.com) to find colors visually!

---

### Update Your Business Info (5 minutes)

**1. Business Name**
- Edit `src/components/balloon-site/hero-section.tsx` line 48
- Edit `src/components/balloon-site/header.tsx` (logo section)
- Edit `src/components/balloon-site/contact-footer.tsx` line 302

**2. Contact Details**
- Open `src/components/balloon-site/contact-footer.tsx`
- Phone: lines 243-248
- Email: lines 261-266
- Social media: lines 293-318

**3. Services**
- Edit `src/components/balloon-site/service-icons.tsx`
- Add/remove services in the array (lines 24-50)

---

### Add Your Photos (10 minutes)

**1. Prepare Images**
- Save photos in `/public/images/`
- Optimize for web (< 500KB recommended)
- Use descriptive names: `pink-balloon-arch.jpg`

**2. Update Gallery**
- Open `src/components/balloon-site/gallery-preview.tsx`
- Edit `galleryImages` array
- Add your image paths and descriptions

**3. Change Hero Background**
- Open `src/components/balloon-site/hero-section.tsx`
- Line 30: Replace `backgroundColor` with `backgroundImage: 'url(/images/your-hero.jpg)'`

---

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (React 19)
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React
- **UI Components:** Radix UI
- **TypeScript:** Full type safety
- **Fonts:** Google Fonts (Pacifico, Poppins, Inter)

---

## 🚀 Deployment

### Vercel (Recommended - Free)

1. Sign up at [vercel.com](https://vercel.com)
2. Import your Git repository
3. Click "Deploy"
4. Done! Your site is live

### Netlify

1. Sign up at [netlify.com](https://netlify.com)
2. Connect your repository
3. Build command: `npm run build`
4. Publish directory: `.next`

### Other Hosting

1. Build: `npm run build`
2. Upload `.next` folder and `package.json`
3. Run: `npm run start`

---

## 📖 Learning Resources

### For Beginners
- **Editing Guide:** [EDITING_GUIDE.md](./EDITING_GUIDE.md)
- **Examples:** [CUSTOMIZATION_EXAMPLES.md](./CUSTOMIZATION_EXAMPLES.md)
- **Tailwind CSS:** [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Next.js Learn:** [nextjs.org/learn](https://nextjs.org/learn)

### For Developers
- **Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)
- **React Docs:** [react.dev](https://react.dev)
- **Lucide Icons:** [lucide.dev](https://lucide.dev)
- **Radix UI:** [radix-ui.com](https://radix-ui.com)

---

## 🆘 Common Issues

### Colors Not Changing?
- Clear browser cache: `Ctrl + Shift + R` (or `Cmd + Shift + R` on Mac)
- Check color customizer isn't overriding (click reset button)

### Fonts Not Loading?
- Verify `@import` is at TOP of `globals.css`
- Check font name spelling (case-sensitive!)
- Clear cache and refresh

### Images Not Showing?
- Verify image is in `/public/` folder
- Check path starts with `/` (e.g., `/images/photo.jpg`)
- Verify file extension matches actual file

### Build Errors?
- Check for syntax errors (missing brackets, quotes)
- Read error message - it tells you the file and line number
- Ensure all image paths exist

---

## 🎯 Customization Checklist

When setting up your site, update:

- [ ] Business name (hero, header, footer)
- [ ] Colors (globals.css and color-customizer.tsx)
- [ ] Contact info (phone, email, social media)
- [ ] Services offered (service-icons.tsx)
- [ ] Photos (hero background, gallery images)
- [ ] Logo (if using custom logo)
- [ ] SEO metadata (layout.tsx)
- [ ] Fonts (if changing from default)
- [ ] Footer links and information

---

## SSR and Browser API Usage

This template includes safeguards for server-side rendering (SSR) issues with browser APIs.

### When to Force Dynamic Rendering

Add `export const dynamic = 'force-dynamic';` to pages that use:
- `navigator` (geolocation, online status, share API)
- `window` (localStorage, sessionStorage, innerWidth/Height)
- Browser-only APIs (Web APIs, PWA features)

### Performance Considerations

- **Static pages** (no browser APIs): Keep static for best performance
- **Dynamic pages** (use browser APIs): Add the dynamic export
- **Mixed apps**: Use selective dynamic rendering per page

### Example Usage

```typescript
// For pages using browser APIs
'use client';
export const dynamic = 'force-dynamic';

import { useGeolocation } from '@/hooks/use-geolocation';

export default function WeatherPage() {
  // This page uses browser APIs, so it needs dynamic rendering
}
```

---

## 📄 License

This project is licensed for use by the purchaser. Modify and customize as needed for your business.

---

## 🎉 You're Ready!

**Next Steps:**

1. **Read:** [EDITING_GUIDE.md](./EDITING_GUIDE.md) for comprehensive instructions
2. **Copy:** [CUSTOMIZATION_EXAMPLES.md](./CUSTOMIZATION_EXAMPLES.md) for quick changes
3. **Edit:** Start with colors and business info
4. **Test:** Run `npm run dev` and preview at `http://localhost:4006`
5. **Deploy:** Upload to Vercel/Netlify and go live!

**Need Help?**
- Check inline code comments (they guide you!)
- Refer to the editing guides
- Test changes incrementally (save often!)

---

**Happy editing! Make this website truly yours.** 🎈✨

---

## 📞 Support

For technical questions:
- Check [EDITING_GUIDE.md](./EDITING_GUIDE.md) first
- Review [CUSTOMIZATION_EXAMPLES.md](./CUSTOMIZATION_EXAMPLES.md)
- Inline comments in code files have helpful hints

---

**Version:** 1.0.0
**Last Updated:** January 2025
**Built with:** Next.js 15, React 19, Tailwind CSS 4
