/**
 * Shared Navigation & Mobile Drawer Controller
 * English Teaching Unit (ETU) - Faculty of Engineering, University of Peradeniya
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'true');
        mobileMenuBtn.innerHTML = `
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        `;
      } else {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileMenuBtn.innerHTML = `
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        `;
      }
    });
  }

  // 2. Gallery link click handler (since no separate gallery page exists yet)
  const galleryLinks = document.querySelectorAll('a[href="#gallery"], a[href="gallery.html"]');
  galleryLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // If we are not on groups.html, smooth scroll to work or redirect to groups.html
      const currentPath = window.location.pathname;
      if (!currentPath.includes('groups.html') && !currentPath.includes('categories.html')) {
        const workSection = document.getElementById('work');
        if (workSection) {
          e.preventDefault();
          workSection.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.location.href = 'groups.html';
        }
      } else {
        const grid = document.getElementById('projects-grid');
        if (grid) {
          e.preventDefault();
          grid.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});
