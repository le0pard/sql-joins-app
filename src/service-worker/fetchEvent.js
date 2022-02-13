import {CACHE_NAME} from './constants'

export default (event) => {
  event.respondWith(
    caches.match(event.request).then((cacheResponse) => {
      if (cacheResponse) {
        return cacheResponse
      }

      return fetch(event.request)
        .then(async (fetchResponse) => {
          if (event.request.url.indexOf('http') !== -1) {
            const cache = await caches.open(CACHE_NAME)

            try {
              // filter what to add to the cache
              if (fetchResponse.status !== 206) {
                cache.put(event.request.url, fetchResponse.clone())
              }
            } catch (error) {
              console.error(error)
            }

            return fetchResponse
          }

          return null
        })
        .catch((error) => {
          console.error(`"${error}: ${event.request.url}`)

          return error
        })
    })
  )
}
