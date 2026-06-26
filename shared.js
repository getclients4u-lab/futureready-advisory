// FutureReady Advisory — Enhanced JavaScript
(function() {
  'use strict';

  // Header scroll
  var hdr = document.getElementById('site-header');
  if (hdr) {
    window.addEventListener('scroll', function() {
      hdr.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  // Mobile nav
  var burger = document.getElementById('hamburger');
  var nav = document.getElementById('main-nav');
  if (burger && nav) {
    burger.addEventListener('click', function() {
      nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', nav.classList.contains('open'));
    });
  }

  // Fade-in observer
  var fadeObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        fadeObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(function(el) {
    fadeObserver.observe(el);
  });

  // Reveal observer for card animations
  document.addEventListener("DOMContentLoaded", function() {
    var revealTargets = document.querySelectorAll(
      '.problem-card, .step-card, .outcome-item, .team-card, .insight-card, .service-card'
    );

    revealTargets.forEach(function(el, index) {
      el.classList.add('reveal', 'card-hover');
      el.style.transitionDelay = (index * 0.06) + 's';
    });

    var revealObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.12 });

    revealTargets.forEach(function(el) { revealObserver.observe(el); });
  });

  // FAQ accordion
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.faq-question').forEach(function(q) {
      q.addEventListener('click', function() {
        var parent = this.closest('.faq-item');
        if (parent) {
          parent.classList.toggle('active');
        }
      });
    });
  });

})();
