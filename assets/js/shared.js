/* ════════════════════════════════════════════════════════════
   ArtisanAI — Shared JavaScript
   Animations · Navigation · Interactivity
═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── 1. Scroll Reveal ───────────────────────────────────── */
  function initScrollReveal() {
    const els = document.querySelectorAll(
      'section, .card-lift, article, .reveal, ' +
      '[class*="rounded-xl"], [class*="rounded-2xl"]'
    );
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    els.forEach((el, i) => {
      if (!el.classList.contains('reveal')) el.classList.add('reveal');
      if (i % 3 === 1) el.classList.add('reveal-delay-1');
      if (i % 3 === 2) el.classList.add('reveal-delay-2');
      observer.observe(el);
    });
  }

  /* ── 2. Animated Stat Counters ──────────────────────────── */
  function animateCounter(el, target, prefix = '', suffix = '') {
    const duration = 1600;
    const start = performance.now();
    const isDecimal = target % 1 !== 0;

    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const value = isDecimal
        ? (ease * target).toFixed(1)
        : Math.floor(ease * target).toLocaleString('en-IN');
      el.textContent = prefix + value + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function initCounters() {
    const counterEls = document.querySelectorAll('[data-count]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const el = e.target;
          const raw = el.dataset.count;
          const prefix = el.dataset.prefix || '';
          const suffix = el.dataset.suffix || '';
          animateCounter(el, parseFloat(raw.replace(/,/g, '')), prefix, suffix);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.4 });
    counterEls.forEach(el => observer.observe(el));
  }

  /* ── 3. Progress Bars ───────────────────────────────────── */
  function initProgressBars() {
    const bars = document.querySelectorAll('[data-progress]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.width = e.target.dataset.progress + '%';
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });
    bars.forEach(bar => {
      bar.classList.add('progress-bar-fill');
      observer.observe(bar);
    });
  }

  /* ── 4. Navbar Active State ─────────────────────────────── */
  function initNavActive() {
    const page = window.location.pathname.split('/').pop() || 'index.html';
    // Public top nav
    document.querySelectorAll('header a[href], nav > a[href]').forEach(a => {
      const href = a.getAttribute('href') || '';
      if (href === page || (page === '' && href === 'index.html')) {
        a.classList.add('active');
        if (a.classList.contains('nav-link') || a.closest('nav')) {
          a.style.color = '#F5A623';
        }
      }
    });
    // Sidebar
    document.querySelectorAll('.sidebar-item').forEach(item => {
      const href = item.getAttribute('href') || '';
      if (href === page) item.classList.add('active');
    });
  }

  /* ── 5. Mobile Hamburger / Drawer ───────────────────────── */
  function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    const overlay   = document.querySelector('.sidebar-overlay');
    if (!hamburger || !mobileNav) return;

    function toggle(open) {
      hamburger.classList.toggle('open', open);
      mobileNav.classList.toggle('open', open);
      if (overlay) overlay.classList.toggle('active', open);
      document.body.style.overflow = open ? 'hidden' : '';
    }
    hamburger.addEventListener('click', () => toggle(!mobileNav.classList.contains('open')));
    if (overlay) overlay.addEventListener('click', () => toggle(false));
  }

  /* ── 6. Add-to-Cart / Wishlist Feedback ─────────────────── */
  function showToast(msg, icon = '✓') {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();
    const t = document.createElement('div');
    t.className = 'toast';
    t.innerHTML = `<span style="font-size:16px">${icon}</span> ${msg}`;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 3000);
  }

  function initCartButtons() {
    document.querySelectorAll('[data-action="add-to-cart"]').forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        showToast('Added to cart!', '🛒');
      });
    });
    document.querySelectorAll('[data-action="wishlist"]').forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        const icon = btn.querySelector('.material-symbols-outlined');
        if (icon) {
          const filled = icon.style.fontVariationSettings.includes("'FILL' 1");
          icon.style.fontVariationSettings = filled ? "'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 24" : "'FILL' 1,'wght' 400,'GRAD' 0,'opsz' 24";
          icon.style.color = filled ? '' : '#F5A623';
        }
        showToast(btn.dataset.filled ? 'Removed from wishlist' : 'Saved to wishlist!', '♥');
        btn.dataset.filled = btn.dataset.filled ? '' : '1';
      });
    });
  }

  /* ── 7. Smooth Internal Link Transitions ────────────────── */
  function initPageTransitions() {
    document.addEventListener('click', e => {
      const a = e.target.closest('a[href]');
      if (!a) return;
      const href = a.getAttribute('href');
      // Only internal same-origin HTML links
      if (!href || href.startsWith('#') || href.startsWith('http') ||
          href.startsWith('mailto') || a.target === '_blank') return;
      e.preventDefault();
      document.body.style.opacity = '0';
      document.body.style.transition = 'opacity 0.22s ease';
      setTimeout(() => { window.location.href = href; }, 220);
    });
  }

  /* ── 8. Marquee duplicate content ───────────────────────── */
  function initMarquee() {
    document.querySelectorAll('.marquee-track').forEach(track => {
      if (track.dataset.duped) return;
      track.innerHTML += track.innerHTML;
      track.dataset.duped = '1';
    });
  }

  /* ── 9. Tab switcher (AI Market Assistant) ──────────────── */
  function initTabs() {
    document.querySelectorAll('[data-tab-group]').forEach(group => {
      const id = group.dataset.tabGroup;
      const triggers = document.querySelectorAll(`[data-tab="${id}"]`);
      const panels   = document.querySelectorAll(`[data-panel="${id}"]`);
      triggers.forEach((t, i) => {
        t.addEventListener('click', () => {
          triggers.forEach(x => x.classList.remove('border-primary', 'text-primary'));
          panels.forEach(p => p.classList.add('hidden'));
          t.classList.add('border-primary', 'text-primary');
          if (panels[i]) panels[i].classList.remove('hidden');
        });
      });
    });
  }

  /* ── 10. Image lazy load with shimmer ───────────────────── */
  function initLazyImages() {
    const imgs = document.querySelectorAll('img[data-src]');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const img = e.target;
          img.src = img.dataset.src;
          img.classList.remove('img-shimmer');
          observer.unobserve(img);
        }
      });
    });
    imgs.forEach(img => {
      img.classList.add('img-shimmer');
      observer.observe(img);
    });
  }

  /* ── 11. Finance Hub progress bars ─────────────────────── */
  function initFinanceBars() {
    document.querySelectorAll('.campaign-progress').forEach(bar => {
      const pct = bar.dataset.pct;
      if (!pct) return;
      bar.style.width = '0%';
      const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          setTimeout(() => { bar.style.width = pct + '%'; }, 200);
          observer.unobserve(bar);
        }
      }, { threshold: 0.4 });
      observer.observe(bar);
    });
  }

  /* ── 12. Generate Story button simulation ───────────────── */
  function initStoryGenerator() {
    const btn = document.querySelector('[data-action="generate-story"]');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const orig = btn.innerHTML;
      btn.innerHTML = '<span class="material-symbols-outlined animate-spin" style="font-size:18px">autorenew</span> Generating...';
      btn.disabled = true;
      setTimeout(() => {
        btn.innerHTML = orig;
        btn.disabled = false;
        showToast('Story generated successfully!', '✦');
        const output = document.querySelector('[data-story-output]');
        if (output) output.classList.add('ring-2', 'ring-primary');
      }, 2200);
    });
  }

  /* ── 13. Quantity stepper ───────────────────────────────── */
  function initQuantityStepper() {
    document.querySelectorAll('.qty-minus').forEach(btn => {
      btn.addEventListener('click', () => {
        const display = btn.parentElement.querySelector('.qty-display');
        if (display) display.textContent = Math.max(1, +display.textContent - 1);
      });
    });
    document.querySelectorAll('.qty-plus').forEach(btn => {
      btn.addEventListener('click', () => {
        const display = btn.parentElement.querySelector('.qty-display');
        if (display) display.textContent = +display.textContent + 1;
      });
    });
  }

  /* ── 14. Sticky navbar shrink on scroll ─────────────────── */
  function initStickyNav() {
    const nav = document.querySelector('header');
    if (!nav) return;
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
        nav.style.boxShadow = '0 2px 16px rgba(0,0,0,0.08)';
        nav.style.backdropFilter = 'blur(12px)';
      } else {
        nav.style.boxShadow = '';
        nav.style.backdropFilter = '';
      }
    }, { passive: true });
  }

  /* ── Boot ───────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
    initCounters();
    initProgressBars();
    initNavActive();
    initMobileMenu();
    initCartButtons();
    initPageTransitions();
    initMarquee();
    initTabs();
    initLazyImages();
    initFinanceBars();
    initStoryGenerator();
    initQuantityStepper();
    initStickyNav();
    console.log('%c ArtisanAI ✦ ', 'background:#F5A623;color:white;padding:4px 10px;border-radius:4px;font-weight:700;');
  });
})();
