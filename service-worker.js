self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("portfolio-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "style.css",
        "script.js"
      ]);
    })
  );
});
