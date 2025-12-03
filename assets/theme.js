// Mariana Mezic Artwork Theme - JavaScript

// Cart functionality
class CartManager {
  constructor() {
    this.init();
  }

  init() {
    // Add event listeners for cart actions
    document.addEventListener('DOMContentLoaded', () => {
      this.bindEvents();
    });
  }

  bindEvents() {
    // Add to cart buttons
    const addToCartBtns = document.querySelectorAll('[data-add-to-cart]');
    addToCartBtns.forEach(btn => {
      btn.addEventListener('click', (e) => this.addToCart(e));
    });
  }

  async addToCart(event) {
    event.preventDefault();
    const button = event.currentTarget;
    const form = button.closest('form');
    const formData = new FormData(form);

    try {
      const response = await fetch(window.routes.cart_add_url, {
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      
      if (response.ok) {
        this.updateCartCount(data);
        this.showNotification('Item added to cart');
      } else {
        this.showNotification(data.description || 'Error adding to cart', 'error');
      }
    } catch (error) {
      console.error('Error:', error);
      this.showNotification('Error adding to cart', 'error');
    }
  }

  updateCartCount(cartData) {
    const cartCountElement = document.querySelector('[data-cart-count]');
    if (cartCountElement) {
      cartCountElement.textContent = cartData.item_count;
    }
  }

  showNotification(message, type = 'success') {
    // Simple notification system
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.remove();
    }, 3000);
  }
}

// Image gallery functionality for product pages
class ImageGallery {
  constructor() {
    this.init();
  }

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      this.bindGallery();
    });
  }

  bindGallery() {
    const thumbnails = document.querySelectorAll('[data-thumbnail]');
    const mainImage = document.querySelector('[data-main-image]');

    thumbnails.forEach(thumb => {
      thumb.addEventListener('click', (e) => {
        e.preventDefault();
        const newSrc = thumb.getAttribute('data-full-image');
        if (mainImage && newSrc) {
          mainImage.src = newSrc;
        }
      });
    });
  }
}

// Initialize
const cart = new CartManager();
const gallery = new ImageGallery();

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', () => {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href !== '#' && href !== '#MainContent') {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});
