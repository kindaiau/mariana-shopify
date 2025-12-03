# mariana-shopify

A Shopify theme for the Mariana store.

## Documentation

### Theme Customization Guides

- **[Header Logo and Banner Guide](HEADER_LOGO_AND_BANNER_GUIDE.md)** - Complete guide for customizing the header logo and banner sections with detailed code examples and Shopify admin instructions
- **[Quick Code Reference](QUICK_CODE_REFERENCE.md)** - Fast reference with essential code snippets for header logo and banner customization

## Quick Links

### For Non-Developers
If you want to customize the logo and banner without touching code:
1. Log into your Shopify admin
2. Go to **Online Store** → **Themes** → **Customize**
3. Follow the visual instructions in the [Header Logo and Banner Guide](HEADER_LOGO_AND_BANNER_GUIDE.md#how-to-edit-in-shopify)

### For Developers
If you need to edit the code directly:
- Header logo code: `sections/header.liquid`
- Banner code: `sections/image-banner.liquid`
- See [Quick Code Reference](QUICK_CODE_REFERENCE.md) for ready-to-use code snippets

## Theme Structure

```
mariana-shopify/
├── sections/          # Liquid section files
│   ├── header.liquid
│   └── image-banner.liquid
├── snippets/          # Reusable Liquid snippets
├── layout/            # Theme layout files
│   └── theme.liquid
├── assets/            # CSS, JS, and image files
├── templates/         # Page templates
└── locales/          # Translation files
```

## Support

For questions about customization, refer to the documentation guides above or consult the [Shopify Help Center](https://help.shopify.com).