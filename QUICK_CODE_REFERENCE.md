# Quick Code Reference - Header Logo & Banner

This is a quick reference guide with essential code snippets you can copy and paste directly.

---

## Header Logo - Essential Code

### Basic Logo Display Code
Copy this to display a logo in your header:

```liquid
<a href="{{ routes.root_url }}" class="header__heading-link">
  {%- if settings.logo != blank -%}
    <div class="header__heading-logo-wrapper">
      {%- assign logo_alt = settings.logo.alt | default: shop.name | escape -%}
      {%- assign logo_height = settings.logo_width | divided_by: settings.logo.aspect_ratio -%}
      {{
        settings.logo
        | image_url: width: 600
        | image_tag:
          class: 'header__heading-logo',
          width: settings.logo_width,
          height: logo_height,
          alt: logo_alt
      }}
    </div>
  {%- else -%}
    <span class="h2">{{ shop.name }}</span>
  {%- endif -%}
</a>
```

### Custom Logo CSS

```css
/* Logo base styling */
.header__heading-logo {
  max-width: 200px;
  height: auto;
  display: block;
}

/* Logo wrapper */
.header__heading-logo-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Mobile logo */
@media screen and (max-width: 749px) {
  .header__heading-logo {
    max-width: 120px;
  }
}

/* Sticky header logo size */
.scrolled-past-header .header__heading-logo-wrapper {
  width: 75%;
  transition: width 0.3s ease;
}
```

---

## Banner - Essential Code

### Simple Banner with Image

```liquid
<div class="banner">
  {%- if section.settings.image != blank -%}
    <div class="banner__media">
      {{
        section.settings.image
        | image_url: width: 3840
        | image_tag:
          width: section.settings.image.width,
          loading: 'eager'
      }}
    </div>
  {%- endif -%}
  
  <div class="banner__content">
    <div class="banner__box">
      <h2 class="banner__heading">{{ block.settings.heading }}</h2>
      <p class="banner__text">{{ block.settings.text }}</p>
      
      {%- if block.settings.button_label != blank -%}
        <a href="{{ block.settings.button_link }}" class="button">
          {{ block.settings.button_label }}
        </a>
      {%- endif -%}
    </div>
  </div>
</div>
```

### Banner with Overlay

```liquid
<div class="banner banner--has-overlay">
  <div class="banner__media">
    <img src="{{ section.settings.image | image_url: width: 1920 }}" alt="Banner">
  </div>
  <div class="banner__overlay" style="opacity: 0.5;"></div>
  <div class="banner__content">
    <h1>Your Heading</h1>
    <p>Your text here</p>
  </div>
</div>
```

### Banner CSS

```css
/* Banner container */
.banner {
  position: relative;
  width: 100%;
  overflow: hidden;
}

/* Banner media */
.banner__media {
  width: 100%;
  height: auto;
}

.banner__media img {
  width: 100%;
  height: auto;
  display: block;
}

/* Banner overlay */
.banner__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
}

/* Banner content */
.banner__content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 2;
  width: 90%;
  max-width: 800px;
}

/* Banner heading */
.banner__heading {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

/* Banner text */
.banner__text {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

/* Responsive */
@media screen and (max-width: 749px) {
  .banner__heading {
    font-size: 2rem;
  }
  
  .banner__text {
    font-size: 1.2rem;
  }
}
```

---

## Common Customizations

### Change Logo Size

**In Liquid:**
```liquid
width: 250  {# Change from default 200 #}
```

**In CSS:**
```css
.header__heading-logo {
  max-width: 250px;  /* Adjust this value */
}
```

### Change Banner Height

```css
/* Fixed height banner */
.banner {
  height: 600px;
}

/* Small banner */
.banner--small {
  height: 400px;
}

/* Large banner */
.banner--large {
  height: 800px;
}

/* Full screen banner */
.banner--fullscreen {
  height: 100vh;
}
```

### Add Banner Hover Effect

```css
.banner__media img {
  transition: transform 0.5s ease;
}

.banner:hover .banner__media img {
  transform: scale(1.05);
}
```

### Center Logo Vertically

```css
.header__heading-logo-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80px;
}
```

---

## Schema Settings

### Logo Settings (Add to header.liquid schema)

```json
{
  "name": "Header",
  "settings": [
    {
      "type": "image_picker",
      "id": "logo",
      "label": "Logo image"
    },
    {
      "type": "range",
      "id": "logo_width",
      "min": 50,
      "max": 300,
      "step": 10,
      "unit": "px",
      "label": "Logo width",
      "default": 200
    }
  ]
}
```

### Banner Settings (Add to image-banner.liquid schema)

```json
{
  "name": "Image Banner",
  "settings": [
    {
      "type": "image_picker",
      "id": "image",
      "label": "Banner image"
    },
    {
      "type": "range",
      "id": "image_overlay_opacity",
      "min": 0,
      "max": 100,
      "step": 10,
      "unit": "%",
      "label": "Overlay opacity",
      "default": 30
    },
    {
      "type": "select",
      "id": "image_height",
      "label": "Banner height",
      "options": [
        {"value": "small", "label": "Small"},
        {"value": "medium", "label": "Medium"},
        {"value": "large", "label": "Large"}
      ],
      "default": "medium"
    }
  ],
  "blocks": [
    {
      "type": "heading",
      "name": "Heading",
      "settings": [
        {
          "type": "text",
          "id": "heading",
          "label": "Heading",
          "default": "Welcome to our store"
        }
      ]
    },
    {
      "type": "text",
      "name": "Text",
      "settings": [
        {
          "type": "textarea",
          "id": "text",
          "label": "Text",
          "default": "Shop our latest collection"
        }
      ]
    },
    {
      "type": "button",
      "name": "Button",
      "settings": [
        {
          "type": "text",
          "id": "button_label",
          "label": "Button label",
          "default": "Shop Now"
        },
        {
          "type": "url",
          "id": "button_link",
          "label": "Button link"
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "Image Banner",
      "blocks": [
        {"type": "heading"},
        {"type": "text"},
        {"type": "button"}
      ]
    }
  ]
}
```

---

## File Locations

| Component | File Path | Type |
|-----------|-----------|------|
| Header Logo | `sections/header.liquid` | Liquid |
| Banner | `sections/image-banner.liquid` | Liquid |
| Banner CSS | `assets/section-image-banner.css` | CSS |
| Base CSS | `assets/base.css` | CSS |

---

## How to Use This Code

### Method 1: Via Shopify Admin (No Code)
1. Go to **Online Store** → **Themes** → **Customize**
2. Use the visual editor to upload logo and banner images
3. No coding required!

### Method 2: Edit Code Files
1. Go to **Online Store** → **Themes** → **Actions** → **Edit code**
2. Navigate to the file you want to edit
3. Copy the code from this guide
4. Paste and modify as needed
5. Click **Save**

### Method 3: Add Custom CSS
1. In code editor, go to **Assets** → **base.css**
2. Scroll to bottom
3. Add custom CSS from this guide
4. Click **Save**

---

## Pro Tips

✅ **DO:**
- Always backup your theme before editing code
- Test changes in preview mode first
- Optimize images before uploading (use TinyPNG or similar)
- Use SVG for logos when possible
- Keep file sizes small for faster loading

❌ **DON'T:**
- Make changes directly to live theme (duplicate first)
- Upload huge unoptimized images
- Delete code you don't understand
- Forget to save your changes

---

## Need Help?

- **Can't find the file?** Files are in `sections/` and `assets/` folders
- **Code not working?** Check for syntax errors (missing brackets, quotes)
- **Image not showing?** Verify the image is uploaded in Shopify admin
- **Changes not visible?** Clear browser cache and refresh

---

**Quick Links:**
- [Full Documentation](HEADER_LOGO_AND_BANNER_GUIDE.md)
- [Shopify Liquid Documentation](https://shopify.dev/docs/api/liquid)
- [Shopify Theme Development](https://shopify.dev/docs/themes)
