(() => {
  document.documentElement.classList.add('js');
  // Keep the site's motion engine enabled; remove any stale calm flag that
  // would stop the hero canvas, scroll-linked layers, and reveal animations.
  document.documentElement.classList.remove('calm');
})();
