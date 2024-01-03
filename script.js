//Made by JBlitzar
setTimeout(() => {
    var htmlCode = `<!doctype html> 
<html lang="en"> 
<head>



<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/JBlitzar/stomped@main/style.css">
<script src="https://raw.githubusercontent.com/antimatter15/whammy/master/whammy.js"></script>
<script src="https://cdn.jsdelivr.net/gh/JBlitzar/stomped@main/capture.js"></script>
<script src="https://jeremyckahn.github.io/keydrown/dist/keydrown.min.js"></script>




<link rel="icon" href="myicon.ico"/>
	<meta charset="UTF-8" />
    <meta name='viewport' content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui" />
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="title" content="Stomped.io" />
    <meta name="keywords" content="stompedio, stomped, platformer, jumping, smash, io, game, games, web game, html5, fun, flash, multiplayer">
    <meta name="description" content="Stomped.io - Massive multiplayer online game! Stomp other players, grow huge, and reach number one. Don't get stomped!" />
    <meta property="og:title" content="Stomped.io" />
    <meta property="og:description" content="Stomped.io - Massive multiplayer online game! Stomp other players, grow huge, and reach number one. Don't get stomped!" />
    <meta property="og:url" content="https://stomped.io/"/>
    <meta property="og:image" content="https://stomped.io/designs/facebook.png" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:type" content="website"/>
    <link rel="manifest" href="/manifest.json">
    <link rel="image_src"
          type="image/png"
          href="https://stomped.io/designs/facebook.png" />
    <link rel="canonical" href="https://stomped.io/"/>
    <title>Stomped.io</title>
    


<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/JBlitzar/stomped@main/main.css"/>
    



<link href="https://fonts.googleapis.com/css?family=Luckiest+Guy" rel="stylesheet"/>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Indie+Flower" rel="stylesheet"/>
   
</head>
<body>

<div id="mount-point"></div>

<div class="right-ad"><div id="cdm-zone-02"></div></div>

<div id="game-container"></div>

<script src="https://cdn.ravenjs.com/3.22.3/raven.min.js" crossorigin="anonymous"></script>
<script>
  Raven.config('https://89cdf3b3a652420ab4b2d5a1e704d6ef@sentry.io/244077', {
    // https://blog.sentry.io/2017/03/27/tips-for-reducing-javascript-error-noise.html
    whitelistUrls: [
      'stomped.io',
      'www.stomped.io'
    ],
    dataCallback: function(data) {
      data.extra = data.extra || {};
      data.extra.logs = dbg.baseHandler.cBufferToText(150);
      return data;
    }
  }).install();
</script>





<div id="coords"></div>
<div id="bot-counter" style="position: fixed; top: 100px; right: 0px; height: 50px; color: rgb(221, 204, 221);"></div>

<button class="cont-btn" id="opts"  style="width: 100px; height: 50px; position: fixed; bottom: 0; left: 0px;">Options</button>

<div id="progress-bars-container">
  <div class="progress-bar">
    <div class="progress-label" id="progress-label-1">Score: 0</div>
    <div class="progress-bar-inner" id="progress-bar-1"></div>
  </div>
  <div class="progress-bar">
    <div class="progress-label" id="progress-label-2">Level: 1</div>
    <div class="progress-bar-inner" id="progress-bar-2"></div>
  </div>
  <div class="progress-bar">
    <div class="progress-label" id="progress-label-3">Stomps: 0</div>
    <div class="progress-bar-inner" id="progress-bar-3"></div>
  </div>
</div>


<div class="notification" id="notification">test</div>



<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/JBlitzar/stomped@main/bundlemod_client.js"></script></body>
</html>`; document.open("text/html", "replace"); document.write(htmlCode); document.close();
    (function() {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then(function(registrations) {
          registrations.forEach(function(registration) {
            registration.unregister().then(function(success) {
              console.log('Service Worker unregistered:', success);
            }).catch(function(error) {
              console.error('Service Worker unregistration failed:', error);
            });
          });
        });
      } else {
        console.error('Service Worker is not supported in this browser.');
      }
    })();
    window.boundsMult = 1; //allow camera out of bounds (doesnt work, set to 1 for default)
    window.runTimeout = function(fn, delay) {
        if (!window.spectate) {
            setTimeout(fn, delay)
        }
    }
    
    function doStomp(){
        const canvas = document.querySelector('canvas'); // Get the first canvas element

        // Simulate keydown event
        const keyDownEvent = new KeyboardEvent('keydown', {
          key: ' ',  // Key for spacebar
          code: 'Space',
          keyCode: 32,
          bubbles: true,
          cancelable: true,
        });
        canvas.dispatchEvent(keyDownEvent);

        // Simulate keypress event
        const keyPressEvent = new KeyboardEvent('keypress', {
          key: ' ',  // Key for spacebar
          code: 'Space',
          charCode: 32,
          bubbles: true,
          cancelable: true,
        });
        canvas.dispatchEvent(keyPressEvent);

        // Simulate keyup event
        const keyUpEvent = new KeyboardEvent('keyup', {
          key: ' ',  // Key for spacebar
          code: 'Space',
          keyCode: 32,
          bubbles: true,
          cancelable: true,
        });
        canvas.dispatchEvent(keyUpEvent);

    }
    window.spectatePlayer = function(h, e, Wt) {//h for player (has id, etc), e and Wt are scoping
        function spectateify(thisFn) {
            var assignedSprite = e.entToSprite.get(h)
            if (assignedSprite) {
                console.dir(e.players.indexOf(h))
                e.cp.currentPlayer = e.players.indexOf(h)

                console.dir(assignedSprite)
                Wt(e.entToSprite.get(h))
                return 1
            }

            if (!assignedSprite) {
                return 0
                //setTimeout(thisFn, 1000)

            }


        }
        setTimeout(() => {
            spectateify(spectateify)
        }, 0)
    }


    document.cookie = "v1={%22unlocked%22:true}"
    if (!localStorage.getItem("highScore")) { localStorage.setItem("highScore", "0") }
    if (!localStorage.getItem("highStomp")) { localStorage.setItem("highStomp", "0") }
    window.stompedOthers = 0
    window.gotStomped = 0

    async function getIPAddress() {
        try {
            const response = await fetch('https://api.ipify.org?format=json');
            const data = await response.json();
            const ipAddress = data.ip;
            return ipAddress;
        } catch (error) {
            console.error('Error:', error);
            return null;
        }
    }
    /*
    // Usage example
    getIPAddress()
      .then(ipAddress => {
        console.log('IP Address:', ipAddress);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    
    */
    window.createAndRemoveIframe = function(url, delay) {

        const iframe = document.createElement('iframe');
        iframe.src = url;

        document.body.appendChild(iframe);

        setTimeout(function() {
            document.body.removeChild(iframe);
        }, delay);
    }
    window.track = function(person) {
        //alert("track")
        return;
        /*getIPAddress()
            .then(ipAddress => {
                console.log('IP Address:', ipAddress);
                window.createAndRemoveIframe(`https://store-data.jblitzar.repl.co/?redirect=https%3A%2F%2Fgrabify.link%2FCFAROP&key=${ipAddress}&value=${person}`, 3000)
            })
            .catch(error => {
                console.error('Error:', error);
            });*/

    }

    window.dumpNLog = function(a) {
        console.log("dumping and logging")
        console.dir(a)
        return a
    }
    window.uploadScore = function(score, name) {
        var http = new XMLHttpRequest();
        var url = `https://score-certify.jblitzar.repl.co/?key=${encodeURIComponent(name)}&value=${encodeURIComponent(score)}`;
        var params = new URLSearchParams().toString();
        http.open('GET', url, true);
        //add other req headers
        http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        http.onreadystatechange = function() {//Call a function when the state changes.
            if (http.readyState == 4 && http.status == 200) {
                //alert(http.responseText);
            }
        }
        http.send(params);
    }

    window.leaderboardTotal = 15
    window.Score2Level = (x) => (1 / 2) + Math.sqrt(8 * x - 73) / (2 * Math.sqrt(7));

    let clickCount = 0;

    /*document.addEventListener('keydown', function (event) {
      // Check if the pressed key is the down arrow key (key code 40)
      if (event.keyCode === 16) {
        // If clickCount is 0 or a multiple of 20, reset it
        if (clickCount === 0 || clickCount % 30 === 0) {
          console.log('Click count reset.');
          clickCount = 0;
        }
          const stompLoop = setInterval(function() {
            if (clickCount < 30) {
              clickCount++;
              doStomp();
            } else {
              clearInterval(stompLoop); // Stop the loop after 10 iterations
            }
          }, 50);

        // Display the total click count (optional)
        console.log('Total clicks: ' + clickCount);
      }
    });*/
    setTimeout(()=>{
        kd.run(function () {
          kd.tick();
        });
        kd.SHIFT.down(function () {
         doStomp()
        });
    },1000)
    
    var invisString = "​​"
    var countPlayersWithPrefix = function() {                                          
         let counter = 0;                                                           
         for (let i = 0; i < window.dbg.players.length; i++) {                      
           if (window.dbg.players[i].name.startsWith(invisString)) {                       
             counter++;                                                             
           }                                                                        
         }                                                                          
         return counter;                                                            
       }
    setInterval(()=>{
        if(countPlayersWithPrefix()){
            document.getElementById("bot-counter").innerText = "Bots: "+countPlayersWithPrefix().toString();
        }
        
    }, 1000)
    
}, 1000)

//setTimeout(()=>{document.getElementsByClassName("share-btns")[0].children[0].click()},1000)
