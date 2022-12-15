const n = [
  "/_app/immutable/assets/_layout-97c6345d.css",
  "/_app/immutable/assets/_page-80f8ecfa.css",
  "/_app/immutable/chunks/2-c4aab9a9.js",
  "/_app/immutable/chunks/0-e97b1996.js",
  "/_app/immutable/chunks/index-8bbd3ae4.js",
  "/_app/immutable/chunks/1-278079c9.js",
  "/_app/immutable/chunks/_layout-da46b06b.js",
  "/_app/immutable/start-d1bd6c9b.js",
  "/_app/immutable/components/error.svelte-4dc6a1d4.js",
  "/_app/immutable/modules/pages/_layout.js-9cbb603b.js",
  "/_app/immutable/chunks/singletons-4ac8d08c.js",
  "/_app/immutable/components/pages/_layout.svelte-ea9cae58.js",
  "/_app/immutable/components/pages/_page.svelte-402aa935.js"
], l = [
  "/apple-touch-icon.png",
  "/favicon.ico",
  "/favicon.svg",
  "/icon-192.png",
  "/icon-512.png",
  "/manifest.webmanifest",
  "/maskable_icon.png"
], i = "1671101727742", t = `sql-joins-${i}`, c = (a) => {
  a.waitUntil(
    caches.keys().then((e) => e.filter((s) => s !== t)).then((e) => Promise.all(e.map((s) => caches.delete(s)))).then(() => self.clients.claim())
  );
}, p = (a) => {
  a.waitUntil(
    caches.open(t).then(
      (e) => Promise.all([
        e.addAll(["/"]),
        e.addAll(n),
        e.addAll(l)
      ])
    ).then(() => self.skipWaiting())
  );
}, m = (a) => {
  a.respondWith(
    caches.match(a.request).then((e) => e || fetch(a.request))
  );
};
self.addEventListener("install", p);
self.addEventListener("activate", c);
self.addEventListener("fetch", m);
