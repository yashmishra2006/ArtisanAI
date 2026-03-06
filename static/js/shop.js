// Mobile menu functionality
document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMobileMenu = document.getElementById('closeMobileMenu');

  if (mobileMenuBtn && mobileMenu && closeMobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden');
    });

    closeMobileMenu.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });

    // Close menu when clicking outside
    mobileMenu.addEventListener('click', (e) => {
      if (e.target === mobileMenu) {
        mobileMenu.classList.add('hidden');
      }
    });
  }
});

// Add to cart functionality
function addToCart(productId) {
  alert('Product ' + productId + ' added to cart!');
  // Here you would typically update cart state and show a toast notification
}

// Toggle favorite functionality
function toggleFavorite(button) {
  const icon = button.querySelector('.material-symbols-outlined');
  if (icon && icon.textContent === 'favorite_border') {
    icon.textContent = 'favorite';
    alert('Added to favorites!');
  } else if (icon) {
    icon.textContent = 'favorite_border';
    alert('Removed from favorites!');
  }
}

// Shopping cart state
let cart = [];

// Update cart count display
function updateCartCount() {
  const cartBtn = document.querySelector('[data-cart-count]');
  if (cartBtn) {
    cartBtn.setAttribute('data-cart-count', cart.length);
  }
}
