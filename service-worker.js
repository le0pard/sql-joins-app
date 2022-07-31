const n = [
  "/_app/immutable/start-32e2b3ce.js",
  "/_app/immutable/pages/__layout.svelte-c3ddd8fe.js",
  "/_app/immutable/assets/__layout-30d161eb.css",
  "/_app/immutable/error.svelte-50f8d6ba.js",
  "/_app/immutable/pages/index.svelte-1e5cddb5.js",
  "/_app/immutable/assets/index-80f8ecfa.css",
  "/_app/immutable/chunks/index-fd5f3aee.js"
], i = [
  "/apple-touch-icon.png",
  "/favicon.ico",
  "/favicon.svg",
  "/icon-192.png",
  "/icon-512.png",
  "/manifest.webmanifest",
  "/maskable_icon.png"
], l = "1659297330117", a = `sql-joins-${l}`, c = (t) => {
  t.waitUntil(
    caches.keys().then((e) => e.filter((s) => s !== a)).then((e) => Promise.all(e.map((s) => caches.delete(s)))).then(() => self.clients.claim())
  );
}, d = (t) => {
  t.waitUntil(
    caches.open(a).then(
      (e) => Promise.all([
        e.addAll(["/"]),
        e.addAll(n),
        e.addAll(i)
      ])
    ).then(() => self.skipWaiting())
  );
}, p = (t) => {
  t.respondWith(
    caches.match(t.request).then((e) => e || fetch(t.request))
  );
};
self.addEventListener("install", d);
self.addEventListener("activate", c);
self.addEventListener("fetch", p);
