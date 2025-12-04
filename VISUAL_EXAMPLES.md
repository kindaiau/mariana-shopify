# Visual Examples - Header Logo & Banner

This document provides visual representations and examples to help you understand the header logo and banner structure.

---

## Header Logo Positions

### Desktop Logo Positions

The header supports 4 different logo positions on desktop:

```
┌─────────────────────────────────────────────────────────┐
│ Top-Left Position                                       │
│ [LOGO]     Menu  Menu  Menu          🔍  👤  🛒       │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ Top-Center Position                                     │
│                    [LOGO]                               │
│     Menu  Menu  Menu                    🔍  👤  🛒     │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ Middle-Left Position (Default)                          │
│ [LOGO]    Menu  Menu  Menu          🔍  👤  🛒         │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ Middle-Center Position                                  │
│  Menu  Menu  Menu  [LOGO]  Menu  Menu  🔍  👤  🛒      │
└─────────────────────────────────────────────────────────┘
```

### Mobile Logo Positions

```
┌──────────────────────┐
│  Center Position     │
│  ☰     [LOGO]    🛒  │
└──────────────────────┘

┌──────────────────────┐
│  Left Position       │
│  ☰ [LOGO]        🛒  │
└──────────────────────┘
```

---

## Banner Content Positions

### Desktop Content Positions (9 options)

```
┌─────────────────────────────────────────────────────────┐
│ TOP-LEFT        TOP-CENTER        TOP-RIGHT             │
│ [Content]       [Content]                    [Content]  │
│                                                          │
│ MIDDLE-LEFT     MIDDLE-CENTER     MIDDLE-RIGHT          │
│ [Content]       [Content]                    [Content]  │
│                                                          │
│ BOTTOM-LEFT     BOTTOM-CENTER     BOTTOM-RIGHT          │
│ [Content]       [Content]                    [Content]  │
└─────────────────────────────────────────────────────────┘
```

---

## Banner Layout Examples

### Example 1: Full Width Banner with Centered Text

```
┌─────────────────────────────────────────────────────────┐
│                                                          │
│              [Background Image Full Width]              │
│                                                          │
│                    Welcome to Our Store                 │
│                Shop the Latest Collection               │
│                      [Shop Now Button]                  │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

**Code:**
```liquid
Desktop content position: middle-center
Desktop content alignment: center
Image height: medium
Show text box: Yes
```

### Example 2: Split Banner (Two Images)

```
┌──────────────────────┬──────────────────────┐
│                      │                      │
│   [Image 1]          │   [Image 2]          │
│                      │                      │
│   New Collection     │   Sale Items         │
│   [Shop Now]         │   [Shop Now]         │
│                      │                      │
└──────────────────────┴──────────────────────┘
```

**Code:**
```liquid
First image: [Upload Image 1]
Second image: [Upload Image 2]
Stack images on mobile: Yes
```

### Example 3: Banner with Dark Overlay

```
┌─────────────────────────────────────────────────────────┐
│                 [Background Image]                       │
│                 [30% Dark Overlay]                       │
│                                                          │
│                 Summer Collection 2025                   │
│                 Limited Time Offer                       │
│                 [Shop Now]                               │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

**Code:**
```liquid
Image overlay opacity: 30
Color scheme: Inverse (white text)
```

### Example 4: Left-Aligned Content Banner

```
┌─────────────────────────────────────────────────────────┐
│                                                          │
│  New Arrivals                                           │
│  Check out our latest                                   │
│  collection of products                                 │
│  [View Collection]                                      │
│                                                          │
│                           [Background Image]            │
└─────────────────────────────────────────────────────────┘
```

**Code:**
```liquid
Desktop content position: middle-left
Desktop content alignment: left
Show text box: Yes
```

---

## Code Structure Breakdown

### Header Logo Structure

```
<header class="header">
  │
  ├── Menu/Drawer
  │   └── [Hamburger Menu]
  │
  ├── Logo Section
  │   ├── <a> Link to homepage
  │   │   └── <div class="header__heading-logo-wrapper">
  │   │       └── <img> Logo Image
  │   │           OR
  │   │       └── <span> Shop Name (if no logo)
  │
  ├── Navigation Menu
  │   └── [Menu Items]
  │
  └── Icons Section
      ├── [Search Icon]
      ├── [Account Icon]
      └── [Cart Icon]
```

### Banner Structure

```
<div class="banner">
  │
  ├── Banner Media (Images)
  │   ├── <div class="banner__media">
  │   │   └── [First Image]
  │   └── <div class="banner__media"> (Optional)
  │       └── [Second Image]
  │
  └── Banner Content
      └── <div class="banner__content">
          └── <div class="banner__box">
              ├── [Heading Block]
              ├── [Text Block]
              └── [Buttons Block]
```

---

## File Relationship Diagram

```
Theme Files Structure
│
├── layout/theme.liquid
│   └── Includes {% sections 'header-group' %}
│
├── sections/header-group.json
│   ├── announcement-bar section
│   └── header section
│       └── Uses sections/header.liquid
│
├── sections/header.liquid
│   ├── Logo code (lines 150-224)
│   ├── CSS styles
│   ├── JavaScript for sticky header
│   └── Schema settings
│
├── sections/image-banner.liquid
│   ├── Banner HTML structure
│   ├── Dynamic styles
│   ├── Block rendering (heading, text, buttons)
│   └── Schema settings
│
└── assets/
    ├── section-image-banner.css
    └── base.css
```

---

## Common Use Cases

### Use Case 1: E-commerce Store Header

```
┌─────────────────────────────────────────────────────────┐
│ [LOGO]  Home  Shop  About  Contact     🔍  👤  🛒 (2)  │
└─────────────────────────────────────────────────────────┘
```

**Settings:**
- Logo position: middle-left
- Logo width: 180px
- Menu type: dropdown
- Show cart count: Yes

### Use Case 2: Promotional Banner

```
┌─────────────────────────────────────────────────────────┐
│                                                          │
│              50% OFF WINTER COLLECTION                   │
│                   Limited Time Only                      │
│                   [Shop Sale Items]                      │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

**Settings:**
- Image height: small
- Content position: middle-center
- Color scheme: Accent (bright colors)
- Buttons: 1 primary button

### Use Case 3: Brand Story Banner

```
┌─────────────────────────────────────────────────────────┐
│                                                          │
│  Our Story                           [Background        │
│  We've been crafting quality          Image on         │
│  products since 2020                   Right]          │
│  [Learn More]                                           │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

**Settings:**
- Content position: middle-left
- Content alignment: left
- Image: On right side
- Text box: Semi-transparent

---

## Responsive Behavior

### Desktop View (> 990px)

```
┌───────────────────────────────────────────────────────────┐
│ [LOGO]    Menu  Menu  Menu  Menu          🔍  👤  🛒    │
└───────────────────────────────────────────────────────────┘
│                                                            │
│                   [Full Width Banner]                      │
│                   Content in chosen position               │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### Tablet View (750px - 989px)

```
┌─────────────────────────────────────────┐
│ ☰  [LOGO]                    🔍  👤  🛒│
└─────────────────────────────────────────┘
│                                          │
│        [Banner Image]                    │
│        Content centered                  │
│                                          │
└──────────────────────────────────────────┘
```

### Mobile View (< 749px)

```
┌──────────────────────┐
│ ☰  [LOGO]        🛒 │
└──────────────────────┘
│                      │
│  [Banner Image]      │
│                      │
│  Heading             │
│  Text                │
│  [Button]            │
│                      │
└──────────────────────┘
```

---

## Color Scheme Examples

### Color Scheme Examples

| Scheme | Background | Text | Buttons | Effect |
|--------|-----------|------|---------|--------|
| Light Theme | White (#FFFFFF) | Dark Gray (#333333) | Primary Color | Clean, professional |
| Dark Theme | Dark Gray (#1A1A1A) | White (#FFFFFF) | Accent Color | Modern, bold |
| Branded Theme | Brand Color | Contrasting Color | Secondary Brand | Strong identity |

---

## Image Size Recommendations

### Logo Images

| Property | Recommendation |
|----------|----------------|
| Format | PNG or SVG (preferred) |
| Dimensions | 200-400px wide, auto height |
| File Size | < 100KB |
| Background | Transparent |
| Resolution | @2x for retina displays |

### Banner Images

| Property | Desktop | Mobile |
|----------|---------|--------|
| Format | JPG or WebP | JPG or WebP |
| Dimensions | 1920 x 800px | 750 x 1000px |
| File Size | < 500KB | < 300KB |
| Resolution | 72-96 DPI | 72-96 DPI |

---

## Testing Checklist

When adding a logo or banner, test:

```
☐ Desktop view (1920px wide)
☐ Laptop view (1366px wide)
☐ Tablet view (768px wide)
☐ Mobile view (375px wide)
☐ Logo appears correctly
☐ Logo is clickable and goes to homepage
☐ Banner image loads quickly
☐ Text is readable on banner
☐ Buttons are clickable
☐ Content doesn't overlap
☐ Sticky header works (if enabled)
☐ Cart icon updates correctly
☐ Search function works
```

---

## Quick Troubleshooting

### Logo Not Showing

```
1. Check: Is logo uploaded in Theme Settings?
   → Fix: Upload logo in Shopify Admin

2. Check: Is logo_width set too small?
   → Fix: Increase logo_width to at least 100px

3. Check: Is logo file corrupted?
   → Fix: Re-upload logo file
```

### Banner Not Showing

```
1. Check: Is image uploaded in section settings?
   → Fix: Upload image in Theme Customizer

2. Check: Is section added to page?
   → Fix: Add Image Banner section

3. Check: Is image height set to 0?
   → Fix: Set image height to small/medium/large
```

### Text Not Visible on Banner

```
1. Check: Content position conflict
   → Fix: Adjust content position

2. Check: Text color same as background
   → Fix: Change color scheme

3. Check: Overlay too dark/light
   → Fix: Adjust overlay opacity
```

---

## Additional Resources

- **Shopify Liquid Cheat Sheet**: https://www.shopify.com/partners/shopify-cheat-sheet
- **Image Optimization Tools**: TinyPNG, Squoosh, ImageOptim
- **Free Stock Photos**: Unsplash, Pexels
- **Logo Makers**: Canva, Looka, Hatchful

---

**Related Documentation:**
- [Complete Header Logo and Banner Guide](HEADER_LOGO_AND_BANNER_GUIDE.md)
- [Quick Code Reference](QUICK_CODE_REFERENCE.md)
