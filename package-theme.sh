#!/bin/bash

# Create Shopify theme package for upload

echo "Creating Shopify theme package..."

# Create package excluding git and unnecessary files
zip -r mariana-mezic-theme.zip \
  assets \
  config \
  layout \
  locales \
  sections \
  snippets \
  templates \
  -x "*.git*" "*.DS_Store" "*.zip"

echo "✅ Theme package created: mariana-mezic-theme.zip"
echo ""
echo "📦 Next steps:"
echo "1. Log in to your Shopify admin at https://[your-store].myshopify.com/admin"
echo "2. Navigate to Online Store > Themes"
echo "3. Click 'Upload theme'"
echo "4. Select the file: mariana-mezic-theme.zip"
echo "5. Click 'Upload'"
echo "6. Customize and publish your theme"
echo ""
