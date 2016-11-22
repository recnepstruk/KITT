
    var song = new Audio('/sounds/Theme.mp3');
    var wake = new Audio('/sounds/kitt_volume.wav');

    if (annyang) {
        // Let's define our first command. First the text we expect, and then the function it should call
        var commands = {
            'Play my favorite song': function() {
                song.play();
            },
            'Ok pause': function() {
                song.pause();
            },
            'Wake up Kit': function() {
                wake.play();
            },
            '': function() {

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
