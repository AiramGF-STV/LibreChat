if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').catch(() => {});
  });
}
(function () {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = '/custom.css?v=' + Date.now();
  document.head.appendChild(link);
})();