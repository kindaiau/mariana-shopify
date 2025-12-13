# Mariana Shopify Design Improvements - Implementation Guide

## Quick Snapshot

### What's Working ✓
- Clean Shopify Online Store 2.0 structure
- Mobile-responsive foundation in place
- Basic header and navigation functional

### What Must Change ✗
- **Announcement bar** feels too basic and cluttered for a premium art gallery
- **Header/logo** lacks the breathing room and elegance needed for high-end art
- **No dedicated hero section** for the Christmas resin collection launch
- Generic product grids don't showcase artwork as gallery pieces

### Primary Goal
**Transform marianamezic.com into a premium art gallery experience that makes collectors feel they're purchasing exclusive artwork, not mass-produced items.**

---

## What I've Created for You

### 1. **Premium Announcement Bar**
File: `sections/mariana-announcement-bar.liquid`

**Changes from default:**
- Cleaner typography with generous spacing
- Minimal, elegant design with subtle border
- Better mobile scaling
- Customizable emoji support
- Smooth hover effects

### 2. **Enhanced Header Styling**
File: `mariana-header-styles.css`

**Improvements:**
- Increased padding for breathing room (2.4rem → 3.2rem on desktop)
- Refined logo sizing with smooth transitions
- Better menu spacing and typography
- Softer, more elegant hover states
- Improved mobile header layout
- Cleaner sticky header behavior

### 3. **Hero Gallery Section**
File: `sections/mariana-hero-gallery.liquid`

**Perfect for:**
- Christmas resin collection launch
- Full-width artwork showcase
- Minimal text overlay
- Responsive image handling
- Multiple positioning options

### 4. **Featured Collection Grid**
File: `sections/mariana-featured-collection.liquid`

**Features:**
- Premium product card design
- Hover effects for gallery feel
- Generous spacing between items
- Square image ratios (perfect for artwork)
- Sold/New badges
- Customizable grid columns

---

## Implementation Steps

### Step 1: Add Custom CSS (5 minutes)

1. In Shopify admin, go to **Online Store → Themes**
2. Click **Actions → Edit code** on your active theme
3. Find **layout/theme.liquid**
4. Add this line **before** the closing `</head>` tag (around line 259):

```liquid
<link rel="stylesheet" href="{{ 'mariana-header-styles.css' | asset_url }}">
```

### Step 2: Replace Announcement Bar (3 minutes)

1. Go to **Online Store → Themes → Customize**
2. In the header area, **hide or remove** the default announcement bar
3. Click **Add section** at the very top
4. Choose **"Mariana Announcement Bar"**
5. Customize the text:
   - Text: "New Christmas Resin Collection — Releasing Tuesday 9th December"
   - Emoji: 🎄
   - Link: Your Christmas collection URL
6. **Save**

### Step 3: Add Hero Section for Christmas Collection (5 minutes)

1. Go to your homepage in the theme customizer
2. Click **Add section** at the top
3. Choose **"Mariana Hero Gallery"**
4. Upload a stunning photo of one of your Christmas resin pieces (2000px width recommended)
5. Customize:
   - Heading: "Christmas Resin Collection"
   - Subheading: "Limited edition pieces, each one-of-a-kind"
   - Button text: "View Collection"
   - Button link: Your Christmas collection URL
   - Content position: Center
   - Text alignment: Center
6. Adjust colors if needed (white text on dark overlay works well)
7. **Save**

### Step 4: Add Featured Collection Section (4 minutes)

1. Below the hero, click **Add section**
2. Choose **"Mariana Featured Collection"**
3. Select your Christmas collection
4. Customize:
   - Heading: "New This Week"
   - Description: "Handcrafted resin artworks created in Adelaide"
   - Products to show: 3 or 4
   - Columns: 3 for desktop
5. **Save**

### Step 5: Upload High-Quality Images (15 minutes)

For the hero section and collection:
- **Hero image**: 2000px × 1333px (landscape), high quality
- **Product images**: 1200px × 1200px (square), consistent styling
- Use natural lighting photos that show the resin depth and colors
- Consider lifestyle shots showing scale

---

## Mobile Tweaks

All sections are mobile-first and will automatically adjust:
- Hero scales from 75vh desktop → 60vh mobile
- Grid goes from 3 columns → 2 columns → 1 column
- Text sizes reduce proportionally
- Padding adjusts for smaller screens

**Test on mobile before launch:**
1. Use Shopify preview on your phone
2. Check that text is readable
3. Ensure images load properly
4. Test all buttons and links

---

## If You Only Do 3 Things

**Priority changes for immediate improvement:**

1. **Replace the announcement bar** with the Mariana version
   - Takes 3 minutes
   - Instantly looks more premium
   - Better matches your brand

2. **Add the custom header CSS**
   - Takes 5 minutes
   - Gives everything more breathing room
   - Makes logo and navigation feel professional

3. **Add the hero gallery section** to your homepage
   - Takes 5 minutes
   - Perfect spotlight for Christmas collection
   - Transforms first impression from "shop" to "gallery"

**Total time: 13 minutes for dramatic improvement**

---

## Before Tuesday's Launch

### Checklist:
- [ ] Add all new sections to homepage
- [ ] Upload hero image (your best Christmas resin piece)
- [ ] Upload square product images for all Christmas pieces
- [ ] Update announcement bar text with launch time
- [ ] Test mobile layout on actual phone
- [ ] Check all links work correctly
- [ ] Preview site in incognito mode
- [ ] Take screenshots for Instagram announcement

### Recommended Homepage Flow:

1. **Mariana Announcement Bar** - "Releasing Tuesday 9th Dec 8PM"
2. **Header** - Clean, minimal (existing)
3. **Mariana Hero Gallery** - Stunning Christmas resin hero image
4. **Mariana Featured Collection** - 3-4 Christmas pieces
5. **Rich text section** - Artist statement about the collection
6. **Existing sections** - Keep your testimonials, Instagram feed, etc.

---

## Color & Typography Notes

**Current setup respects your existing color schemes**, but if you want to customize:

### For a premium art gallery feel:
- Lots of white/off-white space
- Minimal use of color (let artwork be the color)
- Generous padding everywhere
- Serif fonts for headings (if you want to change later)
- Sans-serif for body text (Montserrat is good)

### The "Mariana palette" (from your brand):
- Primary: Soft neutrals, whites, creams
- Accent: Deep greens (from your logo/brand)
- Text: Charcoal grays, not pure black
- Let the resin colors POP against neutral backgrounds

---

## Need Help?

If something isn't working:
1. Check you've saved all changes in theme customizer
2. Verify the CSS file was added to theme.liquid
3. Hard refresh your browser (Cmd+Shift+R or Ctrl+Shift+R)
4. Check mobile preview in Shopify (not just browser resize)

**Questions about any step? Let me know and I'll clarify!**

---

## Next Steps (After Launch)

Once Christmas collection is live, consider:
- Creating a dedicated product page template for hero pieces
- Adding an "About the Artist" section to homepage
- Setting up email signup for collector's list
- Improving collection page layouts
- Adding storytelling blocks for each piece

---

*This guide is designed for someone with no coding experience. Follow the steps exactly and you'll transform your shop into a premium art gallery in under 30 minutes.*
