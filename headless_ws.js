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
    run((confirm("OK for feed") ? "feed" : "lag"), "Merry Xmas", "santa-0")
    
},100)
},1000)
