// Becklan Field App V4.0 - offline shell cache
const CACHE_NAME = "becklan-field-v4-nopreflight-patched-2";
const ASSETS = ["./","./index.html","./manifest.json","./service-worker.js","./assets/icon.png","./assets/apple-touch-icon.png"];
self.addEventListener("install",(e)=>e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener("activate",(e)=>e.waitUntil(self.clients.claim()));
self.addEventListener("fetch",(e)=>{
  const url=new URL(e.request.url);
  if(url.origin===self.location.origin){
    e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
  }
});
