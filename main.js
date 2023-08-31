x = 0
y = 0
Circle = ""
Rect = ""
var SpeechRecognition = window.webkitSpeechRecognition;
 var recognition = new SpeechRecognition();
 function start() {
    document.getElementById("status").innerHTML = "estouteescutando"
    recognition.start()
 }
 recognition.onresult = function(event) {
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "falareconhacida" + content
    if (content=="Circle"){
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 900);
        document.getElementById("status").innerHTML = "desenhandoCirculo"
Circle = "set"
    }
    if (content=="Rect"){
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 900);
        document.getElementById("status").innerHTML = "desenhandoRetangulo"
Rect = "set"
    }
 }
 function setup(){
    canvas=createCanvas(900,600)
 }
 function draw(){
    if (Circle=="set"){
        radius = Math.floor(Math.random() * 100);
        circle(x,y,radios)
        document.getElementById("status").innerHTML = "ocirculofoidesenhado"
        Circle=""
    }
    if (Rect=="set"){
        rect(x,y,70,50)
        document.getElementById("status").innerHTML = "oretangulofoidesenhado"
        Rect=""
    }
 }