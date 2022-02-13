const timestamp = 1644786228494;
const build = [
  "/_app/start-50b73242.js",
  "/_app/pages/__layout.svelte-308dfc07.js",
  "/_app/assets/pages/__layout.svelte-5403f75c.css",
  "/_app/error.svelte-94fb5597.js",
  "/_app/pages/index.svelte-21e3a792.js",
  "/_app/assets/pages/index.svelte-d1184b44.css",
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
  event.waitUntil(caches.keys().then(async (keys) => {
    for (const key of keys) {
      if (key !== CACHE_NAME)
        await caches.delete(key);
    }
    self.clients.claim();
  }));
};
var installEvent = (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => {
    return Promise.all([
      cache.addAll(["/"]),
      cache.addAll(build),
      cache.addAll(files)
    ]);
  }).then(() => {
    return self.skipWaiting();
  }));
};
var fetchEvent = (event) => {
  event.respondWith(caches.match(event.request).then((cacheResponse) => {
    if (cacheResponse) {
      return cacheResponse;
    }
    return fetch(event.request);
  }));
};
self.addEventListener("install", installEvent);
self.addEventListener("activate", activateEvent);
self.addEventListener("fetch", fetchEvent);
