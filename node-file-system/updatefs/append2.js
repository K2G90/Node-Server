/** This is an example of how to use the append method to update files
on a server
**/

var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'You can get with this! Or You can get with that!', function(err){
    if(err) throw err;
    console.log('Updated!');
});