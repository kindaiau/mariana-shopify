# Quick Start Guide: Upload Theme to Shopify

This guide will help you upload the Mariana Mezic artwork theme to your Shopify store.

## Prerequisites

✅ A Shopify store account  
✅ Access to your Shopify admin panel  
✅ This theme package  

If you don't have a Shopify store yet:
1. Go to https://www.shopify.com
2. Click "Start free trial"
3. Follow the setup process

---

## Method 1: Upload via Admin Panel (Easiest)

### Step 1: Create the Theme Package

On your computer, run the packaging script:

```bash
./package-theme.sh
```

Or manually create a ZIP file containing these folders:
- assets/
- config/
- layout/
- locales/
- sections/
- snippets/
- templates/

**Important:** Do NOT include the .git folder or .github folder in the ZIP.

### Step 2: Upload to Shopify

1. **Login to Shopify Admin**
   - Go to: `https://[your-store-name].myshopify.com/admin`
   - Replace `[your-store-name]` with your actual store name

2. **Navigate to Themes**
   - Click **Online Store** in the left sidebar
   - Click **Themes**

3. **Upload the Theme**
   - Scroll down to the **Theme Library** section
   - Click **Upload theme**
   - Click **Choose File** and select `mariana-mezic-theme.zip`
   - Click **Upload**
   - Wait for the upload to complete (usually 30-60 seconds)

4. **Preview the Theme** (Optional)
   - Once uploaded, you'll see the theme in your Theme Library
   - Click **Customize** to preview and edit
   - Or click **Preview** to see it without making it live

5. **Publish the Theme**
   - When you're ready to make it live, click **Publish**
   - Confirm the action

### Step 3: Customize Your Theme

1. Click **Customize** on the published theme
2. Upload your logo (if you have one)
3. Set your brand colors
4. Configure the homepage sections
5. Click **Save** in the top right

---

## Method 2: Using Shopify CLI (For Developers)

If you're comfortable with command line tools:

### Install Shopify CLI

```bash
npm install -g @shopify/cli @shopify/theme
```

### Connect to Your Store

```bash
shopify login --store your-store-name.myshopify.com
```

### Push the Theme

From the theme directory:

```bash
shopify theme push
```

Or start a development server:

```bash
shopify theme dev
```

---

## After Upload: Essential Setup

### 1. Add Your Products

**Products > Add product**
- Upload high-quality images of your artwork
- Add descriptive titles
- Write compelling descriptions
- Set prices
- Add to collections (e.g., "Paintings", "Prints", "Featured")

### 2. Create Collections

**Products > Collections**
- Create "Featured Artwork" collection
- Create collections by medium (Paintings, Prints, etc.)
- Create collections by theme or series

### 3. Set Up Navigation

**Online Store > Navigation**
- Edit the Main menu
- Add links to your collections
- Add About and Contact pages

### 4. Configure Payment Methods

**Settings > Payments**
- Enable Shopify Payments (recommended)
- Or add alternative payment providers
- Set up tax settings

### 5. Set Up Shipping

**Settings > Shipping and delivery**
- Add shipping zones
- Set shipping rates
- Consider offering free shipping for local pickup

### 6. Connect Your Domain (Optional)

**Settings > Domains**
- Add marianamezic.com
- Follow instructions to connect your domain
- Or use the free myshopify.com domain

### 7. Add Legal Pages

**Settings > Policies**
- Add Privacy Policy
- Add Refund Policy
- Add Terms of Service
- Add Shipping Policy

---

## Theme Customization Options

Access via **Online Store > Themes > Customize**

### Available Settings:

**Colors**
- Primary color (default: black)
- Secondary color (default: white)
- Accent color (default: gold #c4a57b)

**Typography**
- Heading font
- Body font

**Layout**
- Content width (1000-1600px)

**Header**
- Logo image
- Navigation menu

**Footer**
- Footer text
- Social media links (Instagram, Facebook, Twitter)
- Payment icons

**Homepage Sections**
- Hero banner (heading, subheading, button)
- Featured collection

---

## Troubleshooting

### Theme Upload Failed
- Make sure the ZIP file includes the required folders
- Check that file names don't contain special characters
- Ensure the ZIP file is under 50MB

### Theme Looks Broken
- Clear your browser cache
- Make sure you've published the theme (not just uploaded it)
- Check that you've added at least one product and collection

### Products Not Showing
- Verify products are published (not draft)
- Check that products are assigned to collections
- In theme customization, select the correct collection for the featured section

### Need Help?
- Shopify Help Center: https://help.shopify.com
- Shopify Community Forums: https://community.shopify.com
- Theme documentation: See README.md in this repository

---

## Next Steps After Setup

1. ✅ Add all your artwork products
2. ✅ Configure payment and shipping
3. ✅ Connect your domain
4. ✅ Test the checkout process
5. ✅ Set up Google Analytics (Settings > Analytics)
6. ✅ Add your social media links
7. ✅ Create an About page
8. ✅ Set up email notifications (Settings > Notifications)
9. ✅ Launch and share with the world!

---

## Support

For questions about:
- **Shopify platform:** https://help.shopify.com
- **This theme:** See README.md or create an issue in the repository

Good luck with your artwork store! 🎨
