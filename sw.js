const CACHE = 'revise-v3';

self.addEventListener('message', e => {
  if (e.data === 'skipWaiting') self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request));
});
