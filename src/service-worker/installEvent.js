import { self } from '$app/service-worker'
import { immutable, assets, prerendered } from '$app/manifest'
import { resolve } from '$app/paths'
import { CACHE_NAME } from './constants'

const ASSETS = [...immutable, ...assets, ...prerendered]
  .map((asset) => resolve(asset.path))
  .filter((url) => !url.endsWith('.nojekyll'))

export default (event) => {
  const freshRequestsPool = ASSETS.map((asset) => new Request(asset, { cache: 'reload' }))

  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return Promise.all(
          freshRequestsPool.map((request) =>
            fetch(request)
              .then((response) => {
                if (!response.ok)
                  throw new Error(`HTTP error ${response.status} for ${request.url}`)
                return cache.put(request, response)
              })
              .catch((err) => console.warn('Skipped caching asset:', err))
          )
        )
      })
      .then(() => self.skipWaiting())
  )
}
