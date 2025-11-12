# ⚡ Quick Start Guide - 5 Minutes to Your First Edit!

Welcome! This guide will get you making changes to your website in just 5 minutes.

---

## ✅ Step 1: Install & Run (2 minutes)

Open your terminal and run these commands:

```bash
# Navigate to project folder
cd where-balloons-make-memories

# Install dependencies (only needed once)
npm install

# Start the development server
npm run dev
```

**Open in browser:** http://localhost:4006

You should see your website! Keep this running while you edit.

---

## ✅ Step 2: Change Your Colors (30 seconds)

### Option A: Use the Visual Tool (Easiest!)
1. Look for the **floating paint icon** in the bottom-right corner
2. Click it
3. Choose a color theme
4. Done! Your site updates instantly

### Option B: Edit the CSS (More Control)
1. Open `src/app/globals.css`
2. Find line 12 (the `:root {` section)
3. Change these values:

```css
--brand-pink: 330 100% 89%;        /* ← Try: 200 100% 90% for blue */
--brand-accent: 350 82% 77%;       /* ← Try: 210 70% 65% for blue accent */
```

4. Save the file
5. Your browser will auto-refresh!

**Color Picker Tool:** [hslpicker.com](https://hslpicker.com) - Pick colors visually!

---

## ✅ Step 3: Update Your Business Name (1 minute)

### Hero Section (Big headline on homepage)
1. Open `src/components/balloon-site/hero-section.tsx`
2. Find line 48
3. Change the text between the tags:

**Before:**
```tsx
where balloons make memories
```

**After:**
```tsx
Your Business Name Here
```

4. Save the file
5. See your change instantly in the browser!

---

## ✅ Step 4: Change Contact Info (1 minute)

Open `src/components/balloon-site/contact-footer.tsx`

### Update Phone Number (line 243-247)
```tsx
<a href="tel:+18065551234">        {/* ← Add your phone number */}
  (806) 555-1234                   {/* ← Display text */}
</a>
```

### Update Email (line 261-265)
```tsx
<a href="mailto:your@email.com">   {/* ← Add your email */}
  your@email.com                   {/* ← Display text */}
</a>
```

### Update Social Media (lines 293-318)
```tsx
{/* Facebook */}
<a href="https://facebook.com/yourpage">   {/* ← Add your page URL */}

{/* Instagram */}
<a href="https://instagram.com/yourhandle">  {/* ← Add your handle */}
```

Save the file and check your browser!

---

## ✅ Step 5: Add Your First Photo (30 seconds)

1. Save your photo to `/public/images/my-photo.jpg`
2. Open `src/components/balloon-site/hero-section.tsx`
3. Find line 30
4. Change from:

```tsx
style={{ backgroundColor: '#ffc9eb' }}
```

To:

```tsx
style={{
  backgroundImage: 'url(/images/my-photo.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}}
```

5. Save and see your photo as the hero background!

---

## 🎉 You Did It!

In just 5 minutes, you've:
- ✅ Changed your site's colors
- ✅ Updated your business name
- ✅ Changed contact information
- ✅ Added a custom photo

---

## 📚 What's Next?

### Want to Learn More?
- **[EDITING_GUIDE.md](./EDITING_GUIDE.md)** - Complete guide to all features
- **[CUSTOMIZATION_EXAMPLES.md](./CUSTOMIZATION_EXAMPLES.md)** - Copy-paste code snippets
- **[README.md](./README.md)** - Full documentation

### Common Next Steps:

**1. Change Fonts**
- Open `src/app/globals.css`
- See line 2 for font imports
- See lines 62-64 for font assignments
- Examples in [CUSTOMIZATION_EXAMPLES.md](./CUSTOMIZATION_EXAMPLES.md)

**2. Update Services**
- Open `src/components/balloon-site/service-icons.tsx`
- Edit the `services` array (lines 24-50)
- Add/remove/change services

**3. Add Gallery Photos**
- Put photos in `/public/images/`
- Open `src/components/balloon-site/gallery-preview.tsx`
- Edit the `galleryImages` array

**4. Change Tagline**
- Open `src/components/balloon-site/hero-section.tsx`
- Edit line 58 (the paragraph text)

**5. Update SEO Metadata**
- Open `src/app/layout.tsx`
- Edit lines 22-25 (title, description, etc.)

---

## 💡 Pro Tips

### Tip 1: Keep Dev Server Running
- Leave `npm run dev` running while you edit
- Changes appear instantly in your browser
- No need to refresh manually!

### Tip 2: Make Small Changes
- Edit one thing at a time
- Save and check in browser
- This helps catch mistakes early

### Tip 3: Use Comments as Guides
- Look for `{/* ← EDIT: ... */}` comments in code
- They tell you exactly what to change
- Follow the arrows (←)!

### Tip 4: Undo Mistakes
- Press `Ctrl+Z` (or `Cmd+Z` on Mac) to undo
- Or use version control (Git) to restore files
- Always save backups before big changes!

### Tip 5: Find What You Want to Change
- Use `Ctrl+F` (or `Cmd+F`) to search files
- Search for the text you see on the site
- The code is usually right there!

---

## 🆘 Having Issues?

### Website Doesn't Load?
```bash
# Stop the server (Ctrl+C)
# Start it again
npm run dev
```

### Changes Don't Appear?
- Did you save the file? (Check for unsaved indicator)
- Try hard refresh: `Ctrl+Shift+R` (or `Cmd+Shift+R`)
- Check terminal for error messages

### Broke Something?
- Press `Ctrl+Z` to undo
- Or restore from backup/Git
- Check the error message in terminal

### Can't Find What to Edit?
- Search for the text you see: `Ctrl+F`
- Check inline comments: Look for `{/* ← EDIT: ... */}`
- Refer to [EDITING_GUIDE.md](./EDITING_GUIDE.md)

---

## 🚀 Ready to Deploy?

When you're happy with your changes:

```bash
# Build your site
npm run build

# If build succeeds, deploy to:
# - Vercel (recommended): vercel.com
# - Netlify: netlify.com
# - Or your own hosting
```

**See [README.md](./README.md)** for detailed deployment instructions!

---

## 📞 Need More Help?

1. **Check [EDITING_GUIDE.md](./EDITING_GUIDE.md)** - Comprehensive instructions
2. **Try [CUSTOMIZATION_EXAMPLES.md](./CUSTOMIZATION_EXAMPLES.md)** - Ready-to-use code
3. **Look at inline comments** - They guide you through the code
4. **Read error messages** - They tell you what's wrong and where

---

**You're all set! Start customizing and make this site truly yours.** 🎈✨

**Happy editing!**
