var cacheName = 'weather-cat-react';
var filesToCache = [
  "/",
  "/index.js",
  "/script.js",
  "/style.css",
];

var locationCacheName = 'locationData-v1';
var landCacheName = 'faData-v1';


self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName && key !== locationCacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});


self.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] Fetch', e.request.url);

  var locationUrl = "https://freegeoip.net/json/";
  var faUrl = "https://use.fontawesome.com/8b2b398755.js";
  var landUrl = "/land";



  if (e.request.url.indexOf(locationUrl) > -1) {
    e.respondWith(
      caches.open(landCacheName).then(function(cache) {
        return fetch(e.request).then(function(response) {
          cache.put(e.request.url, response.clone());
          return response;
        })
      })
    )
  } else if (e.request.url.indexOf("/land") > -1) {
    e.respondWith(
      caches.open(landCacheName).then(function(cache) {
        return fetch(e.request).then(function(response) {
          cache.put(e.request.url, response.clone());
          return response;
        });
      }));
   } else {
    e.respondWith(
      caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
      }));
  }
});
