import { self } from '$app/service-worker'
import { immutable, assets, prerendered } from '$app/manifest'
import { resolve } from '$app/paths'
import { CACHE_NAME } from './constants'

const ASSETS = [...immutable, ...assets, ...prerendered].map((asset) => resolve(asset.path))

export default (event) => {
  const freshRequestsPool = ASSETS.map((asset) => new Request(asset, { cache: 'reload' }))

  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => Promise.all([cache.addAll(freshRequestsPool)]))
      .then(() => self.skipWaiting())
  )
}
