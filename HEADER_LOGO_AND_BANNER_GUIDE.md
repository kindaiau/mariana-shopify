# Header Logo and Banner Customization Guide

This guide provides complete code snippets and instructions for customizing the header logo and banner in your Shopify theme.

## Table of Contents
- [Header Logo](#header-logo)
- [Banner (Image Banner)](#banner-image-banner)
- [How to Edit in Shopify](#how-to-edit-in-shopify)

---

## Header Logo

### Where the Logo Code Lives
The header logo code is located in: `sections/header.liquid`

### Current Logo Implementation

The logo is displayed using Shopify's theme settings. Here's the relevant code from `sections/header.liquid`:

**For Non-Middle-Center Position (Lines 150-181):**
```liquid
{%- if section.settings.logo_position != 'middle-center' -%}
  {%- if request.page_type == 'index' -%}
    <h1 class="header__heading">
  {%- endif -%}
  <a href="{{ routes.root_url }}" class="header__heading-link link link--text focus-inset">
    {%- if settings.logo != blank -%}
      <div class="header__heading-logo-wrapper">
        {%- assign logo_alt = settings.logo.alt | default: shop.name | escape -%}
        {%- assign logo_height = settings.logo_width | divided_by: settings.logo.aspect_ratio -%}
        {% capture sizes %}(max-width: {{ settings.logo_width | times: 2 }}px) 50vw, {{ settings.logo_width }}px{% endcapture %}
        {% capture widths %}{{ settings.logo_width }}, {{ settings.logo_width | times: 1.5 | round }}, {{ settings.logo_width | times: 2 }}{% endcapture %}
        {{
          settings.logo
          | image_url: width: 600
          | image_tag:
            class: 'header__heading-logo motion-reduce',
            widths: widths,
            height: logo_height,
            width: settings.logo_width,
            alt: logo_alt,
            sizes: sizes,
            preload: true
        }}
      </div>
    {%- else -%}
      <span class="h2">{{ shop.name }}</span>
    {%- endif -%}
  </a>
  {%- if request.page_type == 'index' -%}
    </h1>
  {%- endif -%}
{%- endif -%}
```

**For Middle-Center Position (Lines 193-224):**
```liquid
{%- if section.settings.logo_position == 'middle-center' -%}
  {%- if request.page_type == 'index' -%}
    <h1 class="header__heading">
  {%- endif -%}
  <a href="{{ routes.root_url }}" class="header__heading-link link link--text focus-inset">
    {%- if settings.logo != blank -%}
      <div class="header__heading-logo-wrapper">
        {%- assign logo_alt = settings.logo.alt | default: shop.name | escape -%}
        {%- assign logo_height = settings.logo_width | divided_by: settings.logo.aspect_ratio -%}
        {% capture sizes %}(min-width: 750px) {{ settings.logo_width }}px, 50vw{% endcapture %}
        {% capture widths %}{{ settings.logo_width }}, {{ settings.logo_width | times: 1.5 | round }}, {{ settings.logo_width | times: 2 }}{% endcapture %}
        {{
          settings.logo
          | image_url: width: 600
          | image_tag:
            class: 'header__heading-logo',
            widths: widths,
            height: logo_height,
            width: settings.logo_width,
            alt: logo_alt,
            sizes: sizes,
            preload: true
        }}
      </div>
    {%- else -%}
      <span class="h2">{{ shop.name }}</span>
    {%- endif -%}
  </a>
  {%- if request.page_type == 'index' -%}
    </h1>
  {%- endif -%}
{%- endif -%}
```

### Logo Customization Options

The logo can be customized through the schema settings at the bottom of `sections/header.liquid`:

**Logo Position Setting:**
```json
{
  "type": "select",
  "id": "logo_position",
  "options": [
    {
      "value": "top-left",
      "label": "Top left"
    },
    {
      "value": "top-center",
      "label": "Top center"
    },
    {
      "value": "middle-left",
      "label": "Middle left"
    },
    {
      "value": "middle-center",
      "label": "Middle center"
    }
  ],
  "default": "middle-left",
  "label": "Desktop logo position"
}
```

**Mobile Logo Position Setting:**
```json
{
  "type": "select",
  "id": "mobile_logo_position",
  "options": [
    {
      "value": "center",
      "label": "Center"
    },
    {
      "value": "left",
      "label": "Left"
    }
  ],
  "default": "center",
  "label": "Mobile logo position"
}
```

### Additional Logo Styling

To add custom CSS for your logo, you can add styles in the `<style>` section at the top of `sections/header.liquid` or in a custom CSS file:

```css
/* Custom logo styling example */
.header__heading-logo {
  max-width: 200px;
  height: auto;
}

.header__heading-logo-wrapper {
  display: flex;
  align-items: center;
}

/* Mobile responsive logo */
@media screen and (max-width: 749px) {
  .header__heading-logo {
    max-width: 150px;
  }
}

/* Logo on scroll - reduced size */
.scrolled-past-header .header__heading-logo-wrapper {
  width: 75%;
}
```

---

## Banner (Image Banner)

### Where the Banner Code Lives
The banner code is located in: `sections/image-banner.liquid`

### Current Banner Implementation

The complete banner section code from `sections/image-banner.liquid`:

```liquid
{{ 'section-image-banner.css' | asset_url | stylesheet_tag }}

{%- if section.settings.image_height == 'adapt' and section.settings.image != blank -%}
  {%- style -%}
    @media screen and (max-width: 749px) {
      #Banner-{{ section.id }}::before,
      #Banner-{{ section.id }} .banner__media::before,
      #Banner-{{ section.id }}:not(.banner--mobile-bottom) .banner__content::before {
        padding-bottom: {{ 1 | divided_by: section.settings.image.aspect_ratio | times: 100 }}%;
        content: '';
        display: block;
      }
    }

    @media screen and (min-width: 750px) {
      #Banner-{{ section.id }}::before,
      #Banner-{{ section.id }} .banner__media::before {
        padding-bottom: {{ 1 | divided_by: section.settings.image.aspect_ratio | times: 100 }}%;
        content: '';
        display: block;
      }
    }
  {%- endstyle -%}
{%- endif -%}

{%- style -%}
  #Banner-{{ section.id }}::after {
    opacity: {{ section.settings.image_overlay_opacity | divided_by: 100.0 }};
  }
{%- endstyle -%}

{%- liquid
  assign full_width = '100vw'
  assign widths = '375, 550, 750, 1100, 1500, 1780, 2000, 3000, 3840'

  if section.settings.image_behavior == 'ambient'
    assign half_width = '60vw'
    assign full_width = '120vw'
    assign stacked_sizes = '(min-width: 750px) 60vw, 120vw'
    assign widths = '450, 660, 900, 1320, 1800, 2136, 2400, 3600, 7680'
  elsif section.settings.image_behavior == 'fixed' or section.settings.image_behavior == 'zoom-in'
    assign half_width = '100vw'
    assign stacked_sizes = '100vw'
  else
    assign half_width = '50vw'
    assign stacked_sizes = '(min-width: 750px) 50vw, 100vw'
  endif
  assign fetch_priority = 'auto'
  if section.index == 1
    assign fetch_priority = 'high'
  endif
-%}

<div
  id="Banner-{{ section.id }}"
  class="banner banner--content-align-{{ section.settings.desktop_content_alignment }} banner--content-align-mobile-{{ section.settings.mobile_content_alignment }} banner--{{ section.settings.image_height }}{% if section.settings.stack_images_on_mobile and section.settings.image != blank and section.settings.image_2 != blank %} banner--stacked{% endif %}{% if section.settings.image_height == 'adapt' and section.settings.image != blank %} banner--adapt{% endif %}{% if section.settings.show_text_below %} banner--mobile-bottom{%- endif -%}{% if section.settings.show_text_box == false %} banner--desktop-transparent{% endif %}{% if settings.animations_reveal_on_scroll %} scroll-trigger animate--fade-in{% endif %}"
>
  {%- if section.settings.image != blank -%}
    <div class="banner__media media{% if section.settings.image == blank and section.settings.image_2 == blank %} placeholder{% endif %}{% if section.settings.image_2 != blank %} banner__media-half{% endif %}{% if section.settings.image_behavior != 'none' %} animate--{{ section.settings.image_behavior }}{% endif %}{% if settings.animations_reveal_on_scroll %} scroll-trigger animate--fade-in{% endif %}">
      {%- liquid
        assign image_height = section.settings.image.width | divided_by: section.settings.image.aspect_ratio
        if section.settings.image_2 != blank
          assign image_class = 'banner__media-image-half'
        endif
        if section.settings.image_2 != blank and section.settings.stack_images_on_mobile
          assign sizes = stacked_sizes
        elsif section.settings.image_2 != blank
          assign sizes = half_width
        else
          assign sizes = full_width
        endif
      -%}
      {{
        section.settings.image
        | image_url: width: 3840
        | image_tag:
          width: section.settings.image.width,
          height: image_height,
          class: image_class,
          sizes: sizes,
          widths: widths,
          fetchpriority: fetch_priority
      }}
    </div>
  {%- elsif section.settings.image_2 == blank -%}
    <div class="banner__media media{% if section.settings.image == blank and section.settings.image_2 == blank %} placeholder{% endif %}{% if section.settings.image_2 != blank %} banner__media-half{% endif %}{% if section.settings.image_behavior != 'none' %} animate--{{ section.settings.image_behavior }}{% endif %}{% if settings.animations_reveal_on_scroll %} scroll-trigger animate--fade-in{% endif %}">
      {{ 'hero-apparel-1' | placeholder_svg_tag: 'placeholder-svg' }}
    </div>
  {%- endif -%}
  {%- if section.settings.image_2 != blank -%}
    <div class="banner__media media{% if section.settings.image != blank %} banner__media-half{% endif %}{% if section.settings.image_behavior != 'none' %} animate--{{ section.settings.image_behavior }}{% endif %}{% if settings.animations_reveal_on_scroll %} scroll-trigger animate--fade-in{% endif %}">
      {%- liquid
        assign image_height_2 = section.settings.image_2.width | divided_by: section.settings.image_2.aspect_ratio
        if section.settings.image != blank
          assign image_class_2 = 'banner__media-image-half'
        endif
        if section.settings.image != blank and section.settings.stack_images_on_mobile
          assign sizes = stacked_sizes
        elsif section.settings.image_2 != blank
          assign sizes = half_width
        else
          assign sizes = full_width
        endif
      -%}
      {{
        section.settings.image_2
        | image_url: width: 3840
        | image_tag:
          width: section.settings.image_2.width,
          height: image_height_2,
          class: image_class_2,
          sizes: sizes,
          widths: widths,
          fetchpriority: fetch_priority
      }}
    </div>
  {%- endif -%}
  <div class="banner__content banner__content--{{ section.settings.desktop_content_position }} page-width{% if settings.animations_reveal_on_scroll %} scroll-trigger animate--slide-in{% endif %}">
    <div class="banner__box content-container content-container--full-width-mobile color-{{ section.settings.color_scheme }} gradient">
      {%- for block in section.blocks -%}
        {%- case block.type -%}
          {%- when 'heading' -%}
            <h2
              class="banner__heading inline-richtext {{ block.settings.heading_size }}"
              {{ block.shopify_attributes }}
            >
              {{ block.settings.heading }}
            </h2>
          {%- when 'text' -%}
            <div class="banner__text rte {{ block.settings.text_style }}" {{ block.shopify_attributes }}>
              <p>{{ block.settings.text }}</p>
            </div>
          {%- when 'buttons' -%}
            <div
              class="banner__buttons{% if block.settings.button_label_1 != blank and block.settings.button_label_2 != blank %} banner__buttons--multiple{% endif %}"
              {{ block.shopify_attributes }}
            >
              {%- if block.settings.button_label_1 != blank -%}
                <a
                  {% if block.settings.button_link_1 == blank %}
                    role="link" aria-disabled="true"
                  {% else %}
                    href="{{ block.settings.button_link_1 }}"
                  {% endif %}
                  class="button{% if block.settings.button_style_secondary_1 %} button--secondary{% else %} button--primary{% endif %}"
                >
                  {{- block.settings.button_label_1 | escape -}}
                </a>
              {%- endif -%}
              {%- if block.settings.button_label_2 != blank -%}
                <a
                  {% if block.settings.button_link_2 == blank %}
                    role="link" aria-disabled="true"
                  {% else %}
                    href="{{ block.settings.button_link_2 }}"
                  {% endif %}
                  class="button{% if block.settings.button_style_secondary_2 %} button--secondary{% else %} button--primary{% endif %}"
                >
                  {{- block.settings.button_label_2 | escape -}}
                </a>
              {%- endif -%}
            </div>
        {%- endcase -%}
      {%- endfor -%}
    </div>
  </div>
</div>
```

### Banner Customization Options

The banner has extensive customization options through its schema settings. Here are the key settings:

**Image Settings:**
```json
{
  "type": "image_picker",
  "id": "image",
  "label": "First image"
},
{
  "type": "image_picker",
  "id": "image_2",
  "label": "Second image"
},
{
  "type": "range",
  "id": "image_overlay_opacity",
  "min": 0,
  "max": 100,
  "step": 10,
  "unit": "%",
  "label": "Image overlay opacity",
  "default": 0
}
```

**Height Settings:**
```json
{
  "type": "select",
  "id": "image_height",
  "options": [
    {
      "value": "adapt",
      "label": "Adapt to image"
    },
    {
      "value": "small",
      "label": "Small"
    },
    {
      "value": "medium",
      "label": "Medium"
    },
    {
      "value": "large",
      "label": "Large"
    }
  ],
  "default": "medium",
  "label": "Image height"
}
```

**Animation Settings:**
```json
{
  "type": "select",
  "id": "image_behavior",
  "options": [
    {
      "value": "none",
      "label": "None"
    },
    {
      "value": "ambient",
      "label": "Ambient movement"
    },
    {
      "value": "fixed",
      "label": "Fixed"
    },
    {
      "value": "zoom-in",
      "label": "Zoom in"
    }
  ],
  "default": "none",
  "label": "Image behavior"
}
```

**Content Position Settings:**
```json
{
  "type": "select",
  "id": "desktop_content_position",
  "options": [
    {"value": "top-left", "label": "Top left"},
    {"value": "top-center", "label": "Top center"},
    {"value": "top-right", "label": "Top right"},
    {"value": "middle-left", "label": "Middle left"},
    {"value": "middle-center", "label": "Middle center"},
    {"value": "middle-right", "label": "Middle right"},
    {"value": "bottom-left", "label": "Bottom left"},
    {"value": "bottom-center", "label": "Bottom center"},
    {"value": "bottom-right", "label": "Bottom right"}
  ],
  "default": "middle-center",
  "label": "Desktop content position"
}
```

### Banner Block Types

The banner supports three types of content blocks:

**1. Heading Block:**
```liquid
{%- when 'heading' -%}
  <h2
    class="banner__heading inline-richtext {{ block.settings.heading_size }}"
    {{ block.shopify_attributes }}
  >
    {{ block.settings.heading }}
  </h2>
```

**2. Text Block:**
```liquid
{%- when 'text' -%}
  <div class="banner__text rte {{ block.settings.text_style }}" {{ block.shopify_attributes }}>
    <p>{{ block.settings.text }}</p>
  </div>
```

**3. Buttons Block:**
```liquid
{%- when 'buttons' -%}
  <div class="banner__buttons{% if block.settings.button_label_1 != blank and block.settings.button_label_2 != blank %} banner__buttons--multiple{% endif %}" {{ block.shopify_attributes }}>
    {%- if block.settings.button_label_1 != blank -%}
      <a href="{{ block.settings.button_link_1 }}" class="button{% if block.settings.button_style_secondary_1 %} button--secondary{% else %} button--primary{% endif %}">
        {{- block.settings.button_label_1 | escape -}}
      </a>
    {%- endif -%}
    {%- if block.settings.button_label_2 != blank -%}
      <a href="{{ block.settings.button_link_2 }}" class="button{% if block.settings.button_style_secondary_2 %} button--secondary{% else %} button--primary{% endif %}">
        {{- block.settings.button_label_2 | escape -}}
      </a>
    {%- endif -%}
  </div>
```

---

## How to Edit in Shopify

### Editing the Header Logo via Shopify Theme Editor

1. **Log in to your Shopify Admin Panel**
   - Go to `https://your-store.myshopify.com/admin`

2. **Navigate to Theme Customization**
   - Click on **Online Store** → **Themes**
   - Click **Customize** on your active theme

3. **Upload Your Logo**
   - In the left sidebar, click on **Theme settings** (at the bottom)
   - Click on **Logo**
   - Click **Select image** or **Explore**
   - Upload your logo image (recommended: PNG or SVG format with transparent background)
   - Set the **Logo width** (in pixels)

4. **Configure Logo Position**
   - In the theme customizer, click on the **Header** section at the top
   - Under **Desktop logo position**, select:
     - Top left
     - Top center
     - Middle left
     - Middle center
   - Under **Mobile logo position**, select:
     - Center
     - Left

5. **Save Your Changes**
   - Click **Save** in the top right corner

### Editing the Banner via Shopify Theme Editor

1. **Navigate to Your Homepage**
   - In the theme customizer, make sure you're on the homepage

2. **Add or Edit Image Banner Section**
   - Click **Add section** if you don't have a banner
   - Select **Image banner** from the list
   - Or click on an existing **Image banner** section

3. **Upload Banner Images**
   - Click on **First image** and upload your banner image
   - Optionally, add a **Second image** for a split banner effect
   - Set the **Image overlay opacity** (0-100%) for a darkening effect

4. **Configure Banner Settings**
   - **Image height**: Choose from Adapt to image, Small, Medium, or Large
   - **Image behavior**: Select animation style (None, Ambient movement, Fixed, Zoom in)
   - **Desktop content position**: Choose where text appears (9 positions available)
   - **Desktop content alignment**: Left, Center, or Right
   - **Color scheme**: Select from your theme's color schemes

5. **Add Content Blocks**
   - Click **Add block** within the banner section
   - Choose from:
     - **Heading**: Add a main title
     - **Text**: Add descriptive text
     - **Buttons**: Add call-to-action buttons (up to 2)

6. **Configure Each Block**
   - For **Heading**: Enter text and select size (H2, H1, H0, HXL, HXXL)
   - For **Text**: Enter text and select style (Body, Subtitle, Caption)
   - For **Buttons**: 
     - Enter button label
     - Add button link
     - Choose button style (Primary or Secondary)

7. **Mobile Settings**
   - Toggle **Stack images on mobile** for better mobile display
   - Select **Mobile content alignment**
   - Toggle **Show text below image** for mobile

8. **Save Your Changes**
   - Click **Save** in the top right corner

### Editing Code Files Directly in Shopify

If you need to edit the actual code files:

1. **Access the Code Editor**
   - Go to **Online Store** → **Themes**
   - Click the **Actions** dropdown on your theme
   - Select **Edit code**

2. **Edit Header Logo Code**
   - Navigate to **Sections** → **header.liquid**
   - Make your changes
   - Click **Save**

3. **Edit Banner Code**
   - Navigate to **Sections** → **image-banner.liquid**
   - Make your changes
   - Click **Save**

4. **Edit Styles**
   - Navigate to **Assets** → **section-image-banner.css** (for banner styles)
   - Or add custom CSS in **Assets** → **base.css**

### Best Practices

1. **Logo Image**
   - Use PNG or SVG format
   - Recommended size: 200-400px wide
   - Use transparent background
   - Optimize file size (under 100KB)

2. **Banner Image**
   - Recommended size: 1920x800px (desktop)
   - Use high-quality images (but optimized for web)
   - Consider mobile display (stack or split)
   - File size: under 500KB for best performance

3. **Testing**
   - Always preview changes before saving
   - Test on both desktop and mobile
   - Check loading speed with large images

4. **Backup**
   - Before making code changes, duplicate your theme
   - Keep a backup of your original logo and banner images

---

## Quick Reference

### Logo File Location
- Code: `sections/header.liquid`
- Upload via: Shopify Admin → Theme Settings → Logo

### Banner File Location
- Code: `sections/image-banner.liquid`
- CSS: `assets/section-image-banner.css`
- Add via: Theme Customizer → Add Section → Image Banner

### Common Customizations

**Change logo size in code:**
```liquid
width: settings.logo_width  {# Change this value #}
```

**Change banner overlay:**
```liquid
opacity: {{ section.settings.image_overlay_opacity | divided_by: 100.0 }};
```

**Modify banner height classes:**
```css
.banner--small { height: 28rem; }
.banner--medium { height: 34rem; }
.banner--large { height: 42rem; }
```

---

## Support

For additional help:
- Shopify Help Center: https://help.shopify.com
- Theme Documentation: Check your theme's documentation
- Community Forums: https://community.shopify.com

---

**Last Updated:** December 3, 2024
