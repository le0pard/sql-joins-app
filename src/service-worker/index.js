import activateEvent from './activateEvent'
import installEvent from './installEvent'
import fetchEvent from './fetchEvent'

self.addEventListener('install', installEvent)
self.addEventListener('activate', activateEvent)
self.addEventListener('fetch', fetchEvent)
