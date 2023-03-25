var fs = require('fs');

fs.rename('newfile1.txt', 'newNamedfile1.txt', function(err){
    if(err) throw err;
    console.log('File Renamed');
});