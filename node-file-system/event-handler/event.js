// Example#1
// readStream object fires evens when pening and closinga file:

// var fs = require('fs');
// var rs = fs.createReadStream('./demofile.txt');

// rs.on('open', function() {
//     console.log('The file is open');
// });

// ##Events Module##

var events = require('events');
var eventEmitter = new events.EventEmitter();

// Event handler creation:

var myEventHandler = function(){
    console.log('I hear a scream!');
}

// Event handler assigned to an event:
eventEmitter.on('scream', myEventHandler);

// Fire the event up!

eventEmitter.emit('scream')