const CACHE_NAME = 'bluschkodas-v3'; // Version erneut erhöht, um Cache zu leeren
const ASSETS = [
  '/Skoda/',
  '/Skoda/Skoda.html',
  '/Skoda/skoda.png',
  '/Skoda/skoda rot.png',
  '/Skoda/manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
