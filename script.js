// Project Hub — small enhancements. No framework needed.

// Highlight the nav link for the section currently in view.
(function () {
  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll('.site-nav a[href^="#"]')
  );
  var sections = navLinks
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .filter(Boolean);

  if (!('IntersectionObserver' in window) || !sections.length) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      navLinks.forEach(function (a) {
        var active = a.getAttribute('href') === '#' + entry.target.id;
        a.classList.toggle('active', active);
        a.setAttribute('aria-current', active ? 'true' : 'false');
      });
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(function (s) { observer.observe(s); });
})();
