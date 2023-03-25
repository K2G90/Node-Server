var fs = require('fs');

fs.writeFile('newFile3.txt', 'I need yo ENERGY!', function(err){
    if(err) throw err;
    console.log('Saved!');
});