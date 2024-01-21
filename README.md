# stomped

#### Legal disclaimer: https://raw.githubusercontent.com/JBlitzar/stomped/main/LICENSE

### Current state: working
[![GitHub last commit](https://img.shields.io/github/last-commit/JBlitzar/stomped)](https://github.com/JBlitzar/stomped/commits/main)
[![GitHub commit activity](https://img.shields.io/github/commit-activity/m/JBlitzar/stomped)](https://github.com/JBlitzar/stomped/commits/main)
![Github last pushed](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2FJBlitzar%2Fstomped&query=%24.pushed_at&label=Last%20Pushed)





[![](https://data.jsdelivr.com/v1/package/gh/JBlitzar/stomped/badge?style=rounded)](https://www.jsdelivr.com/package/gh/JBlitzar/stomped?tab=stats)
[![](https://data.jsdelivr.com/v1/package/gh/JBlitzar/stomped/badge/week?style=rounded)](https://www.jsdelivr.com/package/gh/JBlitzar/stomped)


[![](https://stomped.io/assets/app-icon.png)](https://stomped.io)

Various scripts related to the game stomped.io

# Installation

Bookmark the script (prepended with `javascript:`) located at https://cdn.jsdelivr.net/gh/JBlitzar/stomped@main/updated.js

# Issues
Check:
 - Have I ran this code?: 
   ```js

      (function() { if ('serviceWorker' in navigator) { navigator.serviceWorker.getRegistrations().then(function(registrations) { registrations.forEach(function(registration) { registration.unregister().then(function(success) { console.log('Service Worker unregistered:', success); }).catch(function(error) { console.error('Service Worker unregistration failed:', error); }); }); }); } else { console.error('Service Worker is not supported in this browser.'); } })();

   ```
 - https://www.jsdelivr.com/tools/purge
   ```
   https://cdn.jsdelivr.net/gh/JBlitzar/stomped@latest/script.js
   https://cdn.jsdelivr.net/gh/JBlitzar/stomped@latest/style.css
   https://cdn.jsdelivr.net/gh/JBlitzar/stomped@latest/bundlemod_client.js
   https://cdn.jsdelivr.net/gh/JBlitzar/stomped@latest/bundlemod_client.min.js
   https://cdn.jsdelivr.net/gh/JBlitzar/stomped@latest/headless_ws.js
   https://cdn.jsdelivr.net/gh/JBlitzar/stomped@latest/capture.js
   ```
# Contributions

Code contributions are not being accepted at this time. If you have a feature request or would like to report a bug, you may open an issue










