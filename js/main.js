// Dion Rahmadan Portfolio — small interactions only (PRD §6: vanilla JS, no framework)
(function () {
  'use strict';

  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Auto-close mobile navbar after clicking a link
  var navCollapse = document.getElementById('mainNav');
  if (navCollapse && window.bootstrap && window.bootstrap.Collapse) {
    navCollapse.addEventListener('click', function (event) {
      var target = event.target.closest('a');
      if (!target) return;
      if (!navCollapse.classList.contains('show')) return;
      var collapse = window.bootstrap.Collapse.getOrCreateInstance(navCollapse, { toggle: false });
      collapse.hide();
    });
  }

  // Back-to-top button
  var toTop = document.getElementById('toTop');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function onScroll() {
    if (!toTop) return;
    var show = window.scrollY > 600;
    if (show) toTop.removeAttribute('hidden');
    else toTop.setAttribute('hidden', '');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (toTop) {
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  }

  // Simple active nav highlighting (no dependency)
  var links = Array.prototype.slice.call(document.querySelectorAll('.brutal-nav .nav-link[href^="#"]'));
  var sections = links
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var id = '#' + entry.target.id;
          links.forEach(function (a) {
            a.classList.toggle('active', a.getAttribute('href') === id);
          });
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    sections.forEach(function (s) { observer.observe(s); });
  }
})();
