// Service worker minimal : aucune mise en cache, pour toujours afficher la dernière version de Vybora.
self.addEventListener("install", function () { self.skipWaiting(); });
self.addEventListener("activate", function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", function (event) {
  const req = event.request;
  if (req.method === "GET" && new URL(req.url).origin === self.location.origin) {
    event.respondWith(fetch(req));
  }
});
