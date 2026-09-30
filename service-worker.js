const CACHE_NAME = "encuestas-ti-v1";

const ARCHIVOS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./logo-am-blue.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ARCHIVOS);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        return response;
      })
      .catch(() => {
        return caches.match(event.request);
      })
  );
});
