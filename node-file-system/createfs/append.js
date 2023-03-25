// This methood appends specified to a file 
// If there is no existing file a new file will be created
// This is one way to 'create' a file
var fs = require('fs');

fs.appendFile('newfile1.txf', 'What\'s up?', function(err){
    if(err) throw err;
    console.log('Saved!');
})