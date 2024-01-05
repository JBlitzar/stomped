# stomped

### Current state: working
[![GitHub last commit](https://img.shields.io/github/last-commit/JBlitzar/stomped)](https://github.com/JBlitzar/stomped/commits/main)
[![GitHub commit activity](https://img.shields.io/github/commit-activity/m/JBlitzar/stomped)](https://github.com/JBlitzar/stomped/commits/main)
[![](https://data.jsdelivr.com/v1/package/gh/JBlitzar/stomped/badge)](https://www.jsdelivr.com/package/gh/JBlitzar/stomped)

Various scripts related to the game stomped.io

# Installation

Bookmark the script (prepended with `javascript:`) located at https://cdn.jsdelivr.net/gh/JBlitzar/stomped@main/updated.js



<details>
  <summary><h1>Legacy Installation</h1></summary>
# Legacy Installation
Tested on Chrome 120.0.6099.129 on Macos.

Note: You will have to reinstall if updates come out.

1. Open devtools sources, click overrides (https://developer.chrome.com/docs/devtools/overrides)
2. Click the plus, set it to a folder such as ~/Documents/devtools_overrides
3. You have a few options to proceed:
   <details>
    <summary>Manual installation</summary>
      
    - Override (index) with new [index.html](https://raw.githubusercontent.com/JBlitzar/stomped/main/index.html)
    - Override dist/bundle.js with the new [bundle.js](https://raw.githubusercontent.com/JBlitzar/stomped/main/bundlemod_client.js)
  
   </details>
   <details>
    <summary>Automatic installation</summary>
      
     - Download the [override folder](https://github.com/JBlitzar/stomped/raw/main/stomped.io.zip)
     - NOTE: This directory was last updated Dec 23,2023. If major commits have been made since, it may be in an obselete state, in which you will have to re-install manually. Manual files will always be up to date.
  
   </details>


7. Bookmark [updated_headless.js](https://raw.githubusercontent.com/JBlitzar/stomped/main/updated_headless.js) with a javascript: url
   
   Run this code before clicking the bookmark for the first time:
   ```js

   (function() { if ('serviceWorker' in navigator) { navigator.serviceWorker.getRegistrations().then(function(registrations) { registrations.forEach(function(registration) { registration.unregister().then(function(success) { console.log('Service Worker unregistered:', success); }).catch(function(error) { console.error('Service Worker unregistration failed:', error); }); }); }); } else { console.error('Service Worker is not supported in this browser.'); } })();

   ```
8. Accessing the mod is as easy as opening devtools. Make sure you have overrides checked!
</details>

# Issues
Check:
 - Have I ran this code?: 
   ```js

      (function() { if ('serviceWorker' in navigator) { navigator.serviceWorker.getRegistrations().then(function(registrations) { registrations.forEach(function(registration) { registration.unregister().then(function(success) { console.log('Service Worker unregistered:', success); }).catch(function(error) { console.error('Service Worker unregistration failed:', error); }); }); }); } else { console.error('Service Worker is not supported in this browser.'); } })();

   ```
 - https://www.jsdelivr.com/tools/purge
   ```
    https://cdn.jsdelivr.net/gh/JBlitzar/stomped@main/script.js
   https://cdn.jsdelivr.net/gh/JBlitzar/stomped@main/style.css
   https://cdn.jsdelivr.net/gh/JBlitzar/stomped@main/bundlemod_client.js
   https://cdn.jsdelivr.net/gh/JBlitzar/stomped@main/bundlemod_client.min.js
   https://cdn.jsdelivr.net/gh/JBlitzar/stomped@main/headless_ws.js
   ```
# Contributions

Code contributions will not be accepted. If you have a feature request or would like to reprort a bug, you may open an issue










