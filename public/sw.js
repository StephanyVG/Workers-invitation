// Simple Service Worker for Zipmi PWA Demo
const CACHE_NAME = 'zipmi-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Pass through fetch requests for offline demo simulation
  event.respondWith(
    fetch(event.request).catch(() => {
      return new Response('Offline demo content available');
    })
  );
});
