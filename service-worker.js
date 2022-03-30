const build = [
  "/_app/start-ca8dbbbe.js",
  "/_app/pages/__layout.svelte-078fe2b8.js",
  "/_app/assets/pages/__layout.svelte-5403f75c.css",
  "/_app/error.svelte-37c124e9.js",
  "/_app/pages/index.svelte-1a613c74.js",
  "/_app/assets/pages/index.svelte-4c0fa22a.css",
  "/_app/chunks/vendor-da2059f7.js"
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
const version = "1648681779240";
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
