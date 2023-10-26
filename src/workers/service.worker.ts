const _self = self as unknown as ServiceWorkerGlobalScope
const cacheName = 'sw-0.0.1v'

_self.addEventListener('install', (event) => {
  console.log('install')
  event.waitUntil(
    caches
      .open(cacheName)
      .then(async (cache) =>
        cache.addAll(['/', '/about', '/locales/ru/about_us.json'])
      )
      .catch((e) => console.error('sw install error', e))
  )
})

_self.addEventListener('activate', (event) => {
  console.log('activate')
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== cacheName)
            .map((key) => caches.delete(key))
        )
      )
  )
})

_self.addEventListener('fetch', (e) => {
  const url = e.request.url
  const request = e.request

  if (url.startsWith('http') && e.request.method === 'GET') {
    const isHtmlPageRequest =
      request.headers.get('Accept')?.indexOf('text/html') !== -1 &&
      url.startsWith(_self.origin)

    const cacheKey = isHtmlPageRequest ? '/' : e.request

    e.respondWith(
      (async () => {
        try {
          const responce = await fetch(url)
          const cache = await caches.open(cacheName)
          await cache.put(cacheKey, responce.clone())
          return responce
        } catch (e) {
          const cachedItem = await caches.match(request)
          if (cachedItem) return cachedItem
        }

        // OFFLINE
        const r = await caches.match(cacheKey)
        // console.log(`[Service Worker] Fetching resource: ${url}`);
        if (r) {
          // console.log(`[Service Worker] Return cache resource: ${url}`);
          return r
        }
        return new Response('', {
          status: 502,
          statusText: 'No Connection'
        })
      })()
    )
  }
})
