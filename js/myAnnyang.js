function play() {
    var turbo = document.getElementById("turbo");
    turbo.play();
}



var song = new Audio('/sounds/Theme.mp3');
var wake = new Audio('/sounds/kitt_volume.wav');
var interested = new Audio('/sounds/kitt_interested.wav');

var kittSounds = [ song, wake,];

if (annyang) {
    // Let's define our first command. First the text we expect, and then the function it should call
    var commands = {
        "Play my favorite song": function() {
            song.play();
        },
        "Shut up kit": function() {
            song.pause();
        },
        "Hello kit": function() {
            wake.play();
        },
        "Are you even listening": function() {
            interested.play();
        },
        ' ': function() {

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
