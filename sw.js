// Prosty service worker — cache'uje stronę, żeby dało się ją otworzyć
// nawet bez internetu (po jednym wcześniejszym wejściu).
const CACHE_NAME = 'program-wyborczy-v1';
const urlsToCache = ['./', './index.html', './aktualnosci.json', './manifest.json'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
