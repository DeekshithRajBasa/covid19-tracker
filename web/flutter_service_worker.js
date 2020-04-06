'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "98d9ead0351c57985690256d3a48589c",
"assets/assets/fonts/OpenSans.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"assets/assets/images/appicon.jpg": "a495dbb79d65f5a8bfa1e8ec4e4dba75",
"assets/assets/images/deekshith.jpg": "f939dffbb1b0025876e1fc5ea89c90a0",
"assets/assets/images/doctor.png": "615e04838f7b7df9cd4cdf4a7658179b",
"assets/FontManifest.json": "5003413f0660c93cdd1a4dc5f5fc5ffe",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "f924f24e5dd6e1ee130b86ba2c9bc161",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"favicon.jpg": "a495dbb79d65f5a8bfa1e8ec4e4dba75",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "ba22a5705b39d56826e6d5d8af95231f",
"/": "ba22a5705b39d56826e6d5d8af95231f",
"main.dart.js": "51da4e089c1108b25795e292c52500e3",
"manifest.json": "f6fb27ac1fa923686ffeb32a7ec27d33"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
