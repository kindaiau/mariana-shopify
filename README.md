# Mariana Mezic Artwork - Shopify Theme

A custom Shopify theme for marianamezic.com, designed for selling original artwork and prints.

## Theme Structure

This theme follows Shopify Online Store 2.0 architecture with the following structure:

```
mariana-shopify/
├── assets/          # CSS, JavaScript, and static files
├── config/          # Theme settings and configuration
├── layout/          # Main layout files
├── locales/         # Translation files
├── sections/        # Reusable sections
├── snippets/        # Reusable code snippets
└── templates/       # Page templates
```

## Features

- Clean, modern design optimized for artwork display
- Responsive layout for all devices
- Product gallery with image zoom
- Featured collection sections
- SEO-optimized meta tags
- Social media integration
- Customizable colors and typography
- Cart functionality

## Installation Instructions

### Option 1: Upload via Shopify Admin (Recommended)

1. **Package the theme:**
   ```bash
   # Create a ZIP file of the theme (exclude .git directory)
   zip -r mariana-mezic-theme.zip . -x "*.git*" "*.github*" "README.md"
   ```

2. **Upload to Shopify:**
   - Log in to your Shopify admin panel at `https://[your-store].myshopify.com/admin`
   - Navigate to **Online Store > Themes**
   - Scroll down to the **Theme Library** section
   - Click **Upload theme**
   - Select the `mariana-mezic-theme.zip` file
   - Click **Upload**

3. **Customize the theme:**
   - Once uploaded, click **Customize** on the theme
   - Configure your logo, colors, and content
   - Add your product collections

4. **Publish the theme:**
   - Click **Publish** to make it your live theme

### Option 2: Using Shopify CLI (For Developers)

1. **Install Shopify CLI:**
   ```bash
   npm install -g @shopify/cli @shopify/theme
   ```

2. **Login to Shopify:**
   ```bash
   shopify login --store your-store-name.myshopify.com
   ```

3. **Push the theme:**
   ```bash
   shopify theme push
   ```

4. **Or start a development server:**
   ```bash
   shopify theme dev
   ```

### Option 3: Using GitHub Integration

1. Connect your GitHub repository to Shopify:
   - In Shopify admin, go to **Online Store > Themes**
   - Click **Add theme** > **Connect from GitHub**
   - Authorize GitHub and select this repository
   - Shopify will automatically sync the theme

## Connecting to Shopify Store

### Prerequisites
- A Shopify store (you can create one at https://www.shopify.com)
- Store URL: `marianamezic.myshopify.com` (or your custom domain)

### Setup Steps

1. **Create/Access Your Shopify Store:**
   - If you don't have a store yet, sign up at https://www.shopify.com
   - Use the store name: `marianamezic` or your preferred name

2. **Upload Products:**
   - Go to **Products > Add product**
   - Upload artwork images
   - Add titles, descriptions, and prices
   - Organize into collections (e.g., "Featured", "Paintings", "Prints")

3. **Configure Navigation:**
   - Go to **Online Store > Navigation**
   - Create a main menu with links to your collections
   - Add links to About, Contact pages

4. **Set Up Payment Processing:**
   - Go to **Settings > Payments**
   - Enable Shopify Payments or other payment providers
   - Configure payment methods

5. **Configure Shipping:**
   - Go to **Settings > Shipping and delivery**
   - Set up shipping rates for artwork delivery

6. **Add Domain (Optional):**
   - Go to **Settings > Domains**
   - Connect marianamezic.com to your Shopify store

## Customization

### Theme Settings
Access theme customization through:
**Online Store > Themes > Customize**

Available settings:
- **Colors:** Primary, secondary, and accent colors
- **Typography:** Heading and body fonts
- **Layout:** Content width and spacing
- **Logo:** Upload your logo image
- **Social Links:** Instagram, Facebook, Twitter

### Homepage Configuration
The homepage includes:
- Hero banner with heading and call-to-action
- Featured collection section

To modify:
1. Click **Customize** on the theme
2. Edit sections on the homepage
3. Add or remove sections as needed

## Support

For issues or questions:
- Theme documentation: This README
- Shopify Help: https://help.shopify.com
- Shopify Community: https://community.shopify.com

## License

Custom theme for Mariana Mezic © 2024