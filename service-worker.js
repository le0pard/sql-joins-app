const build = [
  "/_app/start-4ad15dc7.js",
  "/_app/pages/__layout.svelte-2123d144.js",
  "/_app/assets/pages/__layout.svelte-5403f75c.css",
  "/_app/error.svelte-b6095b93.js",
  "/_app/pages/index.svelte-72762c20.js",
  "/_app/assets/pages/index.svelte-4c0fa22a.css",
  "/_app/chunks/index-673e3bb7.js"
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
const version = "1650295895013";
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
