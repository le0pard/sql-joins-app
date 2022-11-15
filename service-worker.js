const n = [
  "/_app/immutable/start-5a81860c.js",
  "/_app/immutable/components/pages/_layout.svelte-96bdce20.js",
  "/_app/immutable/assets/_layout-1126832e.css",
  "/_app/immutable/components/error.svelte-491e9801.js",
  "/_app/immutable/components/pages/_page.svelte-53186b69.js",
  "/_app/immutable/assets/_page-80f8ecfa.css",
  "/_app/immutable/modules/pages/_layout.js-7b9cbfbc.js",
  "/_app/immutable/chunks/singletons-d6e29470.js",
  "/_app/immutable/chunks/index-cca17a7f.js",
  "/_app/immutable/chunks/_layout-8d2a742b.js",
  "/_app/immutable/chunks/0-c5eaa7db.js",
  "/_app/immutable/chunks/1-2fb7d42f.js",
  "/_app/immutable/chunks/2-cb5f2c2f.js"
], l = [
  "/apple-touch-icon.png",
  "/favicon.ico",
  "/favicon.svg",
  "/icon-192.png",
  "/icon-512.png",
  "/manifest.webmanifest",
  "/maskable_icon.png"
], i = "1668515237055", a = `sql-joins-${i}`, c = (s) => {
  s.waitUntil(
    caches.keys().then((e) => e.filter((t) => t !== a)).then((e) => Promise.all(e.map((t) => caches.delete(t)))).then(() => self.clients.claim())
  );
}, p = (s) => {
  s.waitUntil(
    caches.open(a).then(
      (e) => Promise.all([
        e.addAll(["/"]),
        e.addAll(n),
        e.addAll(l)
      ])
    ).then(() => self.skipWaiting())
  );
}, m = (s) => {
  s.respondWith(
    caches.match(s.request).then((e) => e || fetch(s.request))
  );
};
self.addEventListener("install", p);
self.addEventListener("activate", c);
self.addEventListener("fetch", m);
