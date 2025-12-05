# Quick Reference - Mariana Design Changes

## 🎯 What Changed

### ❌ BEFORE (Problems)
- **Announcement Bar**: Cluttered, generic Shopify styling
- **Header**: Cramped spacing (20px padding), logo feels squeezed
- **Homepage**: No hero section, products look like ecommerce
- **Overall Feel**: Budget online shop

### ✅ AFTER (Solutions)
- **Announcement Bar**: Minimal, elegant, gallery-worthy
- **Header**: Generous breathing room (32px padding), refined logo
- **Homepage**: Stunning hero gallery, art-first product cards
- **Overall Feel**: Premium art gallery

---

## 📊 Design Comparison

### Announcement Bar

**BEFORE:**
```
Simple text in basic styling
Border and spacing feels cramped
Generic Shopify appearance
```

**AFTER:**
```
UPPERCASE TEXT WITH GENEROUS SPACING 🎄
Subtle 8% opacity border
Clean, minimal, premium feel
1.2rem padding top/bottom
Smooth hover opacity effect
```

### Header

**BEFORE:**
```css
padding: 20px;
logo: compressed
menu: tight spacing
hover: basic underline
```

**AFTER:**
```css
padding: 32px; (60% more space!)
logo: 5.5rem height with room to breathe
menu: 1.6rem spacing between items
hover: elegant 65% opacity fade
```

### Product Cards

**BEFORE:**
```
- Generic grid layout
- Basic product images
- Minimal spacing
- Standard hover
```

**AFTER:**
```
- Gallery-style presentation
- Square aspect ratio
- 6rem gaps (generous!)
- Lift on hover + scale image
- Sold/New badges
- Center-aligned with elegant typography
```

---

## 🎨 Typography Scale

```
Hero Heading:      72px (desktop) → 48px (mobile)
Section Heading:   42px (desktop) → 32px (mobile)
Product Title:     18px
Body Text:         16px
Announcement:      13px (uppercase, spaced)
```

All with:
- Generous line-height (1.6-1.7)
- Reduced letter-spacing for headings (-0.01em to -0.02em)
- Increased letter-spacing for UI text (0.08rem)

---

## 📐 Spacing System

```
Mobile Padding:     2rem (20px)
Desktop Padding:    3rem (30px)
Section Padding:    8rem top/bottom (desktop)
Grid Gaps:          6rem (desktop), 4rem (mobile)
Button Padding:     1.6rem vertical, 4rem horizontal
```

---

## 🎯 Tuesday Launch Checklist

### 30 Minutes Before Launch:
- [ ] Upload hero image (2000px width)
- [ ] Upload 3-4 product images (1200px square)
- [ ] Update announcement bar text with exact time
- [ ] Test all links work
- [ ] Check mobile on real phone

### At Launch Time (8PM Tuesday):
- [ ] Change announcement to "Available Now" or "Shop Collection"
- [ ] Post to Instagram with link
- [ ] Send email if you have collector list

### Day After:
- [ ] Monitor which pieces sell first
- [ ] Update announcement bar to show what's left
- [ ] Consider adding "Only X remaining" to product pages

---

## 🔧 Quick Customization

### Change Announcement Text:
Theme Customizer → Mariana Announcement Bar section → Edit text

### Change Hero Image:
Theme Customizer → Mariana Hero Gallery → Upload new image

### Adjust Product Count:
Theme Customizer → Mariana Featured Collection → Products to show

### Modify Colors:
Each section has color settings in the customizer

---

## 💡 Pro Tips

1. **For hero images**: Use photos with negative space for text overlay
2. **For product images**: Consistent lighting across all pieces
3. **For mobile**: Hero looks best with content at bottom or center
4. **For collection**: Show 3-4 pieces max to feel curated, not cluttered

---

## 🚨 Common Issues & Fixes

**Issue**: CSS not loading
**Fix**: Hard refresh browser (Cmd+Shift+R)

**Issue**: Sections not showing up
**Fix**: Make sure you saved in theme customizer

**Issue**: Images look blurry
**Fix**: Upload at least 1200px width

**Issue**: Text hard to read on hero
**Fix**: Increase overlay opacity in section settings

**Issue**: Mobile looks broken
**Fix**: Use Shopify mobile preview, not browser resize

---

## 📱 Mobile-First Approach

Everything scales automatically:
- Grid: 3 cols → 2 cols → 1 col
- Hero height: 75vh → 60vh
- Text sizes: Proportional reduction
- Padding: Auto-adjusted
- Buttons: Full width on small screens

Test on real phone before launch!

---

## 🎨 Color Psychology for Art Sales

**White/Cream backgrounds** = Premium, gallery, lets art stand out
**Generous spacing** = Luxury, exclusive, curated
**Minimal text** = Confident, art speaks for itself
**Soft hover effects** = Sophisticated, not gimmicky
**Clean typography** = Professional, trustworthy

You're selling one-of-a-kind art, not mass-produced items.
The design should reflect that exclusivity.

---

## Next Level (Future Enhancements)

After Christmas launch success:
- [ ] Add "Artist Statement" rich text section
- [ ] Create custom product page template
- [ ] Add collection story sections
- [ ] Implement Instagram feed section
- [ ] Add email collector signup form
- [ ] Create "About the Artist" page
- [ ] Add testimonial slider
- [ ] Implement "Recently Viewed" products

---

*Keep it simple. Keep it elegant. Let the art be the hero.*
