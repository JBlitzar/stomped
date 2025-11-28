(function (open) {
  XMLHttpRequest.prototype.open = function (method, url, async, user, pass) {
    var xhr = this;

    // Override onreadystatechange to handle errors
    var originalOnreadystatechange = xhr.onreadystatechange;
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        // Check if the request was not successful (status outside the range 200-299)
        if (xhr.status < 200 || xhr.status >= 300) {
          // Check if the URL matches the desired pattern
          if (xhr.responseURL.includes("stomped.io/socket.io/?")) {
            document.title = "Server overloaded";
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

let a = document.createElement("h1");
a.id = "h";
// document.body.innerHTML = "";
document.body.appendChild(a);
(function () {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.getRegistrations().then(function (registrations) {
      registrations.forEach(function (registration) {
        registration
          .unregister()
          .then(function (success) {
            console.log("Service Worker unregistered:", success);
          })
          .catch(function (error) {
            console.error("Service Worker unregistration failed:", error);
          });
      });
    });
  } else {
    console.error("Service Worker is not supported in this browser.");
  }
})();
function getRandomChoice(choices) {
  var randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
var invisString = "​​";
var bots = 0;
var connectedSockets = [];
function removeSocket(socket) {
  const index = connectedSockets.indexOf(socket);
  if (index !== -1) {
    connectedSockets.splice(index, 1);
  }
}
function disconnectAllSockets() {
  connectedSockets.forEach((socket) => {
    socket.disconnect(true);
  });
}
function join(e, t = "bot", i = "robot-0", r = "us-east-1.stomped.io") {
  if (i === "random") {
    var skins = [
      "plain-0",
      "plain-1",
      "plain-2",
      "plain-3",
      "plain-4",
      "plain-5",
      "plain-6",
      "spacesuit-0",
      "spacesuit-1",
      "spacesuit-2",
      "robot-0",
      "robot-1",
      "robot-2",
      "alien-0",
      "alien-1",
      "alien-2",
      "skeleton-0",
      "skeleton-1",
      "skeleton-2",
      "plumber-0",
      "plumber-1",
      "plumber-2",
      "reddit-0",
      "slender-0",
      "fady-0",
      "4chan-0",
      "santa-0",
    ];
    i = getRandomChoice(skins);
  }
  if (t === "random") {
    var names = [
      "stomperoni",
      "guncap slingbad",
      "cobalt",
      "driftdetector",
      "death from above",
      "agony of defeat",
      "a",
      "someone",
      "something",
      "atomic blastoid",
      "cya",
      "what",
      "lalal",
      ".",
      "asdf",
      "leo",
      "imagine getting stomped by me",
      "sherwood gladiator",
    ];
    t = getRandomChoice(names);
  }
  t = invisString + t;

  // const socket = e.connect(r);
  const socket = (0, e.connect)(r);

  connectedSockets.push(socket);

  socket.emit("join", {
    name: t,
    char: i,
  });
  socket.on("joined", function (t, i) {
    console.log("Bot joined the game:", t, i);
    bots++;
    document.title = "Server functional";
  });

  socket.on("error", function (error) {
    console.log("Server overloaded");
    document.title = "Server overloaded";
  });

  // Handle disconnection
  socket.on("disconnect", function () {
    console.log("disconnect");
    bots--;
    removeSocket(socket);
  });

  // Auto-disconnect after 60 seconds
  setTimeout(() => {
    if (socket.connected) {
      socket.disconnect();
    }
  }, 60 * 1000);

  return socket;
}
function run(mode, name, skin) {
  document.title = "Running in mode: " + mode;
  setInterval(() => {
    document.getElementById("h").innerHTML = bots.toString();
  }, 1000);
  if (mode == "lag") {
    window._joining_interval = setInterval(() => {
      join(window.dbg.dbg_e, name, skin);
    }, 1);
  } else if (mode == "feed") {
    window._joining_interval = setInterval(() => {
      join(window.dbg.dbg_e, name, skin);
    }, 1000);
  }
}
window._run = run;
window._stop = function () {
  clearInterval(window._joining_interval);
};

// Create settings UI
function createSettingsUI() {
  const settingsDiv = document.createElement("div");
  settingsDiv.id = "bot-settings";
  settingsDiv.style.cssText = `
        position: fixed;
        top: 10px;
        right: 10px;
        background: rgba(0,0,0,0.8);
        color: white;
        padding: 15px;
        border-radius: 8px;
        font-family: monospace;
        z-index: 9999;
        min-width: 200px;
    `;

  settingsDiv.innerHTML = `
        <h3 style="margin-top: 0;">Bot Settings</h3>
        <div>
            <label>Mode:</label><br>
            <input type="radio" name="mode" value="feed" checked> Feed (1s interval)<br>
            <input type="radio" name="mode" value="lag"> Lag (1ms interval)
        </div>
        <div style="margin-top: 10px;">
            <label>Name:</label><br>
            <input type="text" id="bot-name" value="bot" style="width: 100%; padding: 2px;">
        </div>
        <div style="margin-top: 10px;">
            <label>Skin:</label><br>
            <select id="bot-skin" style="width: 100%; padding: 2px;">
                <option value="random">Random</option>
                <option value="fady-0" selected>fady-0</option>
                <option value="robot-0">robot-0</option>
                <option value="plain-0">plain-0</option>
                <option value="spacesuit-0">spacesuit-0</option>
                <option value="alien-0">alien-0</option>
                <option value="skeleton-0">skeleton-0</option>
            </select>
        </div>
        <div style="margin-top: 15px;">
            <button id="start-bot" style="padding: 5px 10px; margin-right: 5px;">Start</button>
            <button id="stop-bot" style="padding: 5px 10px;">Stop</button>
        </div>
    `;

  document.body.appendChild(settingsDiv);

  // Add event listeners
  document.getElementById("start-bot").onclick = function () {
    const mode = document.querySelector('input[name="mode"]:checked').value;
    const name = document.getElementById("bot-name").value || "bot";
    const skin = document.getElementById("bot-skin").value;
    run(mode, name, skin);
  };

  document.getElementById("stop-bot").onclick = function () {
    window._stop();
    disconnectAllSockets();
  };
}

setTimeout(() => {
  document.title = "Bot generator";
  document.getElementById("h").innerHTML = "Code loaded.";

  setTimeout(() => {
    createSettingsUI();
  }, 100);
}, 1000);
