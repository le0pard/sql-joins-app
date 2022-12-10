const n = [
  "/_app/immutable/assets/_layout-97c6345d.css",
  "/_app/immutable/assets/_page-80f8ecfa.css",
  "/_app/immutable/start-76ea8606.js",
  "/_app/immutable/chunks/singletons-4ac8d08c.js",
  "/_app/immutable/chunks/1-f8e4110c.js",
  "/_app/immutable/components/pages/_layout.svelte-ea9cae58.js",
  "/_app/immutable/modules/pages/_layout.js-9cbb603b.js",
  "/_app/immutable/chunks/0-3611633a.js",
  "/_app/immutable/chunks/index-8bbd3ae4.js",
  "/_app/immutable/chunks/2-09292577.js",
  "/_app/immutable/chunks/_layout-da46b06b.js",
  "/_app/immutable/components/error.svelte-b41140cb.js",
  "/_app/immutable/components/pages/_page.svelte-165b2f26.js"
], l = [
  "/apple-touch-icon.png",
  "/favicon.ico",
  "/favicon.svg",
  "/icon-192.png",
  "/icon-512.png",
  "/manifest.webmanifest",
  "/maskable_icon.png"
], i = "1670671464890", t = `sql-joins-${i}`, c = (s) => {
  s.waitUntil(
    caches.keys().then((e) => e.filter((a) => a !== t)).then((e) => Promise.all(e.map((a) => caches.delete(a)))).then(() => self.clients.claim())
  );
}, p = (s) => {
  s.waitUntil(
    caches.open(t).then(
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
