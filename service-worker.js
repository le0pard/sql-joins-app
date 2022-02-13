const timestamp = 1644763553679;
const build = [
  "/_app/start-3c078949.js",
  "/_app/pages/__layout.svelte-308dfc07.js",
  "/_app/assets/pages/__layout.svelte-5403f75c.css",
  "/_app/error.svelte-94fb5597.js",
  "/_app/pages/index.svelte-21e3a792.js",
  "/_app/assets/pages/index.svelte-d1184b44.css",
  "/_app/chunks/vendor-88af7281.js"
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
    return cache.addAll(build);
  }).then(() => {
    return self.skipWaiting();
  }));
};
var fetchEvent = (event) => {
  event.respondWith(caches.match(event.request).then((cacheResponse) => {
    if (cacheResponse) {
      return cacheResponse;
    }
    return fetch(event.request).then(async (fetchResponse) => {
      if (event.request.url.indexOf("http") !== -1) {
        const cache = await caches.open(CACHE_NAME);
        try {
          if (fetchResponse.status !== 206) {
            cache.put(event.request.url, fetchResponse.clone());
          }
        } catch (error) {
          console.error(error);
        }
        return fetchResponse;
      }
      return null;
    }).catch((error) => {
      console.error(`"${error}: ${event.request.url}`);
      return error;
    });
  }));
};
self.addEventListener("install", installEvent);
self.addEventListener("activate", activateEvent);
self.addEventListener("fetch", fetchEvent);
