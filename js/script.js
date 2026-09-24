/* Crumb Culture — Interactive behaviors */
(function () {
  'use strict';

  // Mobile menu toggle
  const toggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (toggle && mobileMenu) {
    toggle.addEventListener('click', function () {
      const isOpen = !mobileMenu.classList.contains('hidden');
      if (isOpen) {
        mobileMenu.classList.add('hidden');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
      } else {
        mobileMenu.classList.remove('hidden');
        toggle.setAttribute('aria-expanded', 'true');
        toggle.setAttribute('aria-label', 'Close menu');
      }
    });

    // Close mobile menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.add('hidden');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
      });
    });
  }

  // Contact form validation
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  if (form && status) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function setInvalid(input, invalid) {
      if (invalid) {
        input.classList.add('is-invalid');
        input.setAttribute('aria-invalid', 'true');
      } else {
        input.classList.remove('is-invalid');
        input.removeAttribute('aria-invalid');
      }
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = form.elements.name;
      const email = form.elements.email;
      const message = form.elements.message;

      let valid = true;

      if (!name.value.trim()) {
        setInvalid(name, true);
        valid = false;
      } else {
        setInvalid(name, false);
      }

      if (!email.value.trim() || !emailPattern.test(email.value.trim())) {
        setInvalid(email, true);
        valid = false;
      } else {
        setInvalid(email, false);
      }

      if (!message.value.trim()) {
        setInvalid(message, true);
        valid = false;
      } else {
        setInvalid(message, false);
      }

      if (!valid) {
        status.textContent = 'Please fill in all fields correctly.';
        status.style.color = '#fca5a5';
        return;
      }

      // Simulate successful submission (no backend)
      status.textContent = 'Thanks! We\'ll get back to you within 24 hours. 🥐';
      status.style.color = '#a7f3d0';
      form.reset();
    });

    // Clear invalid state on input
    ['name', 'email', 'message'].forEach(function (fieldName) {
      form.elements[fieldName].addEventListener('input', function () {
        setInvalid(this, false);
      });
    });
  }

  // Dynamic year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Smooth scroll fallback for older browsers (progressive enhancement)
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const id = this.getAttribute('href');
      if (id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
})();
