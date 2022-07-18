const n = [
  "/_app/immutable/start-8bcaf298.js",
  "/_app/immutable/pages/__layout.svelte-420e7561.js",
  "/_app/immutable/assets/__layout-30d161eb.css",
  "/_app/immutable/error.svelte-18aa0353.js",
  "/_app/immutable/pages/index.svelte-14513b44.js",
  "/_app/immutable/assets/index-80f8ecfa.css",
  "/_app/immutable/chunks/index-b7357a12.js"
], i = [
  "/apple-touch-icon.png",
  "/favicon.ico",
  "/favicon.svg",
  "/icon-192.png",
  "/icon-512.png",
  "/manifest.webmanifest",
  "/maskable_icon.png"
], l = "1658158876913", a = `sql-joins-${l}`, c = (t) => {
  t.waitUntil(caches.keys().then((e) => e.filter((s) => s !== a)).then((e) => Promise.all(e.map((s) => caches.delete(s)))).then(() => self.clients.claim()));
}, p = (t) => {
  t.waitUntil(caches.open(a).then((e) => Promise.all([
    e.addAll(["/"]),
    e.addAll(n),
    e.addAll(i)
  ])).then(() => self.skipWaiting()));
}, o = (t) => {
  t.respondWith(caches.match(t.request).then((e) => e || fetch(t.request)));
};
self.addEventListener("install", p);
self.addEventListener("activate", c);
self.addEventListener("fetch", o);
