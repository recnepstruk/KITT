if (annyang) {
    // speak the text first then call the function
    var commands = {
        "Play my favorite song": function() {
            song.play();
        },
        "Shut up kit": function() {
            song.pause();
        },
        // "Shut up kit": function() {
        //     kittSongOff[Math.floor(Math.random() * kittSongOff.length)].play();
        // },

        "Wake up kit": function() {
            wake.play();
        },
        "Are you even listening": function() {
            interested.play();
        },
        'Who are you': function() {
            intro.play();
        },
        ' ': function() {

        },
        ' ': function() {

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
// var peel = new Audio('/sounds/ferrari.mp3');
function peelOut() {
    var peel = document.getElementById("increase");
    peel.play();
}

//Change Grid Speed
function speedUp() {
    document.getElementById('d').style.animation = "throughSpace .2s linear";
    document.getElementById('d').style.animationIterationCount = "infinite";
}
function resetStyle() {
    // document.getElementById('d').style.color = 'black';
}



// Predefined audio variables
var song = new Audio('/sounds/Theme.mp3');
var wake = new Audio('/sounds/kitt_volume.wav');
var interested = new Audio('/sounds/kitt_interested.wav');
var mad = new Audio('/sounds/areyoumad.m4a');
var wish = new Audio('/sounds/asyouwish.m4a');
var pardon = new Audio('/sounds/begpardon.wav');
var veryWell = new Audio('/sounds/verywell.m4a');
var why = new Audio('/sounds/why.m4a');
var logic = new Audio('/sounds/yourlogic.m4a');
var intro = new Audio('/sounds/kitt_intro.m4a');
var mad = new Audio('/sounds/');

// Array of random responses
var kittSongOff = [mad, wish, pardon, veryWell, why, logic];

