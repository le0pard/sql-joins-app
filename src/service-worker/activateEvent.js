import { CACHE_NAME } from './constants'

export default (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => keys.filter((key) => key !== CACHE_NAME))
      .then((keysToRemove) => Promise.all(keysToRemove.map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  )
}
