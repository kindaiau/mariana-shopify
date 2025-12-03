/**
 * Animation utilities for scroll reveal and other effects
 */

const ANIMATION_CLASSES = {
  SHOW: 'animate--show',
  FADE_IN: 'animate--fade-in',
  SLIDE_IN: 'animate--slide-in',
};

const DEFAULT_OPTIONS = {
  threshold: 0,
  rootMargin: '0px 0px -50px 0px',
};

class ScrollShow {
  constructor() {
    this.elements = document.querySelectorAll('.scroll-trigger');
    
    if (this.elements.length === 0) return;
    
    if ('IntersectionObserver' in window) {
      this.init();
    } else {
      // Fallback for browsers that don't support IntersectionObserver
      this.showAll();
    }
  }

  init() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.show(entry.target);
        }
      });
    }, DEFAULT_OPTIONS);

    this.elements.forEach((element) => {
      this.observer.observe(element);
    });
  }

  show(element) {
    element.classList.add(ANIMATION_CLASSES.SHOW);
    
    // Stop observing once the element is shown
    if (this.observer) {
      this.observer.unobserve(element);
    }
  }

  showAll() {
    this.elements.forEach((element) => {
      element.classList.add(ANIMATION_CLASSES.SHOW);
    });
  }
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new ScrollShow();
  });
} else {
  new ScrollShow();
}

// Reveal animations for scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.animate-on-scroll:not(.animated)');
  
  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    const viewportHeight = window.innerHeight;
    
    // Check if element is in viewport
    if (elementTop < viewportHeight && elementBottom > 0) {
      element.classList.add('animated');
      
      // Add animation class based on data attribute or default
      const animationType = element.dataset.animation || 'fade-in';
      element.classList.add(`animate--${animationType}`);
    }
  });
};

// Throttle scroll event for better performance
let scrollTimeout;
const handleScroll = () => {
  if (scrollTimeout) {
    window.cancelAnimationFrame(scrollTimeout);
  }
  
  scrollTimeout = window.requestAnimationFrame(() => {
    animateOnScroll();
  });
};

// Add scroll listener if there are elements to animate
if (document.querySelector('.animate-on-scroll')) {
  window.addEventListener('scroll', handleScroll, { passive: true });
  // Run once on load
  animateOnScroll();
}
