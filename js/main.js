/* ============================================================
   Marandev.co — main.js
   Navbar móvil · Fade-up · FAQ accordion
   ============================================================ */

(function () {
  'use strict';

  /* ── Navbar hamburger ─────────────────────────────────── */
  const hamburger = document.querySelector('.hamburger');
  const navMenu   = document.querySelector('.navbar-menu');

  if (hamburger && navMenu) {
    function closeMenu() {
      navMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    hamburger.addEventListener('click', function (e) {
      e.stopPropagation();
      const opening = !navMenu.classList.contains('open');
      if (opening) {
        navMenu.classList.add('open');
        hamburger.classList.add('open');
        hamburger.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
      } else {
        closeMenu();
      }
    });

    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', function (e) {
      if (!e.target.closest('.navbar') && navMenu.classList.contains('open')) {
        closeMenu();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  }

  /* ── Fade-up con IntersectionObserver ──────────────────── */
  var fadeEls = document.querySelectorAll('.fade-up');

  if (fadeEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    fadeEls.forEach(function (el) { io.observe(el); });
  }

  /* ── FAQ accordion ─────────────────────────────────────── */
  document.querySelectorAll('.faq-question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item   = btn.closest('.faq-item');
      var isOpen = item.classList.contains('open');

      document.querySelectorAll('.faq-item.open').forEach(function (i) {
        i.classList.remove('open');
      });

      if (!isOpen) item.classList.add('open');
    });
  });

})();
