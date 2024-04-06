self.addEventListener('install', (event) => {
  const cacheKey = 'FaithCache_v1';

  event.waitUntil(caches.open(cacheKey).then((cache) => {

    // Add all the assets in the array to the 'FaithCache_v1'
    // 'Cache' instance for later use.

    return cache.addAll([
      'css/global.css',
      'js/global.js'
    ]);
  }));
});
self.addEventListener('activate', (event) => {

  // Specify allowed cache keys

  const cacheAllowList = ['FaithCache_v2'];

  // Get all the currently active `Cache` instances.

  event.waitUntil(caches.keys().then((keys) => {

    // Delete all caches that aren't in the allow list:

    return Promise.all(keys.map((key) => {
      if (!cacheAllowList.includes(key)) {
        return caches.delete(key);
      }
    }));
  }));
});