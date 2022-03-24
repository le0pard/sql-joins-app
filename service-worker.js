const timestamp = {
  toString: () => {
    throw new Error("`timestamp` has been removed from $service-worker. Use `version` instead");
  }
};
const build = [
  "/_app/start-97bc6ee6.js",
  "/_app/pages/__layout.svelte-9fff04f5.js",
  "/_app/assets/pages/__layout.svelte-5403f75c.css",
  "/_app/error.svelte-c8d56c83.js",
  "/_app/pages/index.svelte-775869b3.js",
  "/_app/assets/pages/index.svelte-4c0fa22a.css",
  "/_app/chunks/vendor-3bb54997.js"
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
