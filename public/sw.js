
var cacheName = "Algorithm-net_cache";
var filesToCache = [
  "/",
  "/index.html",
 "/articoli/index.html",
 "/articoli/animazione1.html",
 "/articoli/canzoni_mus.html",
 "/articoli/cioa.html",
 "/articoli/filmlink.html",
 "/articoli/frog_spider.html",
 "/articoli/somma.html",
 "/images/indice.jpg",
 "/images/favicon.ico",
 "/images/icon57.png",
 "/images/icon192.png",
 "/images/icon512.png",
  "/applicazioni/index.html",
  "/pwa/start-sw.js",
  "/stylesheets/appstyle.css",
  "/stylesheets/sitestyle.css",
  "/manifest.json", 
];
/* Avvia il Service Worker e Memorizza il contenuto nella cache */
self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
});
/* Serve i Contenuti Memorizzati quando sei Offline */
self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
