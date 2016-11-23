if (annyang) {
    // speak the text first then call the function
    var commands = {
        "Hello Kit": function() {
            hello.play();
        },
        "Play my favorite song": function() {
            song.play();
        },
        "Shut up kit": function() {
            song.pause();
        },
        "I hate you": function() {
            kittSongOff[Math.floor(Math.random() * kittSongOff.length)].play();
        },
        "Wake up": function() {
            wake.play();
        },
        "Are you even listening": function() {
            interested.play();
        },
        'Who are you': function() {
            intro.play();
        },
        'Slow down kit': function() {
            document.getElementById('d').style.animation = "throughSpace 3s linear";
            document.getElementById('d').style.animationIterationCount = "infinite";
            // document.getElementById('d').style.animationTimingFunction = "ease-out";
        },
        "Play music": function() {
            barry.play();
        },
        "Stop music": function() {
            barry.pause();
        }
    };

    // Add our commands to annyang
    annyang.addCommands(commands);

    // Start listening. You can call this here, or attach this call to an event, button, etc.
    annyang.start();

};

// Plays sound when hovering over Turbo Button
function play() {
    var turbo = document.getElementById("turbo");
    turbo.play();
}

//Peel Out Sound
function peelOut() {
    var peel = document.getElementById("increase");
    peel.play();
}

//Change Grid Speed
function speedUp() {
    document.getElementById('d').style.animation = "throughSpace .2s linear";
    document.getElementById('d').style.animationIterationCount = "infinite";
    // document.getElementById('d').style.animationTimingFunction = "ease-in";

}



// Predefined audio variables
var song = new Audio('/sounds/Theme.mp3');
var wake = new Audio('/sounds/kitt_volume.wav');
var interested = new Audio('/sounds/kitt_interested.wav');
var mad = new Audio('/sounds/areyoumad.m4a');
// var wish = new Audio('/sounds/asyouwish.m4a');
var pardon = new Audio('/sounds/begpardon.wav');
var veryWell = new Audio('/sounds/verywell.m4a');
var why = new Audio('/sounds/why.m4a');
var logic = new Audio('/sounds/yourlogic.m4a');
var intro = new Audio('/sounds/kitt_intro.m4a');
var hello = new Audio('/sounds/hellohappy.m4a');
var barry = new Audio('/sounds/lovemakin.mp3');

// Array of random responses
var kittSongOff = [mad, pardon, veryWell, why, logic];









// 