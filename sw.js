var dataCacheName = 'kelbyone-demo';
var cacheName = 'kelbyone-files';
var filesToCache = [
  '/',
  'index.html',
  'js/shell.js',
  'css/reset.css',
  'css/typography.css',
  'css/layout.css',
  'images/kelbyone-logo.png'
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
});

self.addEventListener('fetch', function(e) {
  console.log('[Service Worker] Fetch', e.request.url);
});
