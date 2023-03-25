var fs = require('fs');

fs.appendFile('newfile1.txf', 'What\'s up?', function(err){
    if(err) throw err;
    console.log('Saved!');
})