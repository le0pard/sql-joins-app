export default (event) => {
  event.respondWith(
    caches.match(event.request).then((cacheResponse) => {
      if (cacheResponse) {
        return cacheResponse
      }

      return fetch(event.request)
    })
  )
}
