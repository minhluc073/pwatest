const staticName = "wedo template";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/css/shortcodes.css",
  "/css/responsive.css",
  "/javascript/app.js",
  "/javascript/main.js",

  "/images/logo.png",
  "/images/logo-2.png",
  "/images/logo-dark.png",
  "/images/logo-footer-dark.png",
  "/images/logo-footer-light.png",
  "/images/logo-menu.png",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticName).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
