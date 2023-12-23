# stomped

### Current state: working
[![GitHub last commit](https://img.shields.io/github/last-commit/JBlitzar/stomped)](https://github.com/JBlitzar/stomped/commits/main)
[![GitHub commit activity](https://img.shields.io/github/commit-activity/m/JBlitzar/stomped)](https://github.com/JBlitzar/stomped/commits/main)

Various scripts related to the game stomped.io\



# Installation
Tested on Chrome. 
1. Open devtools sources, click overrides (https://developer.chrome.com/docs/devtools/overrides)
2. Override (index) with new [index.html](https://raw.githubusercontent.com/JBlitzar/stomped/main/index.html)
3. Override dist/bundle.js with the new [bundle.js](https://raw.githubusercontent.com/JBlitzar/stomped/main/bundlemod_client.js)
4. Bookmark [updated_headless.js](https://raw.githubusercontent.com/JBlitzar/stomped/main/updated_headless.js) with a javascript: url
   
   Run this code before clicking the bookmark for the first time:
   ```js

   (function() { if ('serviceWorker' in navigator) { navigator.serviceWorker.getRegistrations().then(function(registrations) { registrations.forEach(function(registration) { registration.unregister().then(function(success) { console.log('Service Worker unregistered:', success); }).catch(function(error) { console.error('Service Worker unregistration failed:', error); }); }); }); } else { console.error('Service Worker is not supported in this browser.'); } })();

   ```
6. Accessing the mod is as easy as opening devtools. Make sure you have overrides checked!

# Issues

Try running this code: 
```js

   (function() { if ('serviceWorker' in navigator) { navigator.serviceWorker.getRegistrations().then(function(registrations) { registrations.forEach(function(registration) { registration.unregister().then(function(success) { console.log('Service Worker unregistered:', success); }).catch(function(error) { console.error('Service Worker unregistration failed:', error); }); }); }); } else { console.error('Service Worker is not supported in this browser.'); } })();

   ```









