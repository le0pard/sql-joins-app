const n = [
  "/_app/immutable/start-bc73cb7a.js",
  "/_app/immutable/components/pages/_layout.svelte-4eebe51a.js",
  "/_app/immutable/assets/+layout-1126832e.css",
  "/_app/immutable/components/error.svelte-15ae665c.js",
  "/_app/immutable/components/pages/_page.svelte-97557f20.js",
  "/_app/immutable/assets/+page-80f8ecfa.css",
  "/_app/immutable/chunks/index-3885a71e.js",
  "/_app/immutable/chunks/0-12b488b2.js",
  "/_app/immutable/chunks/1-662ec48d.js",
  "/_app/immutable/chunks/2-9ae85c24.js"
], i = [
  "/apple-touch-icon.png",
  "/favicon.ico",
  "/favicon.svg",
  "/icon-192.png",
  "/icon-512.png",
  "/manifest.webmanifest",
  "/maskable_icon.png"
], l = "1660907604341", a = `sql-joins-${l}`, c = (t) => {
  t.waitUntil(
    caches.keys().then((e) => e.filter((s) => s !== a)).then((e) => Promise.all(e.map((s) => caches.delete(s)))).then(() => self.clients.claim())
  );
}, p = (t) => {
  t.waitUntil(
    caches.open(a).then(
      (e) => Promise.all([
        e.addAll(["/"]),
        e.addAll(n),
        e.addAll(i)
      ])
    ).then(() => self.skipWaiting())
  );
}, m = (t) => {
  t.respondWith(
    caches.match(t.request).then((e) => e || fetch(t.request))
  );
};
self.addEventListener("install", p);
self.addEventListener("activate", c);
self.addEventListener("fetch", m);
