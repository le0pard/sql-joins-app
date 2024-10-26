import { build, files } from '$service-worker'
import { CACHE_NAME } from './constants'

export default (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) =>
        Promise.all([
          cache.addAll(['/']), // cache root page
          cache.addAll(build),
          cache.addAll(files)
        ])
      )
      .then(() => self.skipWaiting())
  )
}
