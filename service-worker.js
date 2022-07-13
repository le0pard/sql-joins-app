const build = [
  "/_app/immutable/start-16721792.js",
  "/_app/immutable/pages/__layout.svelte-bb172639.js",
  "/_app/immutable/assets/pages/__layout.svelte-fcfd45e0.css",
  "/_app/immutable/error.svelte-4496360b.js",
  "/_app/immutable/pages/index.svelte-a835fd16.js",
  "/_app/immutable/assets/pages/index.svelte-4c0fa22a.css",
  "/_app/immutable/chunks/index-168ca386.js"
];
const files = [
  "/apple-touch-icon.png",
  "/favicon.ico",
  "/favicon.svg",
  "/icon-192.png",
  "/icon-512.png",
  "/manifest.webmanifest",
  "/maskable_icon.png"
];
const version = "1657746196701";
const CACHE_NAME = `sql-joins-${version}`;
var activateEvent = (event) => {
  event.waitUntil(caches.keys().then((keys) => keys.filter((key) => key !== CACHE_NAME)).then((keysToRemove) => Promise.all(keysToRemove.map((key) => caches.delete(key)))).then(() => self.clients.claim()));
};
var installEvent = (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => Promise.all([
    cache.addAll(["/"]),
    cache.addAll(build),
    cache.addAll(files)
  ])).then(() => self.skipWaiting()));
};
var fetchEvent = (event) => {
  event.respondWith(caches.match(event.request).then((cachedResponse) => {
    if (cachedResponse) {
      return cachedResponse;
    }
    return fetch(event.request);
  }));
};
self.addEventListener("install", installEvent);
self.addEventListener("activate", activateEvent);
self.addEventListener("fetch", fetchEvent);
