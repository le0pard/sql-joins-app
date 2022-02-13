import {CACHE_NAME} from './constants'

export default (event) => {
  event.waitUntil(
    caches.keys().then(async (keys) => {
      // delete old caches
      for (const key of keys) {
        if (key !== CACHE_NAME) await caches.delete(key)
      }
      self.clients.claim()
    })
  )
}
