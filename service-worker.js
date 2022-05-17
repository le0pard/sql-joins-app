const build = [
  "/_app/start-10725413.js",
  "/_app/pages/__layout.svelte-dfc2a0da.js",
  "/_app/assets/pages/__layout.svelte-fcfd45e0.css",
  "/_app/error.svelte-ebd0a545.js",
  "/_app/pages/index.svelte-9e3a53bf.js",
  "/_app/assets/pages/index.svelte-4c0fa22a.css",
  "/_app/chunks/index-349d637e.js"
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
const version = "1652787813973";
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
