import {build} from '$service-worker'
import {CACHE_NAME} from './constants'

export default (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(build)
      })
      .then(() => {
        return self.skipWaiting()
      })
  )
}
