const timestamp = 1644830391982;
const build = [
  "/_app/start-4667e7d9.js",
  "/_app/pages/__layout.svelte-308dfc07.js",
  "/_app/assets/pages/__layout.svelte-5403f75c.css",
  "/_app/error.svelte-94fb5597.js",
  "/_app/pages/index.svelte-2587ff82.js",
  "/_app/assets/pages/index.svelte-4c0fa22a.css",
  "/_app/chunks/vendor-88af7281.js"
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
const CACHE_NAME = `sql-joins-${timestamp}`;
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
