// execute once service worker is installed
self.addEventListener('install', event => {
  const offlinePage = new Request('/');
  event.waitUntil(
    fetch(offlinePage).then(response => {
      return caches.open('careertalk-stats').then(cache => {
        // open cache
        return cache.put(offlinePage, response); // and store that offline page
      });
    })
  );
});

// intercept all requests
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(error => {
      return caches.open('careertalk-stats').then(cache => cache.match('/'));
    })
  );
});
